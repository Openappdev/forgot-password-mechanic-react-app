import React from "react";
import ReactDOM from "react-dom";
import ResetPassword from "../../pages/ResetPassword";

it("renders ResetPassword without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ResetPassword />, div);
    ReactDOM.unmountComponentAtNode(div);
});
