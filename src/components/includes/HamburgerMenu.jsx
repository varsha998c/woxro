import React from "react";
import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa";

function HamburgerMenu({ isMenu, setMenu }) {
    return (
        <>
            {isMenu && (
                <Container>
                    <Section>
                        <Ul>
                            <Li>
                                <ImgContainer onClick={() => setMenu(!isMenu)}>
                                    <img
                                        src={
                                            require("../../assets/images/cancel.svg")
                                                .default
                                        }
                                        alt="close"
                                    />
                                </ImgContainer>
                            </Li>
                            <Li>
                                <a href="/">Home</a>
                            </Li>
                            <Li>
                                <a href="/">About us</a>
                            </Li>
                            <Li>
                                <a href="/">services</a>
                            </Li>
                            <Li>
                                <a href="/">technology </a>
                            </Li>
                            <Li>
                                <a href="/">careers</a>
                            </Li>
                            <Li>
                                <a href="/">blog</a>
                            </Li>
                            <Li>
                                <a href="/">our works</a>
                            </Li>
                            <Li>
                                <a href="/">contact us</a>
                            </Li>
                        </Ul>
                    </Section>
                </Container>
            )}
        </>
    );
}

export default HamburgerMenu;
const Container = styled.div`
    width: 200px;
    height: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    background-color: #000;
    overflow-x: hidden;
    transition: 0.5s;
    padding: 40px;
`;
const Section = styled.div``;
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
`;
const ImgContainer = styled.div`
    cursor: pointer;
    width: 20px;
    img {
        width: 100%;
        display: block;
    }
`;
const Li = styled.li`
    a {
        color: #adadad;
        font-size: 20px;
        cursor: pointer;
        text-transform: capitalize;
    }
`;
