import styled from "styled-components";

export const BackgroundDiv = styled.div`
	background: url("https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1969&q=80")
		repeat;
	border: 2px solid black;
	margin-bottom: 30px;
	height: 200px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

export const Transbox = styled.div`
	margin: 50px;
	background-color: #ffffff;
	border: 1px solid black;
	opacity: 0.8;
	height: 100px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 100px;
	padding: 20px;
	border-radius: 20px;
`;

export const TransboxText = styled.p`
	padding: 10px;
	margin: 5px;
	font-weight: bold;
	color: #22289a;
	font-size: 25px;
	font-weight: 800;
`;
