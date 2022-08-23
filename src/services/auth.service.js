import { RequestService } from "./request.service";
import { removeAccessToken, setAccessToken } from "../util/token";

export class AuthService extends RequestService {
  async signup(email, password) {
    const data = await this.postRequest("auth/signup/", {
      email,
      password,
    });

    const token = await this.returnData(
      data,
      "회원가입에 실패하였습니다. 이메일 또는 비밀번호를 확인해주세요."
    );

    setAccessToken(token["access_token"]);
  }

  async signin(email, password) {
    const data = await this.postRequest("auth/signin/", { email, password });

    const token = await this.returnData(
      data,
      "로그인에 실패하였습니다. 이메일 또는 비밀번호를 확인해주세요."
    );

    setAccessToken(token["access_token"]);
  }

  signout() {
    removeAccessToken("access_token");
  }
}

export default new AuthService();
