<template>
  
  <div>
    Activity Id{{ user.firstName }}{{ user.lastName }}{{ id }}
    Counter: {{ count }}
    <input v-model="added" type="number" />
    <button @click="addNum({ addedNum: !!added ? added : 0 })">add</button>
    <button @click="asyncAddNum({ addedNum: !!added ? added : 0 })">async Add</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import useStore from '@/stores/index'
import { storeToRefs } from 'pinia'
interface User {
  firstName: string
  lastName: string
}
type Add = null | number
const added = ref<Add>(null)
const store = useStore()
const { addNum, asyncAddNum } = store

watch(() => [added.value], () => {
  console.log(added.value)
})

const { count } = storeToRefs(store)
const route = useRoute()
const user: User = reactive({ firstName: "abc", lastName: "eee" })
const { id } = route.params

</script>