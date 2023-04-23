import logo from "./logo.svg";
import "./App.css";
import Header from "./components/general/Header";
import styled from "styled-components";
import NavBar from "./components/general/NavBar";
import "./assets/Css/Style.css";
import SpotLight from "./components/screens/SpotLight";
import Service from "./components/screens/Service";
import Contact from "./components/screens/Contact";

function App() {
    return (
        <Container>
            <Section>
                <Header />
                <NavBar />
                <SpotLight />
                <Service />
                <Contact />
            </Section>
        </Container>
    );
}

export default App;
const Container = styled.div`
    background-color: #000;
    width: 100%;
`;
const Section = styled.div`
    width: 80%;
    margin: 0 auto;
    @media all and (max-width: 1280px) {
        width: 100%;
    }
`;
