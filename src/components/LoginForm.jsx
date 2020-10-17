import React, { useState, useEffect } from "react";
import { Form, Input, Button, Space, Checkbox } from "antd";
import {
	UserOutlined,
	LockOutlined,
	EyeInvisibleOutlined,
	EyeTwoTone
} from "@ant-design/icons";

import "./css/LoginForm.css";

const LoginForm = ({ rememberMe, handleLoginForm, formData }) => {
	const [screenSize, setScreenSize] = useState(null);
	const [optionsBelow, setOptionsBelow] = useState({
		size: 110,
		direction: undefined
	});

	useEffect(() => {
		if (window.innerWidth <= 425)
			setOptionsBelow({
				size: 10,
				direction: "vertical"
			});
		setScreenSize(window.innerWidth);
	}, []);

	let inputStyle = {
		borderRadius: "5px"
	};

	if (screenSize <= 425) {
		inputStyle.width = "80%";
		inputStyle.padding = "3%";
	} else {
		inputStyle.width = "60%";
		inputStyle.padding = "3%";
	}

	return (
		<Form className="login_form" name="login_form">
			<Form.Item
				name="user"
				rules={[{ required: true, message: "Debe colocar su usuario" }]}
			>
				<Input
					name="username"
					placeholder="Username or email"
					prefix={<UserOutlined />}
					value={formData.username}
					onChange={(e) => handleLoginForm(e)}
					style={inputStyle}
				/>
			</Form.Item>
			<Form.Item
				name="pass"
				rules={[{ required: true, message: "Debe colocar su clave" }]}
			>
				<Input.Password
					placeholder="Password"
					prefix={<LockOutlined />}
					value={formData.password}
					iconRender={(visible) =>
						visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
					}
					style={inputStyle}
				/>
			</Form.Item>

			<Space size={optionsBelow.size} direction={optionsBelow.direction}>
				<Checkbox onChange={rememberMe}>Remember me</Checkbox>
				{screenSize <= 425 ? (
					<Button type="primary" size="large" block>
						LOGIN
					</Button>
				) : (
					<Button type="primary" size="large">
						LOGIN
					</Button>
				)}
			</Space>

			<br />
			<br />

			<Space size={optionsBelow.size} direction={optionsBelow.direction}>
				<Button type="link" size="small">
					Register now
				</Button>
				<Button type="link" size="small" style={{ color: "gray" }}>
					Forgot password?
				</Button>
			</Space>
		</Form>
	);
};

export default LoginForm;
