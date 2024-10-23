<template>
  <div style="padding:5rem; text-align:center">
    <p>If the <b>userType</b> is <b>admin</b>, then the email must have the <b>@admin</b> domain.</p>  
      <center>
      <form @submit.prevent="onSubmit">
      <div>
        <label for="userType">userType:</label>
        <InputVee id="userType" :name="'userType'"  />
      </div>
      <br>
      <div>
        <label for="email">Email:</label>
        <InputVee id="email" :name="'email'"  />
      </div>
      <br>
      <br>
      <button @click="onSubmit" type="submit">Odeslat</button>
      <br>
      <br>
      {{values}}
      <br>
      <br>
      <br>
    </form>
    </center>
  </div>
</template>
<script lang="ts" setup>
const validationStore = useValidationStore()
const {values, errors, handleSubmit} = useValidationStore()
const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
