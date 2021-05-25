import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { Header } from '../components/Header'
import { LoginForm } from '../components/LoginForm'

const useStyels = makeStyles(theme=>({
  loginForm:{
    margin:theme.spacing(4)
  }
}))

export const LoginPage = ()=>{
  const classes = useStyels()
  return (
    <div>
      <Header />
      <Container className={classes.loginForm} >
        <LoginForm />
      </Container>
    </div>
  )
}