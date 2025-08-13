import { Button, Grid, Box, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { login } from '../../State/Auth/Action';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleSubmit=(event)=>{
    event.preventDefault()

    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password")
    }

    dispatch(login(userData))
    console.log("userData", userData);
    
  }
  return (
    <div>
      <Box className="border rounded-s-md shadow-md p-8">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          
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
              Login

            </Button>
          </Grid>
        </Grid>
      </form>
      </Box>

      <div className='flex justify-center flex-col items-center'>
              <div className='py-3 flex items-center'>
                <p>if you don't have account ?</p>
                <Button onClick={() => navigate("/register")} className='ml-5' size='small'>Register</Button>
              </div>
            </div>
    </div>
  )
}

export default LoginForm