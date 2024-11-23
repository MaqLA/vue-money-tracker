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
                        <input type="text" id="desc" v-model="newDescription">
                    </div>
                    <div>
                        <label for="amount">Edit Amount</label><br>
                        <input type="text" id="amount" v-model.number="newAmount">
                    </div>
                    <button>Confirm Edit</button>
                </form>
                <p v-if="hasFormError">Enter valid details in the fields.</p>
                <span><button type="button" @click="$emit('close-modal')">Cancel</button></span>
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
        };
    },
    methods: {
        handleSubmitEdit(){
            // validation
            if(this.newDescription || this.newAmount){
                console.log({desc: this.newDescription, amm: this.newAmount})
                this.newDescription = '';
                this.newAmount = '';
                this.$emit('close-modal');
            } else {
                this.hasFormError = true;
            }
        }
    }
}
</script>