<!-- Just Build -->
<template>
  <Header></Header>
   <div class="container">
    <Balance></Balance>
    <IncomeExpenses></IncomeExpenses>
    <TransactionList></TransactionList>
    <AddTransaction></AddTransaction>
   </div>
</template>

<script>
import Header from './components/Header.vue'
import Balance from './components/Balance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'

export default {
  components: {
    Header,
    Balance,
    IncomeExpenses,
    TransactionList,
    AddTransaction
  },
  data(){ // this is what might move to localstorage
    return {
      
    }; // end data()
  },
  methods: {
    
  }
}
</script>

<style>
 ul {
  margin: 0;
  /* padding: 0; */
 }
</style>