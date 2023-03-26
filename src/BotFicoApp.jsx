import React, { useEffect } from 'react'
import { AuthProvider } from './auth/context/AuthProvider'
import { ThemeCustomProvider } from './context/ThemeCustomProvider'
import { useDarkMode } from './hooks/useDarkMode'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

export const BotFicoApp = () => {

  return (
      <AuthProvider>
        <AppTheme>
          <AppRouter />
        </ AppTheme>
      </AuthProvider>
  )
}
