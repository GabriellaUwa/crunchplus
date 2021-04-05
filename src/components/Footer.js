import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection: 'column',
    },
    footer: {
        padding: theme.spacing(5, 2),
        backgroundColor: "transparent",
        flexShrink: 0,
},
}));

function Copyright() {
    return (
        <Typography variant="body1" style={{color: "#A9F0FF"}}>
            {'Copyright © '}
            <Link color="inherit" href="https://gabriellau.xyz/">
                Gabriella U.
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Copyright/>
                </Container>
            </footer>
        </div>
    );
}
