import styled from 'styled-components'
import { CommentType } from '../types/comment'

const CommentDiv = styled.div`
  border: 3px solid green;
`

const Subtitle2 = styled.h5`
  color: #004411;
`

type Props = {
  comment: CommentType
}

const Author: React.FC<Props> = ({ comment }) => {

  return (
    <CommentDiv>
      <Subtitle2>{'Created At: ' + new Date(Date.parse(comment.createdAt))}</Subtitle2>
      <Subtitle2>{'Title: ' + comment.title}</Subtitle2>
      <Subtitle2>{'Description: ' + comment.description}</Subtitle2>
      <Subtitle2>{'Updated At: ' + new Date(Date.parse(comment.updatedAt))}</Subtitle2>
      <Subtitle2>{'ID: ' + comment.id}</Subtitle2>
      <Subtitle2>{'Post ID: ' + comment.postId}</Subtitle2>
    </CommentDiv>
  )
}

export default Author