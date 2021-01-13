import styled from "styled-components";

export const FooterText = styled.h2`
	position: absolute;
	bottom: 25px;
	left: 50%;
	transform: translate3d(-50%, 0, 0);
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
	color: #96a7b3;
	font-family: "Josefin Sans", sans-serif;
	font-weight: 800;

	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

export const TryText = styled.h2`
	position: absolute;
	top: 140px;
	left: 50%;
	transform: translate3d(-50%, 0, 0);
	font-family: "Quicksand", sans-serif;
	font-size: 44px;
	font-weight: 400;
	color: #96a7b3;
`;

export const TextRightTop = styled.a`
	position: absolute;
	text-decoration: none;
	top: 60px;
	color: #96a7b3;
	right: 60px;
	font-family: "Josefin Sans", sans-serif;
	font-weight: 400;
	font-size: 26px;
	&:hover {
		color: #4169e1;
	}
`;

export const TextLeftTop = styled.a`
	top: 60px;
	left: 60px;
	position: absolute;
	text-decoration: none;
	color: #96a7b3;
	font-family: "Josefin Sans", sans-serif;
	font-weight: 400;
	font-size: 26px;
	&:hover {
		color: #4169e1;
	}
`;

export const TextLeftBottom = styled.a`
	left: 60px;
	bottom: 60px;
	position: absolute;
	text-decoration: none;
	color: #96a7b3;
	font-family: "Josefin Sans", sans-serif;
	font-weight: 400;
	font-size: 26px;

	&:hover {
		color: #4169e1;
	}
`;
