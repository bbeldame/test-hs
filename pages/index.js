import Head from 'next/head'
import { useQuery, gql } from "@apollo/client";
import styled from 'styled-components'

const Wrapper = styled.section`
`;

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
        </Head>
        <Wrapper>
          <div>COUCOU</div>
        </Wrapper>
      </div>
  )
}
