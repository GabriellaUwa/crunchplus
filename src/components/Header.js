import {AppBar, Toolbar, makeStyles, Link} from '@material-ui/core'
import logo from '../Crunch+.png'
import "./Header.css"

const useStyles = makeStyles((theme) => ({
    bar: {
        backgroundColor: "#00A6B0",
        padding: 10
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Link href="/" >
                        <img src={logo} className="logo"/>
                    </Link>
                    <text className="header-caption">
                        THE VC ENGINE FOR STARTUPS
                    </text>
                </Toolbar>
            </AppBar>
        </div>
    )
}