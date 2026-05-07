import apiClient from "@/api";

export const regApi = (value: FormData) => {
  return apiClient.post("/api/reg", value);
};
