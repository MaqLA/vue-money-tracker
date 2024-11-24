<template>
    <div v-if="showModal" class="modal-backdrop">
        <!-- modals must be opened programatically .showModal() -->
        <dialog open id="edit">
            Edit Transaction
            <div>
                {{ item.text }}<span style="padding-left: 1em;">AED {{ item.amount }}</span>
                <!-- method="dialog" will close dialog on submit -->
                <form @submit.prevent="handleSubmitEdit">
                    <div>
                        <label for="desc">Edit Description</label><br>
                        <input type="text" id="desc" v-model="newDescription" placeholder="Enter Description">
                    </div>
                    <div>
                        <label for="amount">
                            Edit Amount<br><span class="half-opacity">(Negative number for expense)</span>
                        </label><br>
                        <input type="text" id="amount" v-model.number.trim="newAmount" placeholder="Enter Number">
                    </div>
                    <button>Confirm Edit</button>
                </form>
                <p v-if="hasFormError">Enter valid details in the fields.</p>
                <p v-if="hasNumberError">Enter a valid non-zero number.</p>
                <button type="button" @click="cancelEdit">Cancel</button>
                <button class="delete-btn" @click="handleRemoveItem">Delete</button>
            </div>
        </dialog>
    </div>
</template>

<script>
export default {
    props: { showModal: Boolean, item: Object },
    emits: ['close-modal'],
    data(){
        return {
            newDescription: '',
            newAmount: '',
            hasFormError: false,
            hasNumberError: false,
        };
    },
    methods: {
        cancelEdit(){
            this.newDescription = '', this.newAmount = '';
            this.hasFormError = false, this.hasNumberError = false;
            this.$emit('close-modal');
        },
        handleSubmitEdit(){            
            let oldDesc = this.item.text;
            let oldAmount = this.item.amount;
            let desc = !this.newDescription ? oldDesc : this.newDescription;
            let amount = !this.newAmount ? oldAmount : this.newAmount;
            
            // validation
            if(!this.newDescription && !this.newAmount){
                this.hasFormError = true;
                return;
            } else if(typeof amount != 'number'){
                this.hasNumberError = true;
                return;
            }

            const payload = {
                itemId: this.item.id,
                description: desc,
                amount: parseFloat(amount)
            }
            this.$parent.$emit('edit-transaction', payload);

            this.newDescription = '', this.newAmount = '';
            this.hasFormError = false, this.hasNumberError = false;
            this.$emit('close-modal');
        },
        handleRemoveItem(){
            const payload = this.item.id;

            this.$parent.$emit('remove-transaction', payload);

            this.$emit('close-modal');
        },
    }
}
</script>