import jwtDecode from 'jwt-decode'

export const jwtIsExpired = (jwt: string | null | undefined): boolean => {
  if (!jwt) return true

  const decoded: any = jwtDecode(jwt)
  const now = new Date()
  const exp = new Date(decoded.exp * 1000)

  if (now > exp) {
    return true
  }

  return false
}
