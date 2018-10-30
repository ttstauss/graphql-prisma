import 'cross-fetch/polyfill'
import prisma from '../src/prisma'
import seedDatabase, {
  userOne,
  userTwo,
  postOne,
  postTwo
} from './utils/seedDatabase'
import getClient from './utils/getClient'
import {
  getPosts,
  myPosts,
  updatePost,
  createPost,
  deletePost,
  subscribeToPosts,
  getPost
} from './utils/operations'

jest.setTimeout(10000)

const client = getClient()

beforeEach(seedDatabase)

test('should expose published posts', async () => {
  const response = await client.query({ query: getPosts })

  expect(response.data.posts.length).toBe(3)
  expect(response.data.posts[0].published).toBe(true)
})

test('should fetch users posts', async () => {
  const client = getClient(userOne.jwt)
  const { data } = await client.query({ query: myPosts })

  expect(data.myPosts.length).toBe(3)
})

test('should be able to update own post', async () => {
  const client = getClient(userOne.jwt)
  const variables = { id: postOne.post.id, data: { published: false } }

  const { data } = await client.mutate({ mutation: updatePost, variables })
  const exists = await prisma.exists.Post({
    id: postOne.post.id,
    published: false
  })

  expect(data.updatePost.published).toBe(false)
  expect(exists).toBe(true)
})

test('should create a post', async () => {
  const client = getClient(userOne.jwt)
  const variables = {
    data: {
      title: 'A Test Post',
      body: '',
      published: true,
      disableComments: false
    }
  }

  const { data } = await client.mutate({ mutation: createPost, variables })
  const exists = await prisma.exists.Post({
    id: data.id
  })

  expect(data.createPost.title).toBe('A Test Post')
  expect(data.createPost.body).toBe('')
  expect(data.createPost.published).toBe(true)
  expect(data.createPost.disableComments).toBe(false)
  expect(exists).toBe(true)
})

test('should delete post', async () => {
  const client = getClient(userOne.jwt)
  const variables = { id: postTwo.post.id }

  await client.mutate({ mutation: deletePost, variables })
  const exists = await prisma.exists.Post({
    id: postTwo.post.id
  })

  expect(exists).toBe(false)
})

test('should not be able to update another users post', async () => {
  const client = getClient(userTwo.jwt)
  const variables = { id: postOne.post.id, data: { published: false } }

  await expect(
    client.mutate({ mutation: updatePost, variables })
  ).rejects.toThrow()
})

test('should not be able to delete another users post', async () => {
  const client = getClient(userTwo.jwt)
  const variables = {
    id: postOne.post.id
  }

  await expect(
    client.mutate({ mutation: deletePost, variables })
  ).rejects.toThrow()
})

test('should require authentication to create a post', async () => {
  const variables = {
    data: {
      title: 'A New Post',
      body: '',
      published: true,
      disableComments: false
    }
  }

  await expect(
    client.mutate({ mutation: createPost, variables })
  ).rejects.toThrow()
})

test('should require authentication to update a post', async () => {
  const variables = {
    id: postOne.post.id,
    data: {
      published: false
    }
  }

  await expect(
    client.mutate({ mutation: updatePost, variables })
  ).rejects.toThrow()
})

test('should require authentication to delete post', async () => {
  const variables = {
    id: postOne.post.id
  }
  await expect(
    client.mutate({ mutation: deletePost, variables })
  ).rejects.toThrow()
})

test('should fetch published post by id', async () => {
  const variables = {
    id: postOne.post.id
  }

  const { data } = await client.query({ query: getPost, variables })

  expect(data.post.published).toBe(true)
})

test('should fetch own post by id', async () => {
  const client = getClient(userOne.jwt)
  const variables = {
    id: postTwo.post.id
  }

  const { data } = await client.query({ query: getPost, variables })

  expect(data.post.published).toBe(false)
})

test('should not fetch draft post from other user', async () => {
  const client = getClient(userTwo.jwt)
  const variables = {
    id: postTwo.post.id
  }

  await expect(client.query({ query: getPost, variables })).rejects.toThrow()
})

test('should subscribe to changes for published posts', async done => {
  client.subscribe({ query: subscribeToPosts }).subscribe({
    next(response) {
      expect(response.data.post.mutation).toBe('DELETED')
      done()
    }
  })

  await prisma.mutation.deletePost({ where: { id: postOne.post.id } })
})
