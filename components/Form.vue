<script setup lang=ts>
const {values, errors, handleSubmit} = useBBStore()
</script>

<template>
    <div>
        {{values}}
    </div>
</template>