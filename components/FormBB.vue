<script setup lang=ts>
const {values, errors, handleSubmit} = useBBStore()
</script>

<template>
    <div>
       BB Form
       <InputVee name="fromBankAccount"></InputVee>
    </div>
</template>