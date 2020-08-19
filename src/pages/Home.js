import React from 'react'
import InfoButton from '../components/InfoButton.js'
//MUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { HomeStyles } from '../util/muiStyles'



export default function Home() {
    const useStyles = makeStyles(HomeStyles);
    const classes = useStyles();
    return (
        <div style={{ position: "relative", top: '15vh' }}>
            <Typography className={classes.headline} variant='h3' align='center'>
                Hi!
                <br />
                My name is Antti
                <br />
                I'm a Software Developer
            </Typography>
            <InfoButton />
        </div>
    )
}
