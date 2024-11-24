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
                <input type="text" id="amount" v-model.number.trim="enteredAmount" placeholder="Enter Number">
            </div>
            <button>Add Transaction</button>
        </form>
        <p v-if="hasFormError">Enter valid details in the fields.</p>
    </div>
</template>

<script>
export default {
    emits: ['add-transaction'],
    data(){
        return {
            enteredText: '',
            enteredAmount: '',
            hasFormError: false,
        };
    },
    methods: {
        handleSubmit(){
            this.hasFormError = false;
            
            // Validation
            if(!this.enteredText || !this.enteredAmount){
                this.hasFormError = true;
                return;
            }

            const payload = {
                description: this.enteredText,
                amount: parseFloat(this.enteredAmount)
            }
            this.$emit('add-transaction', payload);

            this.enteredText = '';
            this.enteredAmount = '';
        },
    }
}
</script>