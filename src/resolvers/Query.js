import getUserId from '../utils/getUserId'

const Query = {
  me(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)

    return prisma.query.user({ where: { id: userId } })
  },
  users(parent, args, { prisma }, info) {
    const opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy
    }

    if (args.query) {
      opArgs.where = {
        OR: [
          {
            name_contains: args.query
          }
        ]
      }
    }

    return prisma.query.users(opArgs, info)
  },
  myPosts(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)
    const opArgs = {
      where: { author: { id: userId } },
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy
    }

    if (args.query) {
      opArgs.where.OR = [
        {
          title_contains: args.query
        },
        {
          body_contains: args.query
        }
      ]
    }

    return prisma.query.posts(opArgs, info)
  },
  posts(parent, args, { prisma }, info) {
    const opArgs = {
      where: { published: true },
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy
    }

    if (args.query) {
      opArgs.where.OR = [
        {
          title_contains: args.query
        },
        {
          body_contains: args.query
        }
      ]
    }

    return prisma.query.posts(opArgs, info)
  },
  comments(parent, args, { prisma }, info) {
    const opArgs = {
      where: { post: { disableComments: false } },
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy
    }

    return prisma.query.comments(opArgs, info)
  },
  async post(parent, args, { prisma, request }, info) {
    const userId = getUserId(request, false)

    const [post] = await prisma.query.posts(
      {
        where: {
          id: args.id,
          OR: [{ published: true }, { author: { id: userId } }]
        }
      },
      info
    )

    if (!post) {
      throw new Error('Post not found')
    }

    return post
  }
}

export { Query as default }
