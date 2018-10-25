const users = [
  {
    id: '1',
    name: 'Taylor',
    email: 'taylor@example.com',
    age: 33
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com'
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
  }
]

const posts = [
  {
    id: '1',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
  },
  {
    id: '2',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '1'
  },
  {
    id: '3',
    title: 'Programming Music',
    body: '',
    published: true,
    author: '2'
  }
]

const comments = [
  {
    id: '1',
    text: 'This worked well for me. Thanks!',
    author: '3',
    post: '1'
  },
  {
    id: '2',
    text: 'Glad you enjoyed it.',
    author: '1',
    post: '1'
  },
  {
    id: '3',
    text: 'This did not work.',
    author: '2',
    post: '2'
  },
  {
    id: '4',
    text: 'Nevermind. I got it to work',
    author: '1',
    post: '3'
  }
]

const db = {
  users,
  posts,
  comments
}

export default db
