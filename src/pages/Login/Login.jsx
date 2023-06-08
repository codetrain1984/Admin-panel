import React from 'react'
import './Login.css'

import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'

const LoginBox = styled(Box)({
  backgroundColor: '#fff',
  border: '1px solid gray',
  borderRadius: 2,
  overflow: 'hidden',
  margin: 'auto',
  width: 600,
  height: 520,
  marginTop: 10,
})
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}))

export default function Login() {
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
        <LoginBox xs={6}>
          <Stack sx={{ backgroundColor: '#f7faff', padding: 3 }}>
            <Typography variant="h5">Log in</Typography>
          </Stack>
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
              <Root>
                <Divider sx={{ marginTop: '10px', marginBottom: '10px' }}>
                  OR
                </Divider>
              </Root>
              {/* <LoginOr /> */}
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
                <Link href="/register" underline="none">
                  Sign Up
                </Link>
              </Typography>
              <Typography
                variant="body2"
                color="GrayText"
                sx={{ textAlign: 'center', marginBottom: '10px' }}
              >
                <Link href="forgot-password" underline="none">
                  Forget Password?
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </LoginBox>
      </Grid>
    </Grid>
  )
}
