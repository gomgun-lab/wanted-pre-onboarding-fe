import axios from "axios";
import { getAccessToken } from "../util/token";

const BASE_URL = "https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com/";
// "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/";

export class RequestService {
  baseUrl = BASE_URL;
  constructor(baseUrl) {
    if (baseUrl) {
      this.baseUrl = baseUrl;
    }
  }

  requestConfig() {
    const token = getAccessToken();

    return token
      ? {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      : { "Content-Type": "application/json" };
  }

  async returnData(data, errMessage) {
    let result;

    try {
      result = await data;
      if (!result) {
        throw new Error(errMessage);
      }
    } catch (err) {
      alert(errMessage);
    }

    return result;
  }

  async getRequest(route, options) {
    const { data } = await axios.get(
      this.baseUrl + route,
      this.requestConfig(options)
    );

    return data;
  }

  async postRequest(route, body) {
    const { data } = await axios.post(
      this.baseUrl + route,
      body,
      this.requestConfig()
    );

    return data;
  }

  async updateRequest(route, body, options) {
    const { data } = await axios.put(
      this.baseUrl + route,
      body,
      this.requestConfig(options)
    );

    return data;
  }

  async deleteRequest(route) {
    await axios.delete(this.baseUrl + route, this.requestConfig());
  }
}

export default new RequestService();
