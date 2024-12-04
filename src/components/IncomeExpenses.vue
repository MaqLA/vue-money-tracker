<template>
    <div class="columns">
        <div class="box-card">
            Income
            <p class="bold-secondary">${{ totalIncome }}</p>
        </div>
        <div class="box-card">
            Expenses
            <p class="bold-secondary">${{ totalExpenses }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        totalIncome: Number,
        totalExpenses: Number,
    }
}
</script>