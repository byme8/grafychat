import axios, { AxiosResponse } from "axios";
import { openLogin, ApiUrl } from "../Helpers";

export class RestClient {

    async post<T>(url: string, data: any = {}): Promise<T> {
        return await this.doRequest(() => axios.post<T>(ApiUrl + url, data))
    }

    async get<T>(url: string, params: {} | null = null): Promise<T> {
        return await this.doRequest(() => axios.get<T>(ApiUrl + url, { params }))
    }

    async delete<T>(url: string, params: {} | null = null): Promise<T> {
        return await this.doRequest(() => axios.delete<T>(ApiUrl + url, { params }))
    }

    private async doRequest<T>(action: () => Promise<AxiosResponse<T>>) {
        try {
            let response = await action()
            return response.data;
        } catch (error) {
            let response = error.response as AxiosResponse<T>
            if (response) {
                this.checkResponse(response)
            }

            throw error;
        }
    }

    private checkResponse<T>(response: AxiosResponse<T>) {
        if (response.status == 401) {
            openLogin();
        }
    }
}

export default new RestClient()
