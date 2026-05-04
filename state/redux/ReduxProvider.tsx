'use client'

import { Provider } from "react-redux"
import persistStore from "redux-persist/es/persistStore"
import { store } from "./store"
import { PersistGate } from "redux-persist/integration/react"

const ReduxProvider = ({children}: {children: React.ReactNode}) => {
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider