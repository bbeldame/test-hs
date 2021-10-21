import styled from "styled-components";

export const Button = styled.button`
	width: 219px;
	height: 48px;
	border-radius: 5px;
	font-size: 16px;
	font-weight: 700;
	text-transform: uppercase;
	color: #fff;
	background-color: #0045aa;
	border: 0;
	@media (max-width: 428px) {
		width: 100%;
	}

	:hover {
		cursor: pointer;
		color: #0045aa;
		background-color: #fff;
		border: 1px solid #0045aa;
	}
`;
