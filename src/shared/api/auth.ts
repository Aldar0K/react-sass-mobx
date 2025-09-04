import { apiClient } from "./client";

export const authApi = {
  async getToken(username: string): Promise<string> {
    const response = await fetch(
      `https://test-task-api.allfuneral.com/auth?user=${username}`,
    );

    if (!response.ok) {
      throw new Error(`Auth Error: ${response.status} ${response.statusText}`);
    }

    const token = response.headers.get("Authorization");
    if (!token) {
      throw new Error("No token received from auth endpoint");
    }

    // Extract token from "Bearer _token_" format
    const bearerToken = token.replace("Bearer ", "");
    apiClient.setToken(bearerToken);

    return bearerToken;
  },
};
