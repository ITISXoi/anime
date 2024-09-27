import { ERR_BAD_RESPONSE_CODE, NOT_AUTHORIZED_CODE } from "@/libs/http-code";
import { Environment } from "@/libs";
import { storage } from "@/libs/storage";
import axios from "axios";

const authRequestInterceptor = async (config: any) => {
	const token = storage.getToken();
	if (token) {
		config.headers.authorization = `Bearer ${token}`;
	}

	config.headers.Accept = "application/json; charset=utf-8";
	config.params = {
		...config.params,
	};
	return config;
};

const authResponseInterceptor = async (response: any) => {
	if (response.status === NOT_AUTHORIZED_CODE) {
		// Logout
		storage.clearToken();
		window.location.reload();
	}
	return response?.data?.data || response?.data;
};

const createAxiosService = (url: any) => {
	const axiosInstance = axios.create({
		baseURL: url,
	});
	axiosInstance.interceptors.request.use(authRequestInterceptor);
	axiosInstance.interceptors.response.use(authResponseInterceptor, async (error) => {
		if (error?.response?.status === ERR_BAD_RESPONSE_CODE) {
			try {
				console.log("refresh token");
				const token = storage.getToken();
				storage.setToken(token ?? null);
				axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
				return axiosInstance;
			} catch (e: any) {
				storage.clearToken();
				return Promise.reject(e?.response?.data ? e?.response?.data : e);
			}
		}
		return Promise.reject(error);
	});
	return axiosInstance;
};

export let baseService = createAxiosService(Environment?.baseUrl);
