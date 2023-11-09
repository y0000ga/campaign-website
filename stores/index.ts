import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { ref } from "vue";

const useStore = defineStore("main", () => {
  const count = ref(0)
  const addNum = ({ addedNum }: { addedNum: number }) => {
    count.value = count.value + addedNum
  }
  const asyncAddNum = async ({ addedNum }: { addedNum: number }) => {
    setTimeout(() => {
      count.value = count.value + addedNum
    }, 2000)
    console.log("async")
  }
  return { count, addNum, asyncAddNum }
});

export default useStore;
