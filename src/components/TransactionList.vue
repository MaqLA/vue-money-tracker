<template>
    Transaction History
    <ul id="list">
        <li 
        v-for="item in transactions" 
        :key="item.id">
        {{ item.text }}<span>AED {{ item.amount }}</span>
        </li>
    </ul>
    <p v-if="transactions.length === 0">There are no transactions yet. Create one!</p>
</template>

<script>
export default {
    props: {
        transactions: Object,
    },
}
</script>