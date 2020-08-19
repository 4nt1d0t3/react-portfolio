import React, { useState, useEffect } from 'react'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { useHistory } from 'react-router-dom';
//MUI
import { Button, Modal, Fade } from '@material-ui/core'

function Projects() {
    const [open, setOpen] = useState(false)
    const history = useHistory()

    useEffect(() => { setOpen(true) }, [])

    return (

        <div style={{ position: 'relative', width: '100%', height: 500 }}>
            <Button onClick={() => setOpen(true)}>Open carousel</Button>
            <AutoRotatingCarousel
                label='Get in touch!'
                open={open}
                onClose={() => setOpen(false)}
                onStart={() => setOpen(false)}
                style={{ position: 'absolute' }}
            >
                <Slide
                    media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
                    mediaBackgroundStyle={{ backgroundColor: 'pink' }}
                    style={{ backgroundColor: 'red' }}
                    title='This is a very cool feature'
                    subtitle='Just using this will blow your mind.'
                />
                <Slide
                    media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
                    mediaBackgroundStyle={{ backgroundColor: 'teal' }}
                    style={{ backgroundColor: 'blue' }}
                    title='Ever wanted to be popular?'
                    subtitle='Well just mix two colors and your are good to go!'
                />
                <Slide
                    media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
                    mediaBackgroundStyle={{ backgroundColor: 'cyan' }}
                    style={{ backgroundColor: 'green' }}
                    title='May the force be with you'
                    subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
                />
            </AutoRotatingCarousel>
        </div>
    )
}

export default Projects