import axios from "axios";
import config from "../utils/config";

const instance = axios.create();

const Request = {
    post(service, endpoint, formObj = {}, version = "v2") {
        return new Promise((resolve, reject) => {
            return instance({
                method: "post",
                url:
                    config.url +
                    "/" +
                    version +
                    (service != null ? "/" + service : "") +
                    (endpoint != null ? "/" + endpoint : ""),
                headers: {
                    "content-type": "application/json"
                },
                responseType: "json",
                data: formObj,
                validateStatus: function(status) {
                    return status < 500;
                }
            })
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
    /* add get, put and delete methods below here when needed. Follow the same structure used in the post method */
};

export default Request;
