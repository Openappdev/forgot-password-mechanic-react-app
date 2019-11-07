import Request from "./Request";
import { staticData } from "../data/static";

const UserService = {
    /**
     * @description this method requests the server to issue the recovery process to the user
     */
    async recoveryPassword(loginId) {
        const parameter = {
            loginId
        };

        try {
            const res = await Request.post("forgot-password", null, parameter);
            let response = {};

            switch (res.status) {
                case 200: // user password has been successfully recovered
                    response = {
                        success: true,
                        message: res.data.message
                    };
                    break;
                case 401: // User not found
                    response = {
                        success: false,
                        message: res.data.error.message
                    };
                    break;
                default:
                    // unexpected issue occured
                    response = {
                        success: false,
                        message: staticData.notification.unexpectedErrorMessage
                    };
                    break;
            }

            return Promise.resolve(response);
        } catch (e) {
            return Promise.reject(e);
        }
    }
};

export default UserService;
