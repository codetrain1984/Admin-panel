import React from 'react'
import './Login.css'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'

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
// import LoginOr from './Components/LoginOr'

export default function Login() {
  return (
    <div className="login">
      <Sidebar />
      <div className="login-container">
        <Header />
        <Grid container sx={{ backgroundColor: 'white', height: '100vh' }}>
          <Grid
            xs={12}
            sx={{ backgroundColor: '#f7faff', margin: 5, borderRadius: 2 }}
          >
            <Stack
              xs={6}
              sx={{
                backgroundColor: '#fff',
                border: '1px solid gray',
                borderRadius: 2,
                margin: 'auto',
                width: 600,
                height: 520,
                marginTop: 10,
              }}
            >
              <Box sx={{ backgroundColor: '#f7faff', padding: 3 }}>
                <Typography variant="subtitle1">Log in</Typography>
              </Box>
              <Stack spacing={2} direction="column" sx={{ margin: 3 }}>
                <Button variant="contained" startIcon={<FacebookIcon />}>
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
                  <TextField label="Enter your email" />
                  <TextField label="Password" />
                  <Button variant="contained">Log in</Button>
                  <Typography
                    variant="body2"
                    color="GrayText"
                    sx={{ textAlign: 'center' }}
                  >
                    Need an account?{' '}
                    <Link href="#" underline="none">
                      Sign Up
                    </Link>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="GrayText"
                    sx={{ textAlign: 'center', marginBottom: '10px' }}
                  >
                    <Link href="#" underline="none">
                      Forget Password?
                    </Link>
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
