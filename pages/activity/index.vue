<template>
  <div>  <p>Activity{{ msg }}</p>
    <my-button></my-button></div>

</template>

<script setup lang="ts">
const msg = ref('123');

function changeMsg() {
  msg.value += '!';
}

 useSeoMeta({
 title: 'Test Page',
   description: 'this is desc',
});
</script>