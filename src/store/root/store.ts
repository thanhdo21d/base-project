import { configureStore } from "@reduxjs/toolkit";
import { rtkQueryErrorLogger } from "../middlewares/middlewares";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store = configureStore({
  reducer :{},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( // connect middlewares
     rtkQueryErrorLogger)
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch