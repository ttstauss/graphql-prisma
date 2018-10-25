// Code generated by Prisma (prisma@1.18.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  book: (where?: BookWhereInput) => Promise<boolean>;
  review: (where?: ReviewWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  book: (where: BookWhereUniqueInput) => Book;
  books: (
    args?: {
      where?: BookWhereInput;
      orderBy?: BookOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<BookNode>;
  booksConnection: (
    args?: {
      where?: BookWhereInput;
      orderBy?: BookOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => BookConnection;
  review: (where: ReviewWhereUniqueInput) => Review;
  reviews: (
    args?: {
      where?: ReviewWhereInput;
      orderBy?: ReviewOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<ReviewNode>;
  reviewsConnection: (
    args?: {
      where?: ReviewWhereInput;
      orderBy?: ReviewOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ReviewConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<UserNode>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createBook: (data: BookCreateInput) => Book;
  updateBook: (
    args: { data: BookUpdateInput; where: BookWhereUniqueInput }
  ) => Book;
  updateManyBooks: (
    args: { data: BookUpdateInput; where?: BookWhereInput }
  ) => BatchPayload;
  upsertBook: (
    args: {
      where: BookWhereUniqueInput;
      create: BookCreateInput;
      update: BookUpdateInput;
    }
  ) => Book;
  deleteBook: (where: BookWhereUniqueInput) => Book;
  deleteManyBooks: (where?: BookWhereInput) => BatchPayload;
  createReview: (data: ReviewCreateInput) => Review;
  updateReview: (
    args: { data: ReviewUpdateInput; where: ReviewWhereUniqueInput }
  ) => Review;
  updateManyReviews: (
    args: { data: ReviewUpdateInput; where?: ReviewWhereInput }
  ) => BatchPayload;
  upsertReview: (
    args: {
      where: ReviewWhereUniqueInput;
      create: ReviewCreateInput;
      update: ReviewUpdateInput;
    }
  ) => Review;
  deleteReview: (where: ReviewWhereUniqueInput) => Review;
  deleteManyReviews: (where?: ReviewWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  book: (
    where?: BookSubscriptionWhereInput
  ) => BookSubscriptionPayloadSubscription;
  review: (
    where?: ReviewSubscriptionWhereInput
  ) => ReviewSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ReviewOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "text_ASC"
  | "text_DESC"
  | "rating_ASC"
  | "rating_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type BookOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "author_ASC"
  | "author_DESC"
  | "isbn_ASC"
  | "isbn_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "userName_ASC"
  | "userName_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ReviewUpdateManyWithoutBookInput {
  create?: ReviewCreateWithoutBookInput[] | ReviewCreateWithoutBookInput;
  delete?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  disconnect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  update?:
    | ReviewUpdateWithWhereUniqueWithoutBookInput[]
    | ReviewUpdateWithWhereUniqueWithoutBookInput;
  upsert?:
    | ReviewUpsertWithWhereUniqueWithoutBookInput[]
    | ReviewUpsertWithWhereUniqueWithoutBookInput;
}

export type BookWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  isbn?: String;
}>;

export interface UserUpdateOneRequiredWithoutReviewsInput {
  create?: UserCreateWithoutReviewsInput;
  update?: UserUpdateWithoutReviewsDataInput;
  upsert?: UserUpsertWithoutReviewsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  userName?: String;
  userName_not?: String;
  userName_in?: String[] | String;
  userName_not_in?: String[] | String;
  userName_lt?: String;
  userName_lte?: String;
  userName_gt?: String;
  userName_gte?: String;
  userName_contains?: String;
  userName_not_contains?: String;
  userName_starts_with?: String;
  userName_not_starts_with?: String;
  userName_ends_with?: String;
  userName_not_ends_with?: String;
  reviews_every?: ReviewWhereInput;
  reviews_some?: ReviewWhereInput;
  reviews_none?: ReviewWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface ReviewCreateInput {
  text?: String;
  rating: Int;
  author: UserCreateOneWithoutReviewsInput;
  book: BookCreateOneWithoutReviewsInput;
}

export interface UserUpdateWithoutReviewsDataInput {
  userName?: String;
}

export interface BookCreateInput {
  title: String;
  author: String;
  isbn: String;
  reviews?: ReviewCreateManyWithoutBookInput;
}

export interface ReviewWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
  rating?: Int;
  rating_not?: Int;
  rating_in?: Int[] | Int;
  rating_not_in?: Int[] | Int;
  rating_lt?: Int;
  rating_lte?: Int;
  rating_gt?: Int;
  rating_gte?: Int;
  author?: UserWhereInput;
  book?: BookWhereInput;
  AND?: ReviewWhereInput[] | ReviewWhereInput;
  OR?: ReviewWhereInput[] | ReviewWhereInput;
  NOT?: ReviewWhereInput[] | ReviewWhereInput;
}

export interface ReviewCreateManyWithoutBookInput {
  create?: ReviewCreateWithoutBookInput[] | ReviewCreateWithoutBookInput;
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
}

export interface BookSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: BookWhereInput;
  AND?: BookSubscriptionWhereInput[] | BookSubscriptionWhereInput;
  OR?: BookSubscriptionWhereInput[] | BookSubscriptionWhereInput;
  NOT?: BookSubscriptionWhereInput[] | BookSubscriptionWhereInput;
}

export interface ReviewCreateWithoutBookInput {
  text?: String;
  rating: Int;
  author: UserCreateOneWithoutReviewsInput;
}

export interface ReviewUpdateWithoutAuthorDataInput {
  text?: String;
  rating?: Int;
  book?: BookUpdateOneRequiredWithoutReviewsInput;
}

export interface UserCreateOneWithoutReviewsInput {
  create?: UserCreateWithoutReviewsInput;
  connect?: UserWhereUniqueInput;
}

export type ReviewWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserCreateWithoutReviewsInput {
  userName: String;
}

export interface UserUpdateInput {
  userName?: String;
  reviews?: ReviewUpdateManyWithoutAuthorInput;
}

export interface BookUpdateInput {
  title?: String;
  author?: String;
  isbn?: String;
  reviews?: ReviewUpdateManyWithoutBookInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  userName?: String;
}>;

export interface BookUpdateOneRequiredWithoutReviewsInput {
  create?: BookCreateWithoutReviewsInput;
  update?: BookUpdateWithoutReviewsDataInput;
  upsert?: BookUpsertWithoutReviewsInput;
  connect?: BookWhereUniqueInput;
}

export interface UserCreateInput {
  userName: String;
  reviews?: ReviewCreateManyWithoutAuthorInput;
}

export interface ReviewUpdateWithWhereUniqueWithoutBookInput {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutBookDataInput;
}

export interface BookUpdateWithoutReviewsDataInput {
  title?: String;
  author?: String;
  isbn?: String;
}

export interface ReviewUpdateWithoutBookDataInput {
  text?: String;
  rating?: Int;
  author?: UserUpdateOneRequiredWithoutReviewsInput;
}

export interface ReviewSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ReviewWhereInput;
  AND?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput;
  OR?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput;
  NOT?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput;
}

export interface BookWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  author?: String;
  author_not?: String;
  author_in?: String[] | String;
  author_not_in?: String[] | String;
  author_lt?: String;
  author_lte?: String;
  author_gt?: String;
  author_gte?: String;
  author_contains?: String;
  author_not_contains?: String;
  author_starts_with?: String;
  author_not_starts_with?: String;
  author_ends_with?: String;
  author_not_ends_with?: String;
  isbn?: String;
  isbn_not?: String;
  isbn_in?: String[] | String;
  isbn_not_in?: String[] | String;
  isbn_lt?: String;
  isbn_lte?: String;
  isbn_gt?: String;
  isbn_gte?: String;
  isbn_contains?: String;
  isbn_not_contains?: String;
  isbn_starts_with?: String;
  isbn_not_starts_with?: String;
  isbn_ends_with?: String;
  isbn_not_ends_with?: String;
  reviews_every?: ReviewWhereInput;
  reviews_some?: ReviewWhereInput;
  reviews_none?: ReviewWhereInput;
  AND?: BookWhereInput[] | BookWhereInput;
  OR?: BookWhereInput[] | BookWhereInput;
  NOT?: BookWhereInput[] | BookWhereInput;
}

export interface ReviewUpdateWithWhereUniqueWithoutAuthorInput {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutAuthorDataInput;
}

export interface ReviewUpdateInput {
  text?: String;
  rating?: Int;
  author?: UserUpdateOneRequiredWithoutReviewsInput;
  book?: BookUpdateOneRequiredWithoutReviewsInput;
}

export interface ReviewCreateWithoutAuthorInput {
  text?: String;
  rating: Int;
  book: BookCreateOneWithoutReviewsInput;
}

export interface BookCreateOneWithoutReviewsInput {
  create?: BookCreateWithoutReviewsInput;
  connect?: BookWhereUniqueInput;
}

export interface BookCreateWithoutReviewsInput {
  title: String;
  author: String;
  isbn: String;
}

export interface ReviewUpsertWithWhereUniqueWithoutBookInput {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutBookDataInput;
  create: ReviewCreateWithoutBookInput;
}

export interface UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput;
  create: UserCreateWithoutReviewsInput;
}

export interface ReviewCreateManyWithoutAuthorInput {
  create?: ReviewCreateWithoutAuthorInput[] | ReviewCreateWithoutAuthorInput;
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
}

export interface ReviewUpdateManyWithoutAuthorInput {
  create?: ReviewCreateWithoutAuthorInput[] | ReviewCreateWithoutAuthorInput;
  delete?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  disconnect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  update?:
    | ReviewUpdateWithWhereUniqueWithoutAuthorInput[]
    | ReviewUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | ReviewUpsertWithWhereUniqueWithoutAuthorInput[]
    | ReviewUpsertWithWhereUniqueWithoutAuthorInput;
}

export interface ReviewUpsertWithWhereUniqueWithoutAuthorInput {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutAuthorDataInput;
  create: ReviewCreateWithoutAuthorInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface BookUpsertWithoutReviewsInput {
  update: BookUpdateWithoutReviewsDataInput;
  create: BookCreateWithoutReviewsInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  userName: String;
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  userName: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  userName: () => Promise<AsyncIterator<String>>;
}

export interface ReviewConnectionNode {}

export interface ReviewConnection
  extends Promise<ReviewConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<ReviewEdgeNode>>() => T;
  aggregate: <T = AggregateReview>() => T;
}

export interface ReviewConnectionSubscription
  extends Promise<AsyncIterator<ReviewConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ReviewEdgeSubscription>>>() => T;
  aggregate: <T = AggregateReviewSubscription>() => T;
}

export interface ReviewSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ReviewSubscriptionPayload
  extends Promise<ReviewSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Review>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ReviewPreviousValues>() => T;
}

export interface ReviewSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ReviewSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ReviewSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ReviewPreviousValuesSubscription>() => T;
}

export interface AggregateBookNode {
  count: Int;
}

export interface AggregateBook
  extends Promise<AggregateBookNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateBookSubscription
  extends Promise<AsyncIterator<AggregateBookNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BookEdgeNode {
  cursor: String;
}

export interface BookEdge extends Promise<BookEdgeNode>, Fragmentable {
  node: <T = Book>() => T;
  cursor: () => Promise<String>;
}

export interface BookEdgeSubscription
  extends Promise<AsyncIterator<BookEdgeNode>>,
    Fragmentable {
  node: <T = BookSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserNode {
  id: ID_Output;
  userName: String;
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  userName: () => Promise<String>;
  reviews: <T = FragmentableArray<ReviewNode>>(
    args?: {
      where?: ReviewWhereInput;
      orderBy?: ReviewOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  userName: () => Promise<AsyncIterator<String>>;
  reviews: <T = Promise<AsyncIterator<ReviewSubscription>>>(
    args?: {
      where?: ReviewWhereInput;
      orderBy?: ReviewOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BookNode {
  id: ID_Output;
  title: String;
  author: String;
  isbn: String;
}

export interface Book extends Promise<BookNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: () => Promise<String>;
  isbn: () => Promise<String>;
  reviews: <T = FragmentableArray<ReviewNode>>(
    args?: {
      where?: ReviewWhereInput;
      orderBy?: ReviewOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface BookSubscription
  extends Promise<AsyncIterator<BookNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  isbn: () => Promise<AsyncIterator<String>>;
  reviews: <T = Promise<AsyncIterator<ReviewSubscription>>>(
    args?: {
      where?: ReviewWhereInput;
      orderBy?: ReviewOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface ReviewEdgeNode {
  cursor: String;
}

export interface ReviewEdge extends Promise<ReviewEdgeNode>, Fragmentable {
  node: <T = Review>() => T;
  cursor: () => Promise<String>;
}

export interface ReviewEdgeSubscription
  extends Promise<AsyncIterator<ReviewEdgeNode>>,
    Fragmentable {
  node: <T = ReviewSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BookConnectionNode {}

export interface BookConnection
  extends Promise<BookConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<BookEdgeNode>>() => T;
  aggregate: <T = AggregateBook>() => T;
}

export interface BookConnectionSubscription
  extends Promise<AsyncIterator<BookConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<BookEdgeSubscription>>>() => T;
  aggregate: <T = AggregateBookSubscription>() => T;
}

export interface BookPreviousValuesNode {
  id: ID_Output;
  title: String;
  author: String;
  isbn: String;
}

export interface BookPreviousValues
  extends Promise<BookPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: () => Promise<String>;
  isbn: () => Promise<String>;
}

export interface BookPreviousValuesSubscription
  extends Promise<AsyncIterator<BookPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  isbn: () => Promise<AsyncIterator<String>>;
}

export interface BookSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface BookSubscriptionPayload
  extends Promise<BookSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Book>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = BookPreviousValues>() => T;
}

export interface BookSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<BookSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = BookSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = BookPreviousValuesSubscription>() => T;
}

export interface ReviewPreviousValuesNode {
  id: ID_Output;
  text?: String;
  rating: Int;
}

export interface ReviewPreviousValues
  extends Promise<ReviewPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  rating: () => Promise<Int>;
}

export interface ReviewPreviousValuesSubscription
  extends Promise<AsyncIterator<ReviewPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  rating: () => Promise<AsyncIterator<Int>>;
}

export interface ReviewNode {
  id: ID_Output;
  text?: String;
  rating: Int;
}

export interface Review extends Promise<ReviewNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  rating: () => Promise<Int>;
  author: <T = User>() => T;
  book: <T = Book>() => T;
}

export interface ReviewSubscription
  extends Promise<AsyncIterator<ReviewNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  rating: () => Promise<AsyncIterator<Int>>;
  author: <T = UserSubscription>() => T;
  book: <T = BookSubscription>() => T;
}

export interface AggregateReviewNode {
  count: Int;
}

export interface AggregateReview
  extends Promise<AggregateReviewNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateReviewSubscription
  extends Promise<AsyncIterator<AggregateReviewNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<UserEdgeNode>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Type Defs
 */

export const prisma: Prisma;
