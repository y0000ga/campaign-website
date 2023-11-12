import { defineStore } from 'pinia'

export enum Dialog {
  DONATE,
  SERVICE,
  POLICY,
  ACTIVITY,
  NULL
}

export const useHomeStore = defineStore('home', () => {
  const activeDialog: {type: Dialog, id?: string} = reactive({type:Dialog.DONATE})
  const handleActiveDialog = (type: Dialog,id?:string) => {
    activeDialog.type = type
    if (!id) {
      activeDialog.id = undefined
    } else {
      activeDialog.id = id
    }
  }

  return {activeDialog,handleActiveDialog}
})