import React from 'react';
import {Form, Field} from 'react-final-form';
import {Select} from 'final-form-material-ui';
import {useHistory} from "react-router-dom";
import {Paper, Grid, Button, CssBaseline, MenuItem, makeStyles} from '@material-ui/core';
import "./Form.css"

const useStyles = makeStyles({
    button: {
        background: '#00A6B0',
        borderRadius: 3,
        border: 0,
        color: '#A9F0FF',
        height: 48,
        padding: '0 30px',
        '&:hover': {
            backgroundColor: "transparent",
            color: '#00A6B0'
        }
    },
    select: {
        "&:after": {
            // focused
            borderBottom: `3px solid #00A6B0`
        },
        "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
            // hover
            borderBottom: `2px solid #00A6B0`
        }
    },
    label: {
        "&.MuiFormLabel-root": {
            color: '#00A6B0'
        },
        fullWidth: true,
    }
});

export default function FormStuff() {

    let history = useHistory();

    const routeChange = (data) => {
        history.push({
            pathname: '/results',
            props: data
        });
    };

    const onSubmit = async values => {
        routeChange(values)
    };

    const classes = useStyles();
    return (
        <div style={{padding: 16, margin: 'auto', maxWidth: 600, marginBottom: "50px"}}>
            <CssBaseline/>
            <div className="outer-div">
                <div className="title-div">
                    <text className="text-style">
                        FIND THE BEST VC FOR YOUR STARTUP
                    </text>
                </div>
            </div>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit, submitting}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{padding: 16}}>
                            <Grid container alignItems="flex-start" spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        name="fundingType"
                                        component={Select}
                                        label="What Round Are You Raising?"
                                        formControlProps={{fullWidth: true}}
                                        className={classes.select}
                                    >
                                        <MenuItem value="seed">Seed</MenuItem>
                                        <MenuItem value="series-a"> Series A </MenuItem>
                                        <MenuItem value="series-b"> Series B </MenuItem>
                                        <MenuItem value="series-c+"> Series C+ </MenuItem>
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        name="sector"
                                        component={Select}
                                        label="What Category Are you Building For?"
                                        formControlProps={{fullWidth: true}}
                                        className={classes.select}
                                    >
                                        <MenuItem value="software">Software</MenuItem>
                                        <MenuItem value="health-tech">Health Tech</MenuItem>
                                        <MenuItem value="ecommerce">E-Commerce</MenuItem>
                                        <MenuItem value="services">Services</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        name="model"
                                        component={Select}
                                        label="What is your business model?"
                                        formControlProps={{fullWidth: true}}
                                        className={classes.select}
                                    >
                                        <MenuItem value="b2b">B2B</MenuItem>
                                        <MenuItem value="b2c">B2C</MenuItem>
                                        <MenuItem value="c2c">C2C</MenuItem>
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        name="investor"
                                        component={Select}
                                        label="What Kind of Investor Do You Seek?"
                                        formControlProps={{fullWidth: true}}
                                        className={classes.select}
                                    >
                                        <MenuItem value="generalist">Generalist</MenuItem>
                                        <MenuItem value="software">Software Focused</MenuItem>
                                        <MenuItem value="health">Health/BioTech Focused</MenuItem>
                                        <MenuItem value="tools">Developer Tools</MenuItem>
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        name="region"
                                        component={Select}
                                        label="Location of Your Investor"
                                        formControlProps={{fullWidth: true}}
                                        className={classes.select}
                                    >
                                        <MenuItem value="SF">SF Bay Area</MenuItem>
                                        <MenuItem value="NY">New York</MenuItem>
                                        <MenuItem value="BOS">Boston</MenuItem>
                                        <MenuItem value="BOS">Remote</MenuItem>
                                        <MenuItem value="BOS">Doesn't Matter</MenuItem>
                                    </Field>
                                </Grid>
                                <Grid item style={{marginTop: 16}}>
                                    <Button variant="contained" type="submit" classes={{root: classes.button}}>
                                        SEARCH
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </form>
                )}
            />
        </div>
    );
}