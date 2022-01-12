import nav from "../../assets/navigation.json";

import * as Styled from "./__styles__/Header.styles";

const Header = () => {
	return (
		<Styled.Root>
			<Styled.Container>
				<Styled.Logo src="/images/logo.svg" alt="Logo HyperSpread" />
				<Styled.Burger src="/images/burger.svg" alt="Menu navigation" />
				<Styled.Nav>
					<ul>
						{nav.map((item, i) => (
							<li key={i}>
								<Styled.NavItem
									href={item.navigateTo}
									isActive={Boolean(i === 0)}
								>
									{item.name}
								</Styled.NavItem>
							</li>
						))}
					</ul>
				</Styled.Nav>
			</Styled.Container>
		</Styled.Root>
	);
};

export default Header;
