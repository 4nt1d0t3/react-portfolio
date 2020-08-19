import React from 'react'
import { Link } from 'react-router-dom'
//MUI
import { makeStyles } from '@material-ui/core/styles'
import { NavStyles } from '../util/muiStyles'

function Navbar() {
    //MUI
    const useStyles = makeStyles(NavStyles)
    const classes = useStyles()

    return (
        <div className={classes.navContainer}>
            <Link className={classes.navLink} to='/details'>CONTACT</Link>
        </div >
    )
}

export default Navbar