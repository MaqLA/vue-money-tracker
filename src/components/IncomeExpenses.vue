<template>
    <div>
        <div class="column">
            Income
            <p>AED {{ totalIncome }}</p>
        </div>
        <div class="column">
            Expenses
            <p>AED {{ totalExpenses }}</p>
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