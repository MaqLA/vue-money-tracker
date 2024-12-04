<template>
    <div class="box-card">
        <div class="heading">Transactions</div>
        <table>
            <thead>
                <tr>
                    <td>Description</td>
                    <td>Amount</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody v-if="transactions.length === 0"><tr><td>There are no transactions yet. Create one!</td></tr></tbody>
            <tbody v-for="item in transactions" :key="item.id">
                <tr>
                    <td>{{ item.text }}</td><td><span v-if="item.amount > 0">+</span>{{ item.amount  }}</td>
                    <td>
                        <button class="btn" type="button" @click="openModal(item)">Edit</button>
                    </td>
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