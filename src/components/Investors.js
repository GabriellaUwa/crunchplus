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
import {TablePagination} from "@material-ui/core";

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
    {id: 'investor', label: 'Investor', minWidth: 100, align: 'left'},
    {id: 'category', label: 'Category', minWidth: 130, align: 'left'},
    {id: 'company', label: 'Company', minWidth: 100, align: 'left'},
    {id: 'round', label: 'Round', minWidth: 130, align: 'left'},
    {id: 'rating', label: 'VC Rating', minWidth: 100, align: 'left'}
];

function createData(investor, category, company, round, rating) {
    return {investor, category, company, round, rating};
}

// Capitalize Each Word Util
function toTitleCase(str) {
    if (str == null) {
        return ""
    }
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Format Funding Round Value
function numberWithCommas(x) {
    if (x == null) {
        return ""
    }
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Random Number generation in 1 decimal place to mock fake ratings
function getRandomDecimal(min, max, decimalPlaces) {
    const rand = Math.random() < 0.5 ? ((1 - Math.random()) * (max - min) + min) : (Math.random() * (max - min) + min);
    const power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
}

const Investors = (props) => {
    const classes = useStyles();

    const [rounds, setRounds] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    useEffect(() => {
        fetchInvestments();
    }, []);

    const fetchInvestments = () => {
        getInvestorsByRaise(props.props.toString()).then(data => {
            setRounds(rounds.concat(data["rounds"]));
        }).catch(console.log);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
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
                        {rounds.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox">
                                        {columns.map((column) => {
                                            const data = createData(
                                                row["investor_name"],
                                                toTitleCase(row["company_category_code"]),
                                                toTitleCase(row["company_name"]),
                                                numberWithCommas(row["raised_amount_usd"]),
                                                getRandomDecimal(2, 5, 2))
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
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rounds.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default Investors;
