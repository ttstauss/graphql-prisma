module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBook {
  count: Int!
}

type AggregateReview {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Book {
  id: ID!
  title: String!
  author: String!
  isbn: String!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
}

type BookConnection {
  pageInfo: PageInfo!
  edges: [BookEdge]!
  aggregate: AggregateBook!
}

input BookCreateInput {
  title: String!
  author: String!
  isbn: String!
  reviews: ReviewCreateManyWithoutBookInput
}

input BookCreateOneWithoutReviewsInput {
  create: BookCreateWithoutReviewsInput
  connect: BookWhereUniqueInput
}

input BookCreateWithoutReviewsInput {
  title: String!
  author: String!
  isbn: String!
}

type BookEdge {
  node: Book!
  cursor: String!
}

enum BookOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  author_ASC
  author_DESC
  isbn_ASC
  isbn_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookPreviousValues {
  id: ID!
  title: String!
  author: String!
  isbn: String!
}

type BookSubscriptionPayload {
  mutation: MutationType!
  node: Book
  updatedFields: [String!]
  previousValues: BookPreviousValues
}

input BookSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookWhereInput
  AND: [BookSubscriptionWhereInput!]
  OR: [BookSubscriptionWhereInput!]
  NOT: [BookSubscriptionWhereInput!]
}

input BookUpdateInput {
  title: String
  author: String
  isbn: String
  reviews: ReviewUpdateManyWithoutBookInput
}

input BookUpdateOneRequiredWithoutReviewsInput {
  create: BookCreateWithoutReviewsInput
  update: BookUpdateWithoutReviewsDataInput
  upsert: BookUpsertWithoutReviewsInput
  connect: BookWhereUniqueInput
}

input BookUpdateWithoutReviewsDataInput {
  title: String
  author: String
  isbn: String
}

input BookUpsertWithoutReviewsInput {
  update: BookUpdateWithoutReviewsDataInput!
  create: BookCreateWithoutReviewsInput!
}

input BookWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  isbn: String
  isbn_not: String
  isbn_in: [String!]
  isbn_not_in: [String!]
  isbn_lt: String
  isbn_lte: String
  isbn_gt: String
  isbn_gte: String
  isbn_contains: String
  isbn_not_contains: String
  isbn_starts_with: String
  isbn_not_starts_with: String
  isbn_ends_with: String
  isbn_not_ends_with: String
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  AND: [BookWhereInput!]
  OR: [BookWhereInput!]
  NOT: [BookWhereInput!]
}

input BookWhereUniqueInput {
  id: ID
  isbn: String
}

scalar Long

type Mutation {
  createBook(data: BookCreateInput!): Book!
  updateBook(data: BookUpdateInput!, where: BookWhereUniqueInput!): Book
  updateManyBooks(data: BookUpdateInput!, where: BookWhereInput): BatchPayload!
  upsertBook(where: BookWhereUniqueInput!, create: BookCreateInput!, update: BookUpdateInput!): Book!
  deleteBook(where: BookWhereUniqueInput!): Book
  deleteManyBooks(where: BookWhereInput): BatchPayload!
  createReview(data: ReviewCreateInput!): Review!
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateManyReviews(data: ReviewUpdateInput!, where: ReviewWhereInput): BatchPayload!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  book(where: BookWhereUniqueInput!): Book
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book]!
  booksConnection(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookConnection!
  review(where: ReviewWhereUniqueInput!): Review
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Review {
  id: ID!
  text: String
  rating: Int!
  author: User!
  book: Book!
}

type ReviewConnection {
  pageInfo: PageInfo!
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  text: String
  rating: Int!
  author: UserCreateOneWithoutReviewsInput!
  book: BookCreateOneWithoutReviewsInput!
}

input ReviewCreateManyWithoutAuthorInput {
  create: [ReviewCreateWithoutAuthorInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutBookInput {
  create: [ReviewCreateWithoutBookInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateWithoutAuthorInput {
  text: String
  rating: Int!
  book: BookCreateOneWithoutReviewsInput!
}

input ReviewCreateWithoutBookInput {
  text: String
  rating: Int!
  author: UserCreateOneWithoutReviewsInput!
}

type ReviewEdge {
  node: Review!
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  rating_ASC
  rating_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReviewPreviousValues {
  id: ID!
  text: String
  rating: Int!
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
  AND: [ReviewSubscriptionWhereInput!]
  OR: [ReviewSubscriptionWhereInput!]
  NOT: [ReviewSubscriptionWhereInput!]
}

input ReviewUpdateInput {
  text: String
  rating: Int
  author: UserUpdateOneRequiredWithoutReviewsInput
  book: BookUpdateOneRequiredWithoutReviewsInput
}

input ReviewUpdateManyWithoutAuthorInput {
  create: [ReviewCreateWithoutAuthorInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutAuthorInput!]
}

input ReviewUpdateManyWithoutBookInput {
  create: [ReviewCreateWithoutBookInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutBookInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutBookInput!]
}

input ReviewUpdateWithoutAuthorDataInput {
  text: String
  rating: Int
  book: BookUpdateOneRequiredWithoutReviewsInput
}

input ReviewUpdateWithoutBookDataInput {
  text: String
  rating: Int
  author: UserUpdateOneRequiredWithoutReviewsInput
}

input ReviewUpdateWithWhereUniqueWithoutAuthorInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutAuthorDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutBookInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutBookDataInput!
}

input ReviewUpsertWithWhereUniqueWithoutAuthorInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutAuthorDataInput!
  create: ReviewCreateWithoutAuthorInput!
}

input ReviewUpsertWithWhereUniqueWithoutBookInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutBookDataInput!
  create: ReviewCreateWithoutBookInput!
}

input ReviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  author: UserWhereInput
  book: BookWhereInput
  AND: [ReviewWhereInput!]
  OR: [ReviewWhereInput!]
  NOT: [ReviewWhereInput!]
}

input ReviewWhereUniqueInput {
  id: ID
}

type Subscription {
  book(where: BookSubscriptionWhereInput): BookSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  userName: String!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  userName: String!
  reviews: ReviewCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutReviewsInput {
  userName: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  userName_ASC
  userName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  userName: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  userName: String
  reviews: ReviewUpdateManyWithoutAuthorInput
}

input UserUpdateOneRequiredWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  update: UserUpdateWithoutReviewsDataInput
  upsert: UserUpsertWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutReviewsDataInput {
  userName: String
}

input UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput!
  create: UserCreateWithoutReviewsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userName: String
  userName_not: String
  userName_in: [String!]
  userName_not_in: [String!]
  userName_lt: String
  userName_lte: String
  userName_gt: String
  userName_gte: String
  userName_contains: String
  userName_not_contains: String
  userName_starts_with: String
  userName_not_starts_with: String
  userName_ends_with: String
  userName_not_ends_with: String
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  userName: String
}
`
      }
    