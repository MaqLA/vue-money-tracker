<template>
    <div v-if="showModal">
        <!-- modals must be opened programatically .showModal() -->
         <div class="modal-backdrop" @click="$emit('close-modal')"></div>
        <dialog open>
            <div class="heading">Edit Transaction</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Description</td>
                            <td>Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ item.date }}</td>
                            <td>{{ item.text }}</td>
                            <td><span v-if="item.amount > 0">+</span>{{ item.amount }}</td>
                        </tr>
                    </tbody>
                </table>
                <!-- method="dialog" will close dialog on submit -->
                <form @submit.prevent="handleSubmitEdit">
                    <div>
                        <p>
                            <label for="desc">Description</label><br>
                            <input type="text" id="desc" v-model="newDescription" placeholder="Enter Description">
                        </p>
                    </div>
                    <div>
                        <p>
                            <label for="amount">
                                Amount<br><span class="secondary"><sub>(Negative number for expense)</sub></span>
                            </label><br>
                            <input type="text" id="amount" v-model.number.trim="newAmount" placeholder="Enter Number">
                        </p>
                    </div>
                    <button class="btn">Confirm</button>
                </form>
                <p v-if="hasFormError">Enter valid details in the fields.</p>
                <p v-if="hasNumberError">Enter a valid non-zero number.</p>
                <!-- <div class="btn-group"> -->
                <p>
                    <button class="btn btn-delete" @click="handleRemoveItem">Delete</button>
                    <button class="btn" type="button" style="float: right;" @click="cancelEdit">Cancel</button>
                </p>
                <!-- </div> -->
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
                itemDate: this.item.date,
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