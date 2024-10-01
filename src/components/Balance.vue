<template>
    Your Balance
    <p>AED {{ totalBalance }}</p>
</template>

<script>
export default {
    props: {
        totalBalance: Number
    }
}
</script>