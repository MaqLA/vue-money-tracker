<template>
    Transaction History
    <ul id="list">
        <!-- temp items -->
        <li class="plus">
            allowance <p>50</p>
        </li>
        <li class="minus">
            snacks <p>0.00</p>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            // transactions array moved to App.vue
        };
    }
}
</script>

<style scoped>
#list {
    list-style: none;
}
#list span {
    margin: 1rem;
}
</style>