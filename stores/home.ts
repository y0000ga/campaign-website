import { defineStore } from 'pinia'

export enum Dialog {
  DONATE = 'DONATE',
  SERVICE = 'SERVICE',
  POLICY = 'POLICY',
  ACTIVITY = 'ACTIVITY',
  NULL = 'NULL'
}

export const useHomeStore = defineStore('home', () => {
  const activeDialog: { type: Dialog, id?: string } = reactive({ type: Dialog.NULL})
  const handleActiveDialog = (type: Dialog, id?: string) => {
    activeDialog.type = type
    if (!id) {
      activeDialog.id = undefined
    } else {
      activeDialog.id = id
    }
  }

  return { activeDialog, handleActiveDialog }
})