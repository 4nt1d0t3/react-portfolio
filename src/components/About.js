import React from 'react'
//MUI
import { Paper, Typography, Slide, Tooltip, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AboutStyles } from '../util/muiStyles'
//Icons
import { FaLinkedin } from 'react-icons/fa'
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

const useStyles = makeStyles(AboutStyles)

function About({ about }) {
    //MUI
    const classes = useStyles()
    return (
        <Slide direction="down" in={about} mountOnEnter unmountOnExit>
            <Paper elevation={0} className={classes.modal}>
                <Typography align='center' variant='h3'>About Antti</Typography>
                <hr />
                <Typography align='center' variant='body1'>
                    I have been learning-by-doing my whole life and that is the way I have been learning sotware development as well.
                    <br />
                    I have good understanding of HTML, CSS, JavaScript, React, Node and MongoDB and am currently focused on deepening my
                    knowledge of Redux, MySQL and TypeScript.
                </Typography>
                <hr />
                <Typography align='center' variant='body2'>
                    I first came upon software development while looking for a career change from hospitality, an industy I have been working
                    at for the past 6 years. What caught my attention at first was the high starting salaries and the possibility of building a career without a need of a university degree. I value a higher education very much, but I was unfortunate not to have that
                    opportunity but I will save that story for the interview.
                    <br /> After taking a closer look at software development, I realised this could be something I would really enjoy doing.
                     And not just for the money. My whole life I have enjoyed solving problems and building things so software development sounded like the ideal career for me. And I truly believe it is.
                     <br /> Learning software development has been the hardest thing in my life so far, but the journey has been extremely rewarding. Not once have I felt like I couldn't do this, I couldn't possibly learn this on my own, but rather I've been excited about the challenges and I keep chasing that high of understanding a complicated part of a language or solving a problem that has been bugging down your project for hours or days. The joy I feel when programming is something I have not experienced before and I would love to make it into a career. And even if that doesn't happen, for whatever reason, I can't see myself ever leaving programming behind. I've come to the conclusion that it will always be a part of mylife. Because I love it.
                     <br />

                </Typography>
                <div className={classes.buttons}>
                    <Tooltip title='CV' placement='top'
                        onClick={(e) => {
                            e.preventDefault();
                            window.open('https://docs.google.com/document/d/1SzA_smllZf-CQnMhiMAbydp1gKPElUD1mX70fAn9uU8/edit#heading=h.5x0d5h95i329', "_blank") || window.location.replace('https://docs.google.com/document/d/1SzA_smllZf-CQnMhiMAbydp1gKPElUD1mX70fAn9uU8/edit#heading=h.5x0d5h95i329');
                        }}
                    >
                        <IconButton>
                            <DescriptionOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='LinkedIn' placement='top'
                        onClick={(e) => {
                            e.preventDefault();
                            window.open('https://www.linkedin.com/in/antti-hyppola-11b159169/', "_blank") || window.location.replace('https://www.linkedin.com/in/antti-hyppola-11b159169/');
                        }}
                    >
                        <IconButton>
                            <FaLinkedin />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='GitHub' placement='top'
                        onClick={(e) => {
                            e.preventDefault();
                            window.open('https://github.com/4nt1d0t3', "_blank") || window.location.replace('https://github.com/4nt1d0t3');
                        }}
                    >
                        <IconButton>
                            <GitHubIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </Paper>
        </Slide>
    )
}

export default About