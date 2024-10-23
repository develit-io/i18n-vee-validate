<script lang="ts" setup>

defineProps<{ name: string }>()
</script>

<template>
  <Field type=text :name="name"  />
  <br>
  <ErrorMessage style="color:red" :name="name" />
</template>
