const styles = {
    appbar: {
        root: {
            backgroundColor: '#2196f3'
        }
    },
    newscontainer: {
        newscontainer: {
            marginTop: '5%'
        }
    },
    newssection: {
        newslist: {
            marginTop: '2%'
        },
        paper: {
            padding: '2%'
        }
    },
    selectbox: theme => ({
        formControl: {
            margin: theme.spacing.unit
        }
    }),
    newsitem: theme => ({
        card: {
            maxWidth: '30vw',
            marginBottom: '2%'
        },
        media: {
            height: '50%',
            paddingTop: '56.25%', // 16:9
        },
        title: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '2rem',
            lineHeight: '1rem',
            marginTop: theme.spacing.unit
        },
        description: {
            height: '5rem',
            lineHeight: '1rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginTop: theme.spacing.unit
        }
    })
}

export default styles;