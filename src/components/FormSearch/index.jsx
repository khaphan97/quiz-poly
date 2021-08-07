import { SearchOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import React from "react";
function FormSearch({ handleOnChange }) {
	return (
		<div>
			<Form verticl name="basic" >
				<Form.Item
					name="searchStr"
					rules={[{ required: true, message: "Vui lòng nhập câu hỏi của bạn" }]}
				>
					<Input
						prefix={<SearchOutlined />}
						onChange={handleOnChange}
						placeholder="Nhập câu hỏi của bạn"
					/>
				</Form.Item>
			</Form>
		</div>
	);
}

export default FormSearch;
