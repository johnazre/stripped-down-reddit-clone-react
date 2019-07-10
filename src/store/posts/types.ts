// Post Type
export interface IPost {
  id?: number
  title: string
  content: string
  author: string
  img_url: string
}

// Post action labels
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING'
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILED = 'ADD_POST_FAILED'

// Fetch Post Actions
interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS
  payload: IPost[]
}

interface FetchPostsPendingAction {
  type: typeof FETCH_POSTS_PENDING
}

interface FetchPostsFailedAction {
  type: typeof FETCH_POSTS_FAILED
  payload: any
}

// Add Post Actions
interface AddPostSuccessAction {
  type: typeof ADD_POST_SUCCESS
  payload: IPost[]
}

interface AddPostFailedAction {
  type: typeof ADD_POST_FAILED
  payload: any
}

// Consolidating the fetching action types
type FetchPostActionType =
  | FetchPostsFailedAction
  | FetchPostsPendingAction
  | FetchPostsSuccessAction

// Consolidating the adding action types
type AddPostActionType = AddPostFailedAction | AddPostSuccessAction

// Exporting the combination of them all
export type PostActionTypes = FetchPostActionType | AddPostActionType
