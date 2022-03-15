import { defineStore } from "pinia";
import { ElMessage } from 'element-plus';

type typeMessage = 'success' | 'warning' | 'info' | 'error';

export const messageStore = defineStore({
  id: "message",
  state: () => ({
    type: '',
  }),
  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});
