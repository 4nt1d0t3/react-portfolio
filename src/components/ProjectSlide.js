import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography'
import blue from '@material-ui/core/colors/blue'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Tooltip from '@material-ui/core/Tooltip';
import LanguageIcon from '@material-ui/icons/Language';
import { IconButton } from '@material-ui/core';



const useStyles = makeStyles({
    root: {
        backgroundColor: blue[500],
        height: '100%',
    },
    rootMobileLandscape: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    media: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > *': {
            maxHeight: '100%'
        }
    },
    mediaMobile: {
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)'
    },
    mediaMobileLandscape: {},
    mediaBackground: {
        backgroundColor: blue[700],
        height: 'calc(100% - 216px)',
        textAlign: 'center'
    },
    mediaBackgroundMobile: {
        height: 'calc(100% - 241px)'
    },
    mediaBackgroundMobileLandscape: {
        height: '100%',
        flex: '1 1',
        alignSelf: 'stretch'
    },
    text: {
        textAlign: 'center',
        maxWidth: '80%',
        margin: '0 auto',
        marginTop: 20
    },
    textMobile: {
        paddingTop: 30,
        '& $title': {
            marginBottom: 8
        }
    },
    textMobileLandscape: {
        minWidth: 300,
        maxWidth: 'calc(50% - 48px)',
        padding: '24px 24px 128px',
        flex: '0 1',
        alignSelf: 'center',
        textAlign: 'left',
        margin: 0
    },
    title: {
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '32px',
        marginBottom: 12,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: '#fff'
    },
    subtitle: {
        fontSize: '15px',
        fontWeight: 400,
        lineHeight: '18px',
        margin: 0,
        color: '#fff'
    }
})

function ProjectSlide(props) {
    const {
        title,
        subtitle,
        gitHub,
        url,
        media,
        mediaBackgroundStyle,
        mobile,
        landscape
    } = props
    const classes = useStyles()

    const mobileLandscape = mobile && landscape

    return (
        <div
            className={classNames(classes.root, {
                [classes.rootMobile]: mobile,
                [classes.rootMobileLandscape]: mobileLandscape
            })}
        >
            <div
                className={classNames(classes.mediaBackground, {
                    [classes.mediaBackgroundMobile]: mobile,
                    [classes.mediaBackgroundMobileLandscape]: mobileLandscape
                })}
                style={mediaBackgroundStyle}
            >
                <div className={classNames(classes.media, {
                    [classes.mediaMobile]: mobile,
                    [classes.mediaMobileLandscape]: mobileLandscape
                })}>
                    {media}
                </div>
            </div>
            <div
                className={classNames(classes.text, {
                    [classes.textMobile]: mobile,
                    [classes.textMobileLandscape]: mobileLandscape
                })}
            >
                <Typography className={classes.title}>
                    {title}
                </Typography>
                <Typography className={classes.subtitle}>
                    {subtitle}
                </Typography>
                <div>
                    <Tooltip title='GitHub'
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(gitHub, "_blank") || window.location.replace(gitHub);
                        }}
                    >
                        <IconButton>
                            <GitHubIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Website'
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(url, "_blank") || window.location.replace(url);
                        }}
                    >
                        <IconButton>
                            <LanguageIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}


export default ProjectSlide
