<template>
    Transaction History
    <span class="half-opacity">(Click on a list item to edit details)</span>
    <ul id="list">
        <li v-for="item in transactions" :key="item.id">
        {{ item.text }}<span>AED {{ item.amount }}</span>
            <button @click="removeTransaction(item.id)">X</button>
        </li>
    </ul>
    <p v-if="transactions.length === 0">There are no transactions yet. Create one!</p>
</template>

<script>
export default {
    props: {
        transactions: Object,
    },
    emits: ['remove-transaction'],
    methods: {
        removeTransaction(id){
            this.$emit('remove-transaction', id);
        },
    },
}
</script>