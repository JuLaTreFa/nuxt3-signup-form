import type { Ref } from 'vue'
export type Field = 'email' | 'password'
export interface FormData {
email: Ref<string>
  password: Ref<string>
}
