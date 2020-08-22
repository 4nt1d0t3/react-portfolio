import React, { Fragment } from 'react'
//MUI
import { DialogContent } from '@material-ui/core'
//Icons
import { FaLinkedin } from 'react-icons/fa'

function GetInTouch() {
    return (
        <Fragment>
            <DialogContent dividers>
                Email
                <br />
                <a href='mailto: antti.hyppola@hotmail.com'>antti.hyppola@hotmail.com</a>
            </DialogContent>
            <DialogContent dividers>
                Phone
                <br />
                +44 7557 277 379
                </DialogContent>
            <DialogContent dividers>
                LinkedIn
                <br />
                <a href='https://www.linkedin.com/in/antti-hyppola-11b159169/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin style={{ fontSize: '3em' }} />
                </a>
            </DialogContent>
        </Fragment>

    )
}

export default GetInTouch