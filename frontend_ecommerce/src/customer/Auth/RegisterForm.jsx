import { Button, Grid, Box, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {getUser, register} from '../../State/Auth/Action'

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store)


  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }

  },[jwt, auth.jwt])

  const handleSubmit=(event)=>{
    event.preventDefault()

    const data = new FormData(event.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password")
    }

    dispatch(register(userData))

    console.log("userData", userData);
    
  }
  return (
    <div>
      <Box className="border rounded-s-md shadow-md p-8">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid size={6}>
            <TextField
              required
              id='firstName'
              name='firstName'
              label= 'First Name'
              fullWidth
              autocompleted='given-name'
            />
          </Grid>
          <Grid size={6}>
            <TextField
              required
              id='lastName'
              name='lastName'
              label= 'Last Name'
              fullWidth
              autocompleted='given-name'
            />
          </Grid>
          <Grid size={12}>
            <TextField
              required
              id='email'
              name='email'
              label= 'Email'
              fullWidth
              autocompleted='email'
            />
          </Grid>
          <Grid size={12}>
            <TextField
              required
              id='password'
              name='password'
              label= 'Password'
              fullWidth
              autocompleted='password'
            />
          </Grid>
          <Grid size={12}>
            <Button 
              className='bg-[#9155FD] w-full'
              type='submit'
              variant='contained'
              size='large'
              sx={{padding:".8rem 0", bgcolor:"#9155FD"}}
            >
              Register

            </Button>
          </Grid>
        </Grid>
      </form>
      </Box>

      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
          <p>if you have already account ?</p>
          <Button onClick={() => navigate("/login")} className='ml-5' size='small'>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm