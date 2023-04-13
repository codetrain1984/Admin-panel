import { Divider, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(2),
  },
  divider: {
    height: '2px',
    width: '40%',
    margin: theme.spacing(0, 2),
    backgroundColor: theme.palette.primary.main,
  },
  text: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}))
export default function LoginOr() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Divider className={classes.divider} />
      <Typography className={classes.text}>or</Typography>
      <Divider className={classes.divider} />
    </div>
  )
}
