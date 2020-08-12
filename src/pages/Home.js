import React, { Fragment } from 'react'
import InfoButton from '../components/InfoButton.js'
//MUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { HomeStyles } from '../util/muiStyles'



export default function Home() {
    const useStyles = makeStyles(HomeStyles);
    const classes = useStyles();
    return (
        <div style={{position: "relative", top: '12vh'}}>
            <Typography className={classes.headline} variant='h3' align='center'>Hi</Typography>
            <Typography className={classes.headline} variant='h3' align='center'>My name is Antti</Typography>
            <Typography className={classes.headline} variant='h3' align='center'>I'm a software developer</Typography>
            <InfoButton />
        </div>
    )
}
