import React, { useState } from "react";
import styled from "styled-components";
import Card from "../includes/Card";

function Service() {
    return (
        <Container>
            <Section>
                <SubTitle>SERVICES WE DELIVER</SubTitle>
                <Title>
                    Preparing for your success, we provide truly prominent IT
                    solutions.
                </Title>
                <Bottom>
                    <Card />
                </Bottom>
            </Section>
        </Container>
    );
}

export default Service;
const Container = styled.div`
    background-color: #fff;
    padding: 50px 0;
    @media all and (max-width: 640px) {
        padding: 10px 0 60px 10px;
    }
    @media all and (max-width: 480px) {
        padding: 54px 0;
    }
`;
const Section = styled.div`
    width: 95%;
    margin: 0 auto;
    @media all and (max-width: 980px) {
        width: 98%;
    }
`;
const SubTitle = styled.h4`
    text-align: center;
    text-transform: uppercase;
    color: #585858;
    font-size: 13px;
    letter-spacing: 0.3rem;
    margin-bottom: 40px;
`;
const Title = styled.h2`
    text-align: center;
    font-size: 35px;
    width: 80%;
    margin: 0 auto;
    @media all and (max-width: 980px) {
        font-size: 33px;
        width: 90%;
        margin: 0 auto;
    }
    @media all and (max-width: 768px) {
        font-size: 35px;
    }
    @media all and (max-width: 480px) {
        font-size: 26px;
        width: 87%;
    }
`;
const Bottom = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 100px;
    gap: 20px;
    @media all and (max-width: 980px) {
        grid-template-columns: 1fr;
    }
    @media all and (max-width: 768px) {
        margin-top: 70px;
    }
    @media all and (max-width: 640px) {
        margin-top: 15px;
    }
    @media all and (max-width: 360px) {
        gap: 10px;
    }
`;
