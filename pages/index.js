import Head from "next/head";

import Header from "../components/header/Header";
import Main from "../components/main/Main";

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Test technique</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Header />
			<Main />
		</div>
	);
}
