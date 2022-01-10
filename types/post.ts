import { AuthorType } from "./author"
import { CommentType } from "./comment"

export type Post = {
  title: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  id: string,
  authors: [AuthorType],
  comments: [CommentType]
}