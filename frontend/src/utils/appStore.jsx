import { configureStore } from "@reduxjs/toolkit";
import aiReducer from "./aiSlice";

const appStore = configureStore({
  reducer: {
    ai: aiReducer, // Change 'gpt' to 'ai' to match AiResponseCards access
  },
});

export default appStore;
