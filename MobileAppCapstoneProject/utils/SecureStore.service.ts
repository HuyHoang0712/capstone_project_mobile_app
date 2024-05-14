import * as React from "react";
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

function save(key: string, value: string) {
  SecureStore.setItemAsync(key, value);
}

function get(key: string) {
  return SecureStore.getItem(key);
}

function remove(key: string) {
  SecureStore.deleteItemAsync(key);
}

const setCredentials = async (credentials: any) => {
  const accessTokenDecoded = jwtDecode(credentials.access_token);
  const refreshTokenDecoded = jwtDecode(credentials.refresh_token);
  const accessTokenExpiry = new Date(accessTokenDecoded.exp ?? 0 * 1000);
  const refreshTokenExpiry = new Date(refreshTokenDecoded.exp ?? 0 * 1000);

  save("access_token", credentials.access_token);
  save("refresh_token", credentials.refresh_token);
  save("access_token_expiry", accessTokenExpiry.toISOString());
  save("refresh_token_expiry", refreshTokenExpiry.toISOString());
  save("user_id", accessTokenDecoded.iss ?? "");
  save("user_name", credentials.user_name);
};

const getUserName = () => {
  return get("user_name");
};

const getUserId = () => {
  return get("user_id");
};

const getAccessToken = () => {
  const res = get("access_token");
  return res;
};

const isAccessExpired = () => {
  const res = get("access_token_expiry");
  return res ? new Date(res) < new Date() : true;
};

const logout = async () => {
  remove("access_token");
  remove("refresh_token");
  remove("access_token_expiry");
  remove("refresh_token_expiry");
  remove("user_id");
  remove("user_name");
};

export const SecureStoreService = {
  setCredentials,
  getUserName,
  getUserId,
  getAccessToken,
  isAccessExpired,
  logout,
};
