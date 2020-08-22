import React from 'react'
//MUI
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, Tooltip, Typography } from '@material-ui/core';
//Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import { SlideStyles } from '../util/muiStyles';
//Util
import classNames from 'classnames'

const useStyles = makeStyles(SlideStyles)

function ProjectSlide(props) {
    //MUI
    const classes = useStyles()
    //Props
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
                <div className={classes.buttonLinks}>
                    <IconButton onClick={(e) => {
                        e.preventDefault();
                        window.open(gitHub, "_blank") || window.location.replace(gitHub);
                    }}>
                        <Tooltip title='GitHub'>

                            <GitHubIcon />
                        </Tooltip>
                    </IconButton>
                    <IconButton onClick={(e) => {
                        e.preventDefault();
                        window.open(url, "_blank") || window.location.replace(url);
                    }}>
                        <Tooltip title='Website'>
                            <LanguageIcon />
                        </Tooltip>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}


export default ProjectSlide
