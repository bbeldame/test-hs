import styled from "styled-components";

export const Root = styled.header`
	width: 100%;
	height: 102px;
	margin-bottom: 37px;
	display: flex;
	background-color: #f7f7f7;
`;

export const Container = styled.div`
	max-width: 1216px;
	width: 100%;
	margin: 0 auto;
	padding: 0 22px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 428px) {
		flex-direction: row-reverse;
	}
`;

export const Logo = styled.img`
	width: 100px;
	height: 42px;
`;

export const Burger = styled.img`
	width: 24px;
	height: 24px;
	display: none;
	cursor: pointer;
	@media (max-width: 428px) {
		display: initial;
	}
`;

export const Nav = styled.nav`
	& > ul {
		list-style-type: none;
		display: flex;
	}
	& > ul > li:not(:first-child) {
		padding-left: 18px;
	}
	@media (max-width: 428px) {
		display: none;
	}
`;

export const NavItem = styled.a`
	color: #001d47;
	font-weight: ${({ isActive }) => isActive && "bold"};
	text-decoration: none;

	:hover {
		color: #0a63e3;
		text-decoration: ${({ isActive }) => !isActive && "underline"};
	}
`;
