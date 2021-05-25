import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display:'flex',
      justifyContent:'center',
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export const LoginForm = () => {
  const classes = useStyles();

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')

  const onSubmit = ()=>{
    if(validateInput({name,password})){
      alert('Correct input! You can login!')
      setName('')
      setPassword('')
      return
    }
    alert('Incorrect input! You can\'t login!')
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Name" variant="filled" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <TextField label="Password" variant="filled" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <Button variant="contained" color="secondary" onClick={onSubmit}>
        Submit
      </Button>
    </form>
  );
}

type InputType = {
  name:string
  password:string
}

const validateInput = (input:InputType) => {
  if(!input.name){
    return false
  }
  if(!input.password){
    return false
  }
  return true
}