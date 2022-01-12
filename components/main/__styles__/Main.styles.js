import styled from "styled-components";

export const Root = styled.main`
	max-width: 1216px;
	margin: 0 auto;
	padding: 0 22px;
`;

export const Head = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 48px;
	@media (max-width: 428px) {
		flex-direction: column-reverse;
		margin-bottom: 32px;
	}
`;

export const Infos = styled.div`
	max-width: 592px;
`;

export const Title = styled.h1`
	font-size: 72px;
	font-weight: 600;
	color: #333347;
	margin-bottom: 16px;
	@media (max-width: 428px) {
		font-size: 46.7px;
	}
`;

export const Subtitle = styled.h2`
	font-size: 24px;
	font-weight: 400;
	color: #71717a;
	margin-bottom: 16px;
	@media (max-width: 428px) {
		font-size: 15.57px;
	}
`;

export const Image = styled.img`
	max-width: 592px;
	max-height: 427px;
	width: 100%;
	object-fit: cover;
	border-radius: 20px;
	margin-left: 32px;
	@media (max-width: 428px) {
		margin-left: 0;
		max-height: 277px;
	}
`;

export const CardsContainer = styled.section`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	@media (max-width: 428px) {
		flex-direction: column;
	}
`;
