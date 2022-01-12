import styled from "styled-components";

export const Root = styled.div`
	box-sizing: border-box;
	background: rgba(0, 0, 0, 0.2);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	width: 100%;
	height: 100%;
	padding: 0 22px;
`;

export const Container = styled.div`
	box-sizing: border-box;
	max-width: 1216px;
	background-color: #fff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	border-radius: 15px;
	margin: 20px auto;
	padding: 24px;
	position: relative;
`;

export const CloseButton = styled.img`
	width: 24px;
	height: 24px;
	position: absolute;
	top: 24px;
	right: 24px;
	cursor: pointer;
`;

export const Title = styled.h1`
	font-weight: 600;
	font-size: 38px;
	line-height: 45px;
	color: #333347;
`;

export const Description = styled.p`
	font-size: 15.5676px;
	line-height: 19px;
	color: #71717a;
`;

export const FormField = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 14px;
	position: relative;

	& > label {
		font-size: 16px;
		line-height: 150%;
		letter-spacing: 0.01em;
		color: #6f7482;
	}

	& > input,
	& > textarea {
		background: #f8fafc;
		border-radius: 4px;
		border: 0;
		font-size: 16px;
		line-height: 150%;
		letter-spacing: 0.01em;
		color: #b8bcca;
	}

	& > input {
		padding: 12px;
	}

	& > textarea {
		box-sizing: border-box;
		font-family: "Inter", sans-serif;
		padding: 12px 12px 36px;
		height: 163px;
		resize: none;
	}
`;

export const Count = styled.p`
	font-size: 16px;
	line-height: 100%;
	color: #6f7482;
	margin: 0;
	position: absolute;
	bottom: 12px;
	right: 12px;
`;

export const Information = styled.p`
	font-size: 12px;
	line-height: 15px;
	color: #71717a;
`;
