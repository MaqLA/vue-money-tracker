<template>
    <div class="box-card">
        <div class="heading">Transactions</div>
        <table class="main-table">
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Description</td>
                    <td>Amount</td>
                </tr>
            </thead>
            <tbody v-if="transactions.length === 0">
                <tr><td colspan="4">There are no transactions yet. Create one!</td></tr>
            </tbody>
            <tbody v-for="item in transactions" :key="item.id">
                <tr @click="openModal(item)">
                    <td>{{ item.date }}</td>
                    <td>{{ item.text }}</td>
                    <td><span v-if="item.amount > 0">+</span>{{ item.amount  }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <EditTransaction :item="selectedItem" :show-modal="showModal" @close-modal="closeModal"></EditTransaction>
</template>

<script>
import EditTransaction from './EditTransaction.vue';

export default {
    components: { EditTransaction },
    props: { transactions: Object, editing: Boolean },
    emits: ['remove-transaction', 'toggle-modal', 'edit-transaction'], // 'remove' and 'edit' emitted from grandchild
    data(){
        return {
            showModal: false,
            selectedItem: null,
        };
    },
    methods: {
        openModal(item){
            this.showModal = true;
            this.selectedItem = item;
        },
        closeModal(){
            this.showModal = false;
        }
    },
}
</script>