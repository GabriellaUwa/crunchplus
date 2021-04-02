import {AppBar, Toolbar, makeStyles} from '@material-ui/core'
import logo from '../Crunch+.png'
import "./Header.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        backgroundColor: "#00A6B0",
        padding: 10
    },
    image: {
        margin: 10,
        width: 150,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        font: 1,
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <a href="../App.js">
                        <img src={logo} className="logo"/>
                    </a>
                    <text className="header-caption">
                        THE VC ENGINE FOR STARTUPS
                    </text>
                </Toolbar>
            </AppBar>
        </div>
    )
}