import { Table } from "antd";

function TableQuestion({ data }) {
	const columns = [
		{
			title: "Câu hỏi",
			dataIndex: "question",
			key: "question",
			render: (text) => <a>{text}</a>,
		},
		{
			title: "Đáp án",
			dataIndex: "answer",
			key: "answer",
		},
	];

	return <Table columns={columns} dataSource={data} />;
}

export default TableQuestion;
