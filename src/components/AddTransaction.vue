<template>
    <div>
        New Transaction
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="desc">Text</label><br>
                <input type="text" id="desc" v-model="enteredText" placeholder="Enter Description">
            </div>
            <div>
                <label for="amount">Amount<br><span class="half-opacity">(Negative number for expense)</span></label><br>
                <input type="text" id="amount" v-model.number="enteredAmount" placeholder="Enter amount">
            </div>
            <button>Add Transaction</button>
        </form>
    </div>
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
            // Validation
            if(!this.enteredText || !this.enteredAmount){
                return;
            }

            this.$emit(
                'add-transaction',
                this.enteredText,
                parseFloat(this.enteredAmount)
            )

            this.enteredText = '';
            this.enteredAmount = '';
        },
    }
}
</script>