<!-- Just Build -->
<template>
  <Header></Header>
   <div class="container">
    <Balance :totalBalance="+totalBalance"></Balance>
    <IncomeExpenses :totalExpenses="+totalExpenses" :totalIncome="+totalIncome"></IncomeExpenses>
    <TransactionList :transactions="transactions" @remove-transaction="removeTransaction"></TransactionList>
    <AddTransaction @add-transaction="addTransaction"></AddTransaction>
   </div>
   <Footer></Footer>
</template>

<script>
import Header from './components/layout/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';
import Footer from './components/layout/Footer.vue';

export default {
  components: {
    Header,
    Balance,
    IncomeExpenses,
    TransactionList,
    AddTransaction,
    Footer
  },
  data(){
    return {
      transactions: [], // data held in localStorage
    };
  },
  computed: {
    totalBalance(){
      // accumulator 0 holds the total values returned after calculation
      return this.transactions.reduce( (accumulator, transaction)=> {
        return accumulator + transaction.amount;
      },0)
      .toFixed(2);
    },
    totalIncome(){
      // return amounts greater than 0
      return this.transactions.reduce((accumulator, transaction)=> {
        if(transaction.amount > 0){
          return accumulator + transaction.amount;
        }else{
          return accumulator;
        }
      },0)
      .toFixed(2);
    },
    totalExpenses(){
      // return amounts less than 0
      return this.transactions.reduce((accumulator, transaction)=> {
        if(transaction.amount < 0){
          return accumulator + transaction.amount; // negative number + negative number
        }else{
          return accumulator;
        }
      },0)
      .toFixed(2);
    }
  },
  methods: {
    addTransaction(listingText, listingAmount){
      const newTransaction = {
        id: new Date().toISOString(),
        text: listingText,
        amount: listingAmount
      };

      this.transactions.push(newTransaction);

      // call localStorage setter after pushing data to the array
      this.saveLocalStorage();
    },
    removeTransaction(itemId){
      this.transactions = this.transactions.filter(transaction => transaction.id != itemId);

      this.saveLocalStorage();
    },
    saveLocalStorage(){
      // save to localStorage as strings
      localStorage.setItem('transactions', JSON.stringify(this.transactions));

    },
    loadLocalStorage(){
      // localStorage is always strings
      const savedLocalData = JSON.parse(
        localStorage.getItem('transactions')
      )

      // if data saved in localStorage
      if(savedLocalData){
        this.transactions = savedLocalData;
      }
    }
  },
  mounted(){
    this.loadLocalStorage();
  }
}
</script>