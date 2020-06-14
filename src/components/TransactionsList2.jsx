import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { Transaction } from '../components/Transaction';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export const TransactionsList = () => {
    const classes = useStyles();    
    const {transactions} = useContext(GlobalContext);

    console.log(transactions);

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <h3>History</h3>
                        <ul className="list">
                            {
                                transactions.map(transaction =>(
                                    <Transaction key={transaction.id} transaction={transaction} />
                                ))
                            }

                        </ul>   
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <h3>History</h3>
                    <ul className="list">
                        {
                            transactions.map(transaction =>(
                                <Transaction key={transaction.id} transaction={transaction} />
                            ))
                        }

                    </ul>   
                </Paper>
            </Grid>
        </Grid>
        </div>
    )
}
