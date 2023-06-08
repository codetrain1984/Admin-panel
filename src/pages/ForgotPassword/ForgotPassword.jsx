import React from 'react'
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'

export default function ForgotPassword() {
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
            height: 260,
            marginTop: 10,
          }}
        >
          <Box sx={{ backgroundColor: '#f7faff', padding: 3 }}>
            <Typography variant="h5">Forget Password</Typography>
          </Box>
          <Stack spacing={2} sx={{ margin: 3 }}>
            <TextField label="Enter your email" />
            <Button variant="contained">Send</Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}
