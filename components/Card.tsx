import styled from 'styled-components'
import { Post } from '../types/post'
import Author from './Author'
import Comment from './Comment'
import { AuthorType } from '../types/author'
import { CommentType } from '../types/comment'

const Div = styled.div`
  border: 5px solid purple;
  padding: 20px;
  margin: 40px;
`

const Title = styled.h1`
  color: #550022;
`

const Subtitle1 = styled.h4`
  color: #001144;
`

type Props = {
  post: Post
}

const Card: React.FC<Props> = ({ post }) => {

  return (
    <Div>
      <Title>{post.title}</Title>
      <Subtitle1>{'Description: ' + post.description}</Subtitle1>
      <Subtitle1>{'Created At: ' + new Date(Date.parse(post.createdAt))}</Subtitle1>
      <Subtitle1>{'Updated At: ' + new Date(Date.parse(post.updatedAt))}</Subtitle1>
      <Subtitle1>{'ID: ' + post.id}</Subtitle1>
      <Subtitle1>Authors:</Subtitle1>
      {
        post.authors.map((author: AuthorType) => {
          return <Author author={author} />
        })
      }
      <Subtitle1>Comments:</Subtitle1>
      {
        post.comments.map((comment: CommentType) => {
          return <Comment comment={comment} />
        })
      }
    </Div>
  )
}

export default Card