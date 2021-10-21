import * as Styled from "./__styles__/Card.styles";

const Card = ({ capital, emoji, name }) => {
	return (
		<Styled.Root>
			<Styled.Flag>{emoji}</Styled.Flag>
			<Styled.Title>{name}</Styled.Title>
			<Styled.Description>{`La capitale de ce pays est ${capital}`}</Styled.Description>
		</Styled.Root>
	);
};

export default Card;
