<!-- Just Build -->
<template>
  <Header></Header>
   <div class="container">
    <Balance :totalBalance="totalBalance"></Balance>
    <IncomeExpenses :totalExpenses="totalExpenses" :totalIncome="totalIncome"></IncomeExpenses>
    <TransactionList :transactions="transactions"></TransactionList>
    <AddTransaction @add-transaction="addTransaction"></AddTransaction>
   </div>
</template>

<script>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';

export default {
  components: {
    Header,
    Balance,
    IncomeExpenses,
    TransactionList,
    AddTransaction
  },
  data(){
    return {
      transactions: [ // this is what might move to localstorage
        // {
        //   id: 1,
        //   // date: new Date().getUTCDate(),
        //   text: 'test data',
        //   amount: 100.99
        // },
        // {
        //   id: 2,
        //   text: 'test data2',
        //   amount: -50.01
        // }
      ],

    };
  },
  computed: {
    totalBalance(){
      // accumulator 0 holds the total values returned after calculation
      return this.transactions.reduce( (accumulator, transaction)=> {
        return accumulator + transaction.amount;
      },0);
    },
    totalIncome(){
      // return amounts greater than 0
      return this.transactions.reduce((accumulator, transaction)=> {
        if(transaction.amount > 0){
          return accumulator + transaction.amount;
        }else{
          return accumulator;
        }
      },0);
    },
    totalExpenses(){
      // return amounts less than 0
      return this.transactions.reduce((accumulator, transaction)=> {
        if(transaction.amount < 0){
          return accumulator + transaction.amount; // negative number + negative number
        }else{
          return accumulator;
        }
      },0);
    }
  },
  methods: {
    addTransaction(listingText, listingAmount){
      const newTransaction = {
        id: new Date().toISOString(),
        // date: new Date().getUTCDate(),
        text: listingText,
        amount: listingAmount
      };

      this.transactions.push(newTransaction);
    },

  }
}
</script>

<!-- <style>
 ul {
  margin: 0;
  /* padding: 0; */
 }
</style> -->