import { staticData } from "../data/static";

function handleRecoveryPasswordResponse(response, thisPointer) {
    response
        .then(res => {
            thisPointer.spinner.hide();
            if (res.success) {
                thisPointer.notification.show("success", res.message);
            } else {
                thisPointer.notification.show("failure", res.message);
            }
        })
        .catch(err => {
            thisPointer.spinner.hide();
            thisPointer.notification.show(
                "failure",
                staticData.notification.unexpectedErrorMessage
            );
        });
}

export const UserHelper = {
    handleRecoveryPasswordResponse
};
