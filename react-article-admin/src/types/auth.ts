export type RegFormValues = {
  username: string
  password: string
  repassword: string
}

export type LoginFormValues = Omit<RegFormValues, 'repassword'>
