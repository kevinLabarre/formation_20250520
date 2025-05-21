export interface TokenApi {
  access_token: string
  refresh_token: string | null
  expires_in: number
}
