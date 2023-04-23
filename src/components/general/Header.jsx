import React from "react";
import styled from "styled-components";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function Header() {
    return (
        <Container>
            <Section>
                <LeftSection>
                    <Hiring>Now Hiring : </Hiring> &nbsp; Looking for a job in
                    Full Stack Development?
                </LeftSection>
                <RightSection>
                    <Li>
                        <a href="">
                            <BsTelephone />
                            +91 487 2080 212
                        </a>
                    </Li>
                    <Li>
                        <span>
                            <CiLocationOn />
                            Leshore Business Park, Thrissur
                        </span>
                    </Li>
                </RightSection>
            </Section>
        </Container>
    );
}

export default Header;
const Container = styled.div`
    width: 100%;
    padding: 8px 0;
    background-color: #000;
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1280px) {
        width: 99%;
        margin: 0 auto;
    }
`;
const LeftSection = styled.div`
    width: 50%;
    color: #fff;
    display: flex;
`;
const Hiring = styled.div`
    font-weight: 800;
    @media all and (max-width: 1080px) {
        font-weight: 700;
        font-size: 14px;
    }
`;
const RightSection = styled.ul`
    width: 33%;
    display: flex;
    margin: 0;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1280px) {
        width: 36%;
    }
    @media all and (max-width: 1080px) {
        width: 40%;
    }
`;
const Li = styled.li`
    a {
        color: #fff;
        text-decoration: none;
        font-weight: 700;
        @media all and (max-width: 1080px) {
            font-size: 14px;
        }
    }
    color: #fff;
    list-style: none;
`;
