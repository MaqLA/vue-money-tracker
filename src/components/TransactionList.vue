<template>
    Transaction History
    <ul id="list">
        <!-- temp items -->
        <!-- <li class="plus">
            allowance <p>50</p>
        </li>
        <li class="minus">
            snacks <p>0.00</p>
        </li> -->
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
        // text: String,
        // amount: Number
    },
}
</script>

<!-- <style scoped>
#list {
    list-style: none;
}
#list span {
    margin: 1rem;
}
</style> -->