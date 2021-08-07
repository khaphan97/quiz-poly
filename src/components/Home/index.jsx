import { Button, Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Title } = Typography;

function Home(props) {
	return (
		<div style={{ textAlign: "center" }}>
			<Title level={2}>TRA ĐÁP ÁN TRẮC NGHIỆM</Title>
			<Space>
				<Button type="primary">
					<Link to="/chinh-tri">Chính trị</Link>
				</Button>
				<Button type="danger">
					<Link to="/phap-luat">Pháp luật</Link>
				</Button>
			</Space>
		</div>
	);
}

export default Home;
