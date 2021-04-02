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
import {getRounds} from "../network/network";

/**
 * Component for Table. Since I did not modify rails backend and didn't want to spend too much time in general.
 * Essentially, props from the form will be use to search and get appropriate response from backend for tailored VC's
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
    {id: 'company', label: 'Company', minWidth: 180},
    {id: 'category', label: 'Category', minWidth: 100},
    {id: 'round', label: 'Round', minWidth: 100, align: 'right'},
    {id: 'location', label: 'Location', minWidth: 180, align: 'right'}
];

function createData(company, category, round, location) {
    return {company, category, round, location};
}

const Investors = (props) => {
    const classes = useStyles();

    const [rounds, setRounds] = useState([]);
    const [roundPage, setRoundPage] = useState(1);

    useEffect(() => {
        fetchInvestments();
    }, []);

    const fetchInvestments = () => {
        getRounds(roundPage).then(data => {
            setRounds(rounds.concat(data["crunchbase_investments"]));
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
                            return (
                                <TableRow hover role="checkbox">
                                    {columns.map((column) => {
                                        const data = createData(row["investor_name"], row["company_category_code"], row["funding_round_type"], row["investor_city"])
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
