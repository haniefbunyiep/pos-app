import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";

export const useAuthMutation = ({ onSuccess, onError }) => {
  const { mutate, status } = useMutation({
    mutationFn: async ({ emailOrUsername, password }) => {
      let res = await axiosInstance.get(
        `/users?username=${emailOrUsername}&password=${password}`,
      );
      if (res.data.length === 0) {
        throw new Error("Email not found or password incorrect");
      }
      return res.data;
    },
    onSuccess,
    onError,
  });
  return {
    mutate,
    status,
  };
};
