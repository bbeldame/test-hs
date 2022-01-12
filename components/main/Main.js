import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_COUNTRIES } from "../../queries/countries";

import { randomizeArray } from "../../utils/arrayUtils";

import Button from "../button/Button";
import Card from "../card/Card";
import MainModal from "./MainModal";

import * as Styled from "./__styles__/Main.styles";

const Main = () => {
	const [countriesData, setCountriesData] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { data, loading } = useQuery(GET_COUNTRIES);

	useEffect(() => {
		if (!loading) {
			const random = randomizeArray(data.countries);
			setCountriesData(random.slice(0, 3));
		}
	}, [data, loading]);

	const renderCards = useMemo(() => {
		if (!loading && countriesData) {
			return countriesData.map((item) => {
				const { code } = item;
				return <Card key={code} {...item} />;
			});
		}
		return <p>Loading</p>;
	}, [countriesData, loading]);

	const handleHeadButtonClick = () => setIsModalOpen(true);
	const handleModalClose = () => setIsModalOpen(false);

	return (
		<Styled.Root>
			<Styled.Head>
				<Styled.Infos>
					<Styled.Title>Lorem Ipsum, Dolor Sit Amet.</Styled.Title>
					<Styled.Subtitle>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
						ex nunc, molestie.
					</Styled.Subtitle>
					<Button onClick={handleHeadButtonClick}>Call to action</Button>
				</Styled.Infos>
				<Styled.Image src="https://picsum.photos/500/600" alt="" />
			</Styled.Head>
			<Styled.CardsContainer>{renderCards}</Styled.CardsContainer>
			{isModalOpen && <MainModal onModalClose={handleModalClose} />}
		</Styled.Root>
	);
};

export default Main;
