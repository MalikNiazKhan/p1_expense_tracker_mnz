import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Balance } from './components/Balance';
import { IncomeExpenseCard } from './components/IncomeExpenseCard';
import { TransactionsList } from './components/TransactionsList';
import { TransactionForm } from './components/TransactionForm';

import { GlobalProvider } from './context/GlobalState';

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



// This is only on the master branch...
function App() {

  const classes = useStyles();    

  return (
    <GlobalProvider>
          <Header />
          <div className="container">     
            <Balance />
            <IncomeExpenseCard />

            <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}> 
                      <TransactionForm  transactionType="I"/>
                      <TransactionsList transactionType="I" />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                      <TransactionForm  transactionType="E"/>
                      <TransactionsList transactionType="E"/>
                    </Paper>
                </Grid>
            </Grid>
            </div>
          </div>
          <Footer />
    </GlobalProvider>
  );
}

export default App;
