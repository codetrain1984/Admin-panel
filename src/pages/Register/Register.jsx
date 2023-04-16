import React from 'react'
import './Register.css'
import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'

export default function Register() {
  return (
    <Grid container sx={{ backgroundColor: 'white', height: '100vh' }}>
      <Grid
        xs={12}
        sx={{
          backgroundColor: '#f7faff',
          margin: 5,
          borderRadius: 2,
        }}
      >
        <Stack
          xs={6}
          sx={{
            backgroundColor: '#fff',
            border: '1px solid gray',
            borderRadius: 2,
            overflow: 'hidden',
            margin: 'auto',
            width: 600,
            height: 600,
            marginTop: 10,
          }}
        >
          <Box sx={{ backgroundColor: '#f7faff', padding: 3 }}>
            <Typography variant="h5">Register</Typography>
          </Box>
          <Stack spacing={2} direction="column" sx={{ margin: 3 }}>
            <Button
              variant="contained"
              startIcon={<FacebookIcon />}
              sx={{ backgroundColor: '#002984' }}
            >
              Log In With Facebook
            </Button>
            <Button variant="contained" startIcon={<GoogleIcon />}>
              Log In With Google
            </Button>
            <Stack sx={{ textAlign: 'center' }}>
              {/* <LoginOr /> */}
              OR
            </Stack>
            <Stack spacing={2}>
              <TextField label="Full Name" />
              <TextField label="Enter your email" />
              <TextField label="Password" />
              <Button variant="contained">Sign Up</Button>
              <Typography
                variant="body2"
                color="GrayText"
                sx={{ textAlign: 'center' }}
              >
                Need an account?{' '}
                <Link href="/login" underline="none">
                  Log in
                </Link>
              </Typography>
              <Typography
                variant="body2"
                color="GrayText"
                sx={{ textAlign: 'center', marginBottom: '10px' }}
              >
                <Link href="/forgot-password" underline="none">
                  Forget Password?
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}
