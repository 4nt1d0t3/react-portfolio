import React, { useState } from 'react'
//Images
import anttisocial from '../images/anttisocial.jpg'
import antibug from '../images/antibug.png'
import quiz from '../images/quiz.png'
import moviedb from '../images/moviedb.png'
//Components
import ProjectSlide from './ProjectSlide'
import GetInTouch from './GetInTouch'
import About from './About'
//MUI
import { Button, Modal, Dialog, Zoom } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { ButtonClusterStyles } from '../util/muiStyles'

const useStyles = makeStyles(ButtonClusterStyles)

function ButtonCluster() {
    //MUI
    const classes = useStyles()
    //State
    const [carousel, setCarousel] = useState(false)
    const [about, setAbout] = useState(false)
    const [dialog, setDialog] = useState(false)


    return (
        <div className={classes.root}>
            <Button onClick={() => setCarousel(true)} className={classes.button}>Projects</Button>
            <AutoRotatingCarousel autoplay={false} open={carousel} onClose={() => setCarousel(false)} className={classes.carousel}>
                <ProjectSlide
                    media={<img src={anttisocial} alt='AnttiSocial web app' />}
                    title='AnttiSocial'
                    subtitle='A social media site built using Firebase, React and Redux. This is my first ever React and Redux project and I
                    learned a lot. To learn more about my experiences during this project, please check out the ReadMe on GitHub.'
                    gitHub='https://github.com/antti-hyppola/anttisocial'
                    url='https://anttisocial-763c6.web.app/'
                />
                <ProjectSlide
                    media={<img src={moviedb} alt='MovieDB web app' />}
                    title='MovieDB'
                    subtitle='As the title hints, this is a movie database site I built using TypeScript, React, Redux, Grommet and TMdb API. Take a look at the source code on GitHub.'
                    gitHub='https://github.com/antti-hyppola/movieDB/'
                    url='https://epic-curie-249538.netlify.app/'
                />
                <ProjectSlide
                    media={<img src={antibug} alt='AntiBug web app' />}
                    title='AntiBug'
                    subtitle='First ever project I created by myself. This bug tracker is built using Node.JS, Express, MySQL and styled with
                    basic CSS and Bootstrap. Check out the ReadMe on Github for more info and give the website a try!'
                    gitHub='https://github.com/antti-hyppola/antibug'
                    url='https://sheltered-river-68577.herokuapp.com/'
                />
                <ProjectSlide
                    media={<img src={quiz} alt='TypeScript Quiz Game' />}
                    title='Quiz Game'
                    subtitle='A simple quiz game I built to practise TypeScript and React. Questions come from an API called "Open Trivia DB".
                    This was a fun little project to get me more comfortable with TS before I take on a larger project.'
                    gitHub='https://github.com/antti-hyppola/quiz-game/tree/master'
                    url='https://antti-hyppola.github.io/quiz-game/'
                />
            </AutoRotatingCarousel>
            <Button className={classes.button} onClick={() => setAbout(true)}>About Me</Button>
            <Modal
                open={about}
                onClose={() => setAbout(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <About about={about} />
            </Modal>
            <Button onClick={() => setDialog(true)} className={`${classes.getInTouch} ${classes.button}`}>Get in touch</Button>
            <Dialog TransitionComponent={Zoom} className={classes.dialog} fullWidth open={dialog} onClose={() => setDialog(false)}>
                <GetInTouch />
            </Dialog>
        </div>
    )
}

export default ButtonCluster