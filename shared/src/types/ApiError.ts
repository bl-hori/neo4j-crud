import { AxiosError } from "axios";

export type ApiError = {
    error: string;
};

export type AxiosApiError = AxiosError<ApiError>;