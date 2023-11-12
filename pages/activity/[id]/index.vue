<template>
  
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';


interface User {
  firstName: string
  lastName: string
}
type Add = null | number
const added = ref<Add>(null)

watch(() => [added.value], () => {
  console.log(added.value)
})

const route = useRoute()
const user: User = reactive({ firstName: "abc", lastName: "eee" })
const { id } = route.params

</script>