import React from "react";
import Landing from "../components/Home/Landing";
import styled from "styled-components";
import Faq from "../components/FAQ/FAQs";


const HomeWrapper = styled.main`
	min-height: 100vh;
	background-color: #09123d;
`;

const Home = () => {
	return (
		<HomeWrapper>
			<Landing />
				<Faq />
		</HomeWrapper>
	);
};

export default Home;
