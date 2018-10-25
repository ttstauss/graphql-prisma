import jwt from 'jsonwebtoken'

const getUserId = (request, requireAuth = true) => {
  const header = request.request
    ? request.request.headers.authorization // for http requests
    : request.connection.context.Authorization // for socket request

  if (header) {
    const token = header.replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded.userId
  }

  if (requireAuth) {
    throw new Error('Authentication required')
  }

  return null
}

export { getUserId as default }
