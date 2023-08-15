import { createContext, useContext, type PropsWithChildren } from 'react'
import { hasCookie } from 'cookies-next'

import { LOGGED_IN_KEY } from '~/constants/insecureCookies'

type AuthContextProps = {
  isAuthenticated?: boolean
}

// Exported for testing.
export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
)

/**
 * Provider component that wraps your app and makes client login state boolean available
 * to any child component that calls `useAuth()`.
 */
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const auth = useProvideAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

/**
 * Hook for components nested in ProvideAuth component to get the current auth object.
 */
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(`useAuth must be used within a AuthProvider component`)
  }
  return context
}

// Provider hook that creates auth object and handles state
const useProvideAuth = () => {
  const isAuthenticated = hasCookie(LOGGED_IN_KEY)

  // Return the user object and auth methods
  return {
    isAuthenticated,
  }
}
