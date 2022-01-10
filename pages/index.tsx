import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useQuery } from 'react-query'
import { useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { Post } from '../types/post'

const Container = styled.div`
  padding: 2vw 10vw 2vw 10vw;
  background-image: linear-gradient(to bottom, #FFCCCC, #CCCCFF);
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Button = styled.div`
  background-color: yellow;
  padding: 20px;
  border-radius: 10px;
`

const Home: NextPage = () => {
  const [page, setPage] = useState<number>(0);
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts').then(res =>
      res.json()
    )
  )

  if (isLoading) return <div><p>'Loading...'</p></div>

  if (error) return <div><p>'An error has occurred'</p></div>

  function previousClick() {
    if (page > 0) {
      setPage((prev) => prev - 1)
    }
  }

  function nextClick() {
    if (page * 5 < data.length - 5) {
      setPage((prev) => prev + 1)
    }
  }

  return (
    <Container>
      <Row>
        <Button onClick={previousClick}>Previous Page</Button>
        <Button onClick={nextClick}>Next Page</Button>
      </Row>
      {
        data &&
        data.slice(page * 5, page * 5 + 5).map((post: Post) => {
          return <Card post={post} />
        })
      }
    </Container>
  )
}

export default Home
