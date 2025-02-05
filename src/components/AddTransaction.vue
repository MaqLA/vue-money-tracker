<template>
    <div class="box-card">
        <div class="heading">New Transaction</div>
        <form @submit.prevent="handleSubmit" autocomplete="off">
            <p>
                <label for="desc">Description</label><br>
                <input type="text" id="desc" v-model="enteredText" placeholder="Enter a short description" autofocus>
            </p>
            <p>
                <label for="amount">Amount<br>
                    <span class="secondary"><sub>(Negative number for expense)</sub></span>
                </label><br>
                <input type="text" id="amount" v-model.number.trim="enteredAmount" placeholder="Enter a number">
            </p>
            <button class="btn">Add Transaction</button>
        </form>
        <p v-if="hasFormError" class="secondary">Enter valid details in the fields.</p>
    </div>
</template>

<script>
import { formattedDate } from '@/main.js';

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
                id: new Date().toISOString(),
                date: formattedDate,
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