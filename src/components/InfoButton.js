import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import anttisocial from '../images/anttisocial.jpg'
import antibug from '../images/antibug.png'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import ProjectSlide from './ProjectSlide'
//MUI
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => {
    return {
        root: {
            display: 'flex',
            minWidth: 300,
            width: '100%',
            justifyContent: 'center',
            marginTop: 35,
        },
        button: {
            position: 'relative',
            padding: '10px 50px',
            margin: '0 35px 0 35px',
            border: '3px solid white',
            borderRadius: 0,
            color: 'white',
            transition: theme.transitions.create(['background-color', 'color']),
            [theme.breakpoints.down('xs')]: {
                width: '80% !important', // Overrides inline-style
                height: 60,
                margin: 0
            },
            '&:hover, &$focusVisible': {
                zIndex: 1,
                '& ': {
                    backgroundColor: 'white',
                    color: 'black'
                },
            },
        },
        link: {
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'center',
            [theme.breakpoints.down('xs')]: {
                width: '80% !important', // Overrides inline-style
                height: 60,
            },
        },
        focusVisible: {},
        getInTouch: {
            position: 'absolute',
            bottom: '-10vh',
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'center',
            [theme.breakpoints.down('xs')]: {
                width: '80% !important', // Overrides inline-style
                height: 60,
            },
        },
    }
})

function InfoButton() {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    return (
        <div className={classes.root}>
            <Button onClick={() => setOpen(true)} className={classes.button}>Projects</Button>
            <AutoRotatingCarousel
                autoplay={false}
                open={open}
                onClose={() => setOpen(false)}
                style={{ position: 'absolute', overflow: 'hidden' }}
            >
                <ProjectSlide
                    media={<img src={anttisocial} />}
                    mediaBackgroundStyle={{ backgroundColor: 'cyan' }}
                    style={{ backgroundColor: 'green' }}
                    title='AnttiSocial'
                    subtitle='A social media site built using Firebase, React and Redux. This is my first ever React and Redux project and I
                    learned a lot. To learn more about my experiences during this project, please check out the ReadMe on GitHub.'
                    gitHub='https://github.com/4nt1d0t3/anttisocial'
                    url='https://anttisocial-763c6.web.app/'
                />
                <ProjectSlide
                    media={<img src={antibug} />}
                    mediaBackgroundStyle={{ backgroundColor: 'orange' }}
                    style={{ backgroundColor: 'navy' }}
                    title='AntiBug'
                    subtitle='First ever project I created by myself. This bug tracker is built using Node.JS, Express, MySQL and styled with
                    basic CSS and Bootstrap. Check out the ReadMe on Github for more info and give the website a try!'
                    gitHub='https://github.com/4nt1d0t3/antibug'
                    url='https://sheltered-river-68577.herokuapp.com/'
                />
            </AutoRotatingCarousel>
            <Link to='/about' className={classes.link}>
                <Button className={classes.button}>About Me</Button>
            </Link>
            <Link to='/details' className={classes.getInTouch}>
                <Button className={classes.button}>Get in touch</Button>
            </Link>
        </div>
    )
}

export default InfoButton