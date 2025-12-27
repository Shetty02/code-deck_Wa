import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-bg);
  color: var(--white);
  text-align: center;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  color: var(--primary-color);
`

const Message = styled.p`
  font-size: 1.25rem;
  color: var(--text-light);
`

function Error404() {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/');
    },3000)
  }, [])
  return (
    <Container>
      <Title>404</Title>
      <Message>Page Not Found. Redirecting to Home...</Message>
    </Container>
  )
}

export default Error404