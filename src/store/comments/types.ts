// Comment type
export interface IComment {
  id?: number
  content: string
  post_id: number
}

// Action type labels
export const FETCH_COMMENTS_PENDING = 'FETCH_COMMENTS_PENDING'
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
export const FETCH_COMMENTS_FAILED = 'FETCH_COMMENTS_FAILED'

export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILED = 'ADD_COMMENT_FAILED'

// Fetching comments actions
interface FetchCommentsPendingAction {
  type: typeof FETCH_COMMENTS_PENDING
}

interface FetchCommentsSuccessAction {
  type: typeof FETCH_COMMENTS_SUCCESS
  payload: IComment[]
}

interface FetchCommentsFailedAction {
  type: typeof FETCH_COMMENTS_FAILED
  payload: any
}

// Adding comments actions
interface AddCommentSuccessAction {
  type: typeof ADD_COMMENT_SUCCESS
  payload: IComment
}

interface AddCommentFailedAction {
  type: typeof ADD_COMMENT_FAILED
  payload: any
}

// Consolidating the interfaces
type FetchCommentsType =
  | FetchCommentsFailedAction
  | FetchCommentsPendingAction
  | FetchCommentsSuccessAction

type AddCommentType = AddCommentSuccessAction | AddCommentFailedAction

// Exporting all the types and interfaces
export type CommentActionTypes = FetchCommentsType | AddCommentType
