import styled from "styled-components";

export const Root = styled.article`
	box-sizing: border-box;
	width: 384px;
	height: 200px;
	margin: 0 0 24px;
	padding: 24px 30px;
	filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
	border-radius: 20px;
	background-color: #fff;

	:hover {
		filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.2));
	}
`;

export const Flag = styled.p`
	font-weight: 600;
	font-size: 54px;
	line-height: 63px;
	margin: 0;
`;

export const Title = styled.h3`
	font-weight: 600;
	font-size: 24px;
	line-height: 28px;
	margin: 16px 0 0;
	color: #333347;
`;

export const Description = styled.p`
	font-size: 16px;
	line-height: 19px;
	color: #71717a;
`;
