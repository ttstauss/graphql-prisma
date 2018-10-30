const Post = {
  comments: {
    fragment: 'fragment postId on Post { id }',
    resolve(parent, args, { prisma }, info) {
      return prisma.query.comments({
        where: {
          post: {
            id: parent.id,
            disableComments: false
          }
        }
      })
    }
  }
}

export { Post as default }
