<template>
    New Transaction
    <form @submit.prevent="handleSubmit">
        <label for="type">Text</label>
        <input type="text" id="type" v-model="enteredText">
        <label for="amount">Amount</label>
        <input type="text" id="amount" v-model.number="enteredAmount">
        <button>Add Transaction</button>
    </form>
</template>

<script>
export default {
    emits: ['add-transaction'],
    data(){
        return {
            enteredText: '',
            enteredAmount: '',
        };
    },
    methods: {
        handleSubmit(){
            this.$emit(
                'add-transaction', // emits function to App.vue
                this.enteredText,
                this.enteredAmount
            )
            this.clearFields();
        },
        clearFields(){
            [this.enteredText, this.enteredAmount] = ['', '']
        }
    }
}
</script>