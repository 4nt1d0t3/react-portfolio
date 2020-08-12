import React from 'react'
import { ButtonBase, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import anttisocial from '../images/anttisocial.jpg'
import canada from '../images/canada.jpg'
//MUI



const images = [
    {
        url: `url(${anttisocial})`,
        title: 'Projects',
        width: '30%'
    },
    {
        url: `url(${canada})`,
        title: 'About Me',
        width: '30%'
    },
]

const useStyles = makeStyles(theme => {
    return {
        root: {
            display: 'flex',
            minWidth: 300,
            width: '100%',
            justifyContent: 'space-evenly',
            marginTop: 35
        },
        image: {
            position: 'relative',
            height: 200,
            [theme.breakpoints.down('xs')]: {
                width: '100% !important', // Overrides inline-style
                height: 100,
            },
            '&:hover, &$focusVisible': {
                zIndex: 1,
                '& $imageBackdrop': {
                    opacity: 0.15,
                },
                '& $imageMarked': {
                    opacity: 0,
                },
                '& $imageTitle': {
                    border: '4px solid currentColor',
                },
            },
        },
        imageSrc: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
        },
        imageBackdrop: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: theme.palette.common.white,
            opacity: 0.4,
            transition: theme.transitions.create('opacity'),
        },
        imageTitle: {
            position: 'relative',
            color: 'black',
            padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        },
        imageButton: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.common.white,
        },
        focusVisible: {},
        imageMarked: {
            height: 3,
            width: 18,
            backgroundColor: theme.palette.common.white,
            position: 'absolute',
            bottom: -2,
            left: 'calc(50% - 9px)',
            transition: theme.transitions.create('opacity'),
        },
    }
})

function InfoButton() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {images.map(image => (
                <ButtonBase
                    focusRipple
                    key={image.title}
                    focusVisibleClassName={classes.focusVisible}
                    style={{ width: image.width }}
                    className={classes.image}
                >
                    <span className={classes.imageSrc} style={{ backgroundImage: image.url }} />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography component='span' variant='subtitle1' className={classes.imageTitle}>
                            {image.title}
                            <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
            ))}
        </div>
    )
}

export default InfoButton