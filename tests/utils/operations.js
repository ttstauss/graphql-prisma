import { gql } from 'apollo-boost'

const createUser = gql`
  mutation($data: CreateUserInput!) {
    createUser(data: $data) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

const getUsers = gql`
  query {
    users {
      id
      name
      email
    }
  }
`

const login = gql`
  mutation($data: LoginUserInput!) {
    login(data: $data) {
      token
    }
  }
`

const getProfile = gql`
  query {
    me {
      id
      name
      email
    }
  }
`

const getPosts = gql`
  query {
    posts {
      id
      title
      body
      published
      disableComments
    }
  }
`

const myPosts = gql`
  query {
    myPosts {
      id
      title
      body
      published
      disableComments
    }
  }
`

const updatePost = gql`
  mutation($id: ID!, $data: UpdatePostInput!) {
    updatePost(id: $id, data: $data) {
      id
      title
      body
      published
      disableComments
    }
  }
`

const createPost = gql`
  mutation($data: CreatePostInput!) {
    createPost(data: $data) {
      id
      title
      body
      published
      disableComments
    }
  }
`

const deletePost = gql`
  mutation($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

const deleteComment = gql`
  mutation($id: ID!) {
    deleteComment(id: $id) {
      id
    }
  }
`

const subscribeToPosts = gql`
  subscription {
    post {
      mutation
    }
  }
`

const subscribeToComments = gql`
  subscription($postId: ID!) {
    comment(postId: $postId) {
      mutation
      node {
        id
        text
      }
    }
  }
`

const me = gql`
  query {
    me {
      id
      name
      email
    }
  }
`

const getPost = gql`
  query($id: ID!) {
    post(id: $id) {
      id
      title
      body
      published
      disableComments
    }
  }
`

const getPostComments = gql`
  query($id: ID!) {
    post(id: $id) {
      disableComments
      comments {
        id
        text
      }
    }
  }
`

const createComment = gql`
  mutation($data: CreateCommentInput!) {
    createComment(data: $data) {
      id
      text
    }
  }
`

const updateComment = gql`
  mutation($id: ID!, $data: UpdateCommentInput!) {
    updateComment(id: $id, data: $data) {
      id
      text
    }
  }
`

export {
  createUser,
  getUsers,
  login,
  getProfile,
  getPosts,
  myPosts,
  updatePost,
  createPost,
  deletePost,
  deleteComment,
  subscribeToPosts,
  subscribeToComments,
  me,
  getPost,
  getPostComments,
  createComment,
  updateComment
}
