import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../../src/prisma'

const userOne = {
  input: {
    name: 'Taylor',
    email: 'taylor@example.com',
    password: bcrypt.hashSync('abc12345')
  },
  user: undefined,
  jwt: undefined
}

const userTwo = {
  input: {
    name: 'Jordan',
    email: 'jordan@example.com',
    password: bcrypt.hashSync('abc12345')
  },
  user: undefined,
  jwt: undefined
}

const postOne = {
  input: {
    title: 'My Published Post',
    body: '',
    published: true
  },
  post: undefined
}

const postTwo = {
  input: {
    title: 'My Draft Post',
    body: '',
    published: false
  },
  post: undefined
}

const postThree = {
  input: {
    title: "Another Post for Y'all",
    body: '',
    published: true
  },
  post: undefined
}

const commentOne = {
  input: {
    text: 'Great post. Thanks for sharing!'
  },
  comment: undefined
}

const commentTwo = {
  input: {
    text: 'I am glad you enjoyed it.'
  },
  comment: undefined
}

const commentThree = {
  input: {
    text: 'This is dope yo'
  }
}

const seedDatabase = async () => {
  // delete test data
  await prisma.mutation.deleteManyComments()
  await prisma.mutation.deleteManyPosts()
  await prisma.mutation.deleteManyUsers()

  // create userOne
  userOne.user = await prisma.mutation.createUser({
    data: userOne.input
  })
  userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.JWT_SECRET)

  // create userTwo
  userTwo.user = await prisma.mutation.createUser({
    data: userTwo.input
  })
  userTwo.jwt = jwt.sign({ userId: userTwo.user.id }, process.env.JWT_SECRET)

  // create postOne
  postOne.post = await prisma.mutation.createPost({
    data: {
      ...postOne.input,
      author: {
        connect: {
          id: userOne.user.id
        }
      }
    }
  })

  // create postTwo
  postTwo.post = await prisma.mutation.createPost({
    data: {
      ...postTwo.input,
      author: {
        connect: {
          id: userOne.user.id
        }
      }
    }
  })

  // create postThree
  postThree.post = await prisma.mutation.createPost({
    data: {
      ...postThree.input,
      author: {
        connect: { id: userTwo.user.id }
      }
    }
  })

  // create commentOne
  commentOne.comment = await prisma.mutation.createComment({
    data: {
      ...commentOne.input,
      author: {
        connect: {
          id: userTwo.user.id
        }
      },
      post: {
        connect: {
          id: postOne.post.id
        }
      }
    }
  })

  // create commentTwo
  commentTwo.comment = await prisma.mutation.createComment({
    data: {
      ...commentTwo.input,
      author: {
        connect: {
          id: userOne.user.id
        }
      },
      post: {
        connect: {
          id: postOne.post.id
        }
      }
    }
  })

  // create commentThree
  commentThree.comment = await prisma.mutation.createComment({
    data: {
      ...commentThree.input,
      author: {
        connect: {
          id: userTwo.user.id
        }
      },
      post: {
        connect: {
          id: postThree.post.id
        }
      }
    }
  })
}

export {
  seedDatabase as default,
  userOne,
  userTwo,
  postOne,
  postTwo,
  postThree,
  commentOne,
  commentTwo,
  commentThree
}
