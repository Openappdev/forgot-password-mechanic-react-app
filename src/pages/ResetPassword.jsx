import React from "react";
import "../assets/styles/resetPassword.css";
import CustomInput from "../components/shared/CustomInput";
import Spinner from "../components/shared/Spinner";
import Button from "../components/shared/Button";
import NotificationMessage from "../components/shared/NotificationMessage";
import { staticData } from "../data/static";
import { colors } from "../utils/variables";
import UserService from "../services/UserService";
import { UserHelper } from "../helpers/UserHelper";

class ResetPassword extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			emailValue: ""
		};
	}

	handleEmailInputChange(event) {
		const value = event.target.value;
		this.setState({
			emailValue: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.spinner.show();
		const loginId = this.state.emailValue;
		const response = UserService.recoveryPassword(loginId);
		UserHelper.handleRecoveryPasswordResponse(response, this);
	}

	render() {
		const { emailValue } = this.state;
		return (
			<div>
				<NotificationMessage onRef={ref => (this.notification = ref)} />
				<div id="reset-password" className="container">
					<header>
						<h2>{staticData.resetPassword.header.title}</h2>
						<p className="subtitle">
							{staticData.resetPassword.header.subTitle}
						</p>
					</header>
					<div className="body">
						<form
							ref="form"
							onSubmit={event => this.handleSubmit(event)}
						>
							<CustomInput
								label={staticData.resetPassword.emailAddress}
								value={emailValue}
								name="email"
								handleChange={event =>
									this.handleEmailInputChange(event)
								}
							/>
							<Button
								label={
									staticData.resetPassword
										.resetPasswordButtonLabel
								}
								type={"submit"}
								textColor={colors.white}
								backgoundColor={colors.pink}
							/>
						</form>
						<Spinner onRef={ref => (this.spinner = ref)} />
					</div>
				</div>
			</div>
		);
	}
}

export default ResetPassword;
