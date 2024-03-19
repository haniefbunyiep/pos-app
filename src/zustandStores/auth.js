"use client";
export const createAuthSlice = (set) => ({
  users: null,
  createUsers: (payload) => {
    set({ users: payload });
  },
});
