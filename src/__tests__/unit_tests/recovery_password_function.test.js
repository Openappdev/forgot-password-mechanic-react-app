import UserService from "../../services/UserService";
const successLoginId = "amin@gmail.com";
const failureLoginId = "123@gmail.com";

describe("#recoveryPassword() use cases", () => {
    it("should successfully recovery user " + successLoginId + " email", () => {
        expect.assertions(1);
        return UserService.recoveryPassword(successLoginId).then(res =>
            expect(res.success).toEqual(true)
        );
    });
    it("should not be able to recovery user " + failureLoginId, () => {
        expect.assertions(1);
        return UserService.recoveryPassword(failureLoginId).then(res =>
            expect(res.success).toEqual(false)
        );
    });
});
