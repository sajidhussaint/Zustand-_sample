import { create } from "zustand";

// Create a custom hook called useColor
export const useColor = create((set) => ({
  // Initial state: text and color both set to 'black'
  text: "black",
  color: "black",

  // Function to update text state
  setText: (text) => set({ text }),

  // Function to update color state
  setColor: (color) => set({ color }),
}));


