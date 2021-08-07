import { Typography } from "antd";
import React from "react";
import FormSearch from "../FormSearch";
import listCTQuestion from "../../database/CT.json";
import listPLQuestion from "../../database/PL.json";
import TableQuestion from "../TableQuestion";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerStyled = styled.div`
	max-width: 1366px;
	width: 100%;
`;

function QuizPage({ quizType }) {
	const [listSearch, setListSearch] = React.useState([]);

	const handleOnChange = (e) => {
		const listQuestion = quizType === "CT" ? listCTQuestion : listPLQuestion;
		const searchStr = e.target.value.toLowerCase();
		const matchQuestions = listQuestion.filter((question) => {
			return question.question.toLowerCase().includes(searchStr);
		});

		setListSearch(matchQuestions);
	};

	return (
		<ContainerStyled>
			<Link to="/">Quay lại trang chủ</Link>
			<Typography.Title>
				Tra đáp án môn {quizType === "CT" ? "Chính Trị" : "Pháp Luật"}
			</Typography.Title>
			<div style={{ maxWidth: "50%" }}>
				<FormSearch handleOnChange={handleOnChange} />
			</div>
			<TableQuestion data={listSearch} />
		</ContainerStyled>
	);
}

export default QuizPage;
