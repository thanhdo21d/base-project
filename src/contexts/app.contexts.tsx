import { createContext, useState } from 'react'

interface AppContextInterface {
  number: number
}

const initialAppContext: AppContextInterface = {
  number: 5
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const number = 5

  return (
    <AppContext.Provider
      value={{
        number
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
