import * as Styled from "./__styles__/Button.styles";

const Button = ({ children, onClick }) => {
	return <Styled.Button onClick={onClick}>{children}</Styled.Button>;
};

export default Button;
