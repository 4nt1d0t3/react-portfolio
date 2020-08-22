import { useTheme } from '@material-ui/core/styles'

export const NavStyles = () => {
    return {
        navContainer: {
            display: 'block',
            position: 'relative',
            right: '1vw',
            textAlign: 'right'
        },
        navLink: {
            width: '100%',
            color: 'white',
            display: 'block',
            textDecoration: 'none',
            fontSize: '1.3rem',
            paddingTop: 10
        }
    }
}

export const HomeStyles = () => {
    return {
        headline: {
            color: 'white'
        }
    }
}

export const ButtonClusterStyles = () => {
    const theme = useTheme();
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
        dialog: {
            textAlign: 'center'
        },
        carousel: {
            position: 'absolute',
        },
    }
}

export const SlideStyles = () => {
    return {
        root: {
            backgroundColor: 'transparent',
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
            backgroundColor: 'transparent',
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
            backgroundColor: 'rgba(255,255,255,0.5)',
            textAlign: 'center',
            maxWidth: '100%',
            margin: '0 auto',
            marginTop: 20,
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
        },
    }
}

export const AboutStyles = () => {
    return {
        modal: {
            position: 'absolute',
            width: '60%',
            top: '10%',
            left: '20%',
            padding: 25
        },
        buttons: {
            marginTop: 35,
            display: 'flex',
            justifyContent: 'center'
        }
    }
}