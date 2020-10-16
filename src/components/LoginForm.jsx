import React from "react";
import { Form, Input, Button, Space, Checkbox, message, Alert } from "antd";
import {
	UserOutlined,
	LockOutlined,
	EyeInvisibleOutlined,
	EyeTwoTone
} from "@ant-design/icons";

import "./css/LoginForm.css";

const LoginForm = ({ rememberMe }) => {
	return (
		<Form className="login_form" name="login_form">
			<Form.Item
				name="user"
				rules={[{ required: true, message: "Debe colocar su usuario" }]}
			>
				<Input
					placeholder="Username or email"
					prefix={<UserOutlined />}
					style={{ borderRadius: "5px", width: "60%", padding: "3%" }}
				/>
			</Form.Item>
			<Form.Item
				name="pass"
				rules={[{ required: true, message: "Debe colocar su clave" }]}
			>
				<Input.Password
					placeholder="Password"
					prefix={<LockOutlined />}
					iconRender={(visible) =>
						visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
					}
					style={{ borderRadius: "5px", width: "60%", padding: "3%" }}
				/>
			</Form.Item>

			<Space size={110}>
				<Checkbox onChange={rememberMe}>Remember me</Checkbox>
				<Button type="primary" size="large">
					LOGIN
				</Button>
			</Space>

			<Space size={108}>
				<Button type="link" size="small">
					Register now
				</Button>
				<Button type="link" size="small">
					Forgot password?
				</Button>
			</Space>
		</Form>
	);
};

export default LoginForm;
