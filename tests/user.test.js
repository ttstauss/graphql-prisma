import 'cross-fetch/polyfill'
import prisma from '../src/prisma'
import seedDatabase, { userOne } from './utils/seedDatabase'
import getClient from './utils/getClient'
import { createUser, getUsers, login, getProfile, me } from './utils/operations'

const client = getClient()

beforeEach(seedDatabase)

test('should create a new user', async () => {
  const variables = {
    data: {
      name: 'Tanner',
      email: 'tanner@example.com',
      password: 'abc12345'
    }
  }

  const response = await client.mutate({
    mutation: createUser,
    variables
  })

  const exists = await prisma.exists.User({
    id: response.data.createUser.user.id
  })
  expect(exists).toBe(true)
})

test('should expose public author profiles', async () => {
  const response = await client.query({ query: getUsers })

  expect(response.data.users.length).toBe(2)
})

test('should not login with bad credentials', async () => {
  const variables = {
    data: {
      email: 'taylor@example.com',
      password: 'abc12345!'
    }
  }

  await expect(client.mutate({ mutation: login, variables })).rejects.toThrow()
})

test('should not create a new user with invalid password', async () => {
  const variables = {
    data: {
      name: 'Tanner',
      email: 'Tanner@example.comt',
      password: 'abc123'
    }
  }

  await expect(
    client.mutate({ mutation: createUser, variables })
  ).rejects.toThrow()
})

test('should fetch user profile', async () => {
  const client = getClient(userOne.jwt)
  const { data } = await client.query({ query: getProfile })

  expect(data.me.id).toBe(userOne.user.id)
  expect(data.me.name).toBe(userOne.user.name)
  expect(data.me.email).toBe(userOne.user.email)
})

test('should not signup a user with email that is already in use', async () => {
  const variables = {
    data: { name: 'Taylor', email: 'taylor@example.com', password: 'abc12345' }
  }

  await expect(
    client.mutate({ mutation: createUser, variables })
  ).rejects.toThrow()
})

test('should login and provide authentication tokent', async () => {
  const variables = {
    data: {
      email: 'taylor@example.com',
      password: 'abc12345'
    }
  }

  const { data } = await client.mutate({ mutation: login, variables })

  expect(data.login).toHaveProperty('token')
})

test('should reject me query without authentication', async () => {
  await expect(client.query({ query: me })).rejects.toThrow()
})

test('should hide emails when fetching list of user', async () => {
  const response = await client.query({ query: getUsers })

  expect(response.data.users[0].email).toBe(null)
  expect(response.data.users[1].email).toBe(null)
})
