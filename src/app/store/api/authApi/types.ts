export type AuthResponse = {
  token: string
  user: User
}

export type LoginRequest = {
  username: string
  password: string
  expiresInMins?: number
}

export type User = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
}
