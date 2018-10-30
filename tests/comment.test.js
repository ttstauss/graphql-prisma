import 'cross-fetch/polyfill'
import prisma from '../src/prisma'
import seedDatabase, {
  userOne,
  commentOne,
  commentTwo,
  postOne,
  userTwo,
  postTwo,
  commentThree,
  postFour
} from './utils/seedDatabase'
import getClient from './utils/getClient'
import {
  deleteComment,
  subscribeToComments,
  getPostComments,
  createComment,
  updateComment
} from './utils/operations'

jest.setTimeout(10000)

const client = getClient()

beforeEach(seedDatabase)

test('should delete own comment', async () => {
  const client = getClient(userOne.jwt)
  const variables = { id: commentTwo.comment.id }

  await client.mutate({ mutation: deleteComment, variables })
  const exists = await prisma.exists.Comment({
    id: commentTwo.comment.id
  })

  expect(exists).toBe(false)
})

test('should not delete other users comment on unowned post', async () => {
  const client = getClient(userOne.jwt)
  const variables = { id: commentThree.comment.id }

  await expect(
    client.mutate({ mutation: deleteComment, variables })
  ).rejects.toThrow()
})

test('should delete other users comment on own post', async () => {
  const client = getClient(userOne.jwt)
  const variables = {
    id: commentOne.comment.id
  }

  await client.mutate({ mutation: deleteComment, variables })
  const exists = await prisma.exists.Comment({ id: commentOne.comment.id })

  expect(exists).toBe(false)
})

test('should fetch post comments if comments are not disabled', async () => {
  const variables = { id: postOne.post.id }

  const { data } = await client.query({ query: getPostComments, variables })

  expect(data.post.comments.length).toBe(2)
})

test('should not fetch post comments if comments disabled', async () => {
  const variables = { id: postFour.post.id }

  const { data } = await client.query({ query: getPostComments, variables })

  expect(data.post.comments.length).toBe(0)
})

test('should create new comment', async () => {
  const client = getClient(userOne.jwt)
  const variables = {
    data: {
      text: 'This is a test comment',
      post: postOne.post.id
    }
  }

  const { data } = await client.mutate({ mutation: createComment, variables })
  const exists = await prisma.exists.Comment({
    id: data.id
  })

  expect(data.createComment.text).toBe('This is a test comment')
  expect(exists).toBe(true)
})

test('should not create comment on draft post', async () => {
  const client = getClient(userTwo.jwt)
  const variables = {
    data: {
      text: 'This is a test comment',
      post: postTwo.post.id
    }
  }

  await expect(
    client.mutate({ mutation: createComment, variables })
  ).rejects.toThrow()
})

test('should not create comment on post if comments disabled', async () => {
  const client = getClient(userTwo.jwt)
  const variables = {
    data: {
      text: 'A comment that should not work',
      post: postFour.id
    }
  }

  await expect(
    client.mutate({ mutation: createComment, variables })
  ).rejects.toThrow()
})

test('should update comment', async () => {
  const client = getClient(userOne.jwt)
  const variables = {
    id: commentTwo.comment.id,
    data: {
      text: 'This is an updated comment'
    }
  }

  const { data } = await client.mutate({ mutation: updateComment, variables })
  const exists = await prisma.exists.Comment({
    id: commentTwo.comment.id
  })

  expect(data.updateComment.text).toBe('This is an updated comment')
  expect(exists).toBe(true)
})

test('should not update another users comment', async () => {
  const client = getClient(userOne.jwt)
  const variables = {
    id: commentOne.comment.id,
    data: { text: 'This is an updated comment' }
  }

  await expect(
    client.mutate({ mutation: updateComment, variables })
  ).rejects.toThrow()
})

test('should require authentication to create a comment', async () => {
  const variables = {
    data: {
      text: 'This is a test comment',
      post: postTwo.post.id
    }
  }

  await expect(
    client.mutate({ mutation: createComment, variables })
  ).rejects.toThrow()
})

test('should require authentication to update a comment', async () => {
  const variables = {
    id: commentOne.comment.id,
    data: {
      text: 'This is an updated comment'
    }
  }

  await expect(
    client.mutate({ mutation: updateComment, variables })
  ).rejects.toThrow()
})

test('should require authentication to delete a comment', async () => {
  await expect(client.mutate({ mutation: deleteComment })).rejects.toThrow()
})

test('should subscribe to comments for a post', async done => {
  const variables = {
    postId: postOne.post.id
  }

  client.subscribe({ query: subscribeToComments, variables }).subscribe({
    next(response) {
      expect(response.data.comment.mutation).toBe('DELETED')
      done()
    }
  })

  await prisma.mutation.deleteComment({ where: { id: commentOne.comment.id } })
})
