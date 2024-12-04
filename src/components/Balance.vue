<template>
    <div class="columns">
        <div class="box-card">
            Balance
            <p class="bold-secondary">${{ totalBalance }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        totalBalance: Number
    }
}
</script>