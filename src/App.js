import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";
import QuizPage from "./components/QuizPage";

export const WrapperStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	height: 100%;
	background-color: #ecf0f1;
	padding: 40px;
`;

function App() {
	return (
		<WrapperStyled className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/chinh-tri">
						<QuizPage quizType="CT" />
					</Route>
					<Route path="/phap-luat">
						<QuizPage quizType="PL" />
					</Route>
				</Switch>
			</Router>
		</WrapperStyled>
	);
}

export default App;
