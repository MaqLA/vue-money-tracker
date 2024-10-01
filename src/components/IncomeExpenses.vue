<template>
    <div>
        Income
        <p>AED {{ totalIncome }}</p>
    </div>
    <div>
        Expenses
        <p>AED {{ totalExpenses }}</p>
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