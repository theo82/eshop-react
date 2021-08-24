import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import styled from 'styled-components'
import Testing from './testing'
const Button = styled.button`
  background: green;
  color: white;
`
const Container = styled.div`
  background: red;
  color: white;
  .hero {
    font-size: 8rem;
  }
`

const Container2 = styled.div`
  background: red;
  color: white;
  .hero {
    font-size: 1rem;
  }
`

function App() {
  return (
    <div>
      <h4>comfy sloth starter</h4>
      <Button>click me</Button>
      <Container>
        <div>
          <h3>Hello world</h3>
        </div>
        <div className='hero'>hero text</div>
      </Container>
      <Container2>
        <div>
          <h3>Hello world</h3>
        </div>
        <div className='hero'>hero text</div>
      </Container2>
      <Testing />
    </div>
  )
}

export default App
