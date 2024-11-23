<template>
    Transaction History
    <span class="half-opacity">(Click 'Edit' to edit details)</span>
    <ul id="list">
        <li v-for="item in transactions" :key="item.id">
            {{ item.text }}<span>AED {{ item.amount }}</span>
            <button @click="removeTransaction(item.id)" disabled>Delete</button>
            <button type="button" @click="openModal(item)">Edit</button>
        </li>
    </ul>
    <EditTransaction :item="selectedItem" :show-modal="showModal" @close-modal="closeModal"></EditTransaction>
    <p v-if="transactions.length === 0">There are no transactions yet. Create one!</p>
</template>

<script>
import EditTransaction from './EditTransaction.vue';

export default {
    components: { EditTransaction },
    props: { transactions: Object, editing: Boolean },
    emits: ['remove-transaction', 'toggle-modal'],
    data(){
        return {
            showModal: false,
            selectedItem: null,
        };
    },
    methods: {
        removeTransaction(id){
            this.$emit('remove-transaction', id);
        },
        openModal(item){
            this.showModal = true;
            this.selectedItem = item;
            console.log(item)
        },
        closeModal(){
            this.showModal = false;
        }
    },
}
</script>