import styled from 'styled-components'
import { AuthorType } from '../types/author'

const AuthorDiv = styled.div`
  border: 3px solid blue;
`

const Subtitle2 = styled.h5`
  color: #440022;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`

type Props = {
  author: AuthorType
}

const Author: React.FC<Props> = ({ author }) => {

  return (
    <AuthorDiv>
      <Subtitle2>{'Created At: ' + new Date(Date.parse(author.createdAt))}</Subtitle2>
      <Subtitle2>{'Name: ' + author.name}</Subtitle2>
      <Avatar src={author.avatar} />
      <Subtitle2>{'Updated At: ' + new Date(Date.parse(author.updatedAt))}</Subtitle2>
      <Subtitle2>{'ID: ' + author.id}</Subtitle2>
      <Subtitle2>{'Post ID: ' + author.postId}</Subtitle2>
    </AuthorDiv>
  )
}

export default Author