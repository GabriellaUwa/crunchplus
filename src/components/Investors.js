import React from 'react';
import {useState, useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {getInvestorsByRaise} from "../network/network";

/**
 * Component for Table. Since I did not want to spend toomuch time modifying rails backend,
 * Props from the form will be use to search and get appropriate response from the backend for tailored VC's
 * The table is currently not filtered.
 ***/
const useStyles = makeStyles({
    root: {
        borderRadius: 10,
        margin: 10
    },
    container: {
        borderRadius: 10,
        maxHeight: 600,
        color: "#00BCC8",
    },
});

const columns = [
    {id: 'investor', label: 'Investor', minWidth: 120, align: 'left'},
    {id: 'category', label: 'Category', minWidth: 120, align: 'left'},
    {id: 'company', label: 'Company', minWidth: 120, align: 'left'},
    {id: 'round', label: 'Round', minWidth: 120, align: 'left'},
    {id: 'location', label: 'Location', minWidth: 100, align: 'left'}
];

function createData(investor, category, company, round, location) {
    return {investor, category, company, round, location};
}

function toTitleCase(str) {
    if(str == null) {
        return ""
    }
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function numberWithCommas(x) {
    if(x == null) {
        return ""
    }
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Investors = (props) => {
    const classes = useStyles();

    const [rounds, setRounds] = useState([]);
    // const [roundPage, setRoundPage] = useState(1);

    useEffect(() => {
        fetchInvestments();
    }, []);

    const fetchInvestments = () => {
        let round_type = "series-a"
        if(props.props != null) {
            round_type = props.props.toString()
        }
        getInvestorsByRaise(round_type).then(data => {
            setRounds(rounds.concat(data["rounds"]));
        }).catch(console.log);
    };

    return (
        <Paper className={classes.root} elevation={4}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth, fontWeight: "bold"}}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rounds.map((row) => {
                            console.log(row)
                            return (
                                <TableRow hover role="checkbox">
                                    {columns.map((column) => {
                                        const data = createData(
                                            row["investor_name"],
                                            toTitleCase(row["company_category_code"]),
                                            toTitleCase(row["company_name"]),
                                            numberWithCommas(row["raised_amount_usd"]),
                                            toTitleCase(row["investor_city"]))
                                        const value = data[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default Investors;
