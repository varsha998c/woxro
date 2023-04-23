import React from "react";
import { BsTelephone } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import styled from "styled-components";

function Contact() {
    return (
        <Container className="wrapper">
            <Section>
                <LeftSection>
                    {/* <ImgContainer>
                        <img
                            src={require("../../assets/images/woxroglobe.png")}
                            alt=""
                        />
                    </ImgContainer> */}
                    <Title>
                        We offer all kinds of IT services that ensure your
                        success
                    </Title>
                </LeftSection>
                <RightSection>
                    <Div>
                        <BsTelephone />
                        <span> contact us</span>
                    </Div>
                    <Talk>
                        <BiMessageRounded />
                        <span> Let's talk</span>
                    </Talk>
                </RightSection>
            </Section>
        </Container>
    );
}

export default Contact;
const Container = styled.div`
    background-color: #000;
    padding: 90px 0;
    @media all and (max-width: 980px) {
        padding: 50px 0;
    }
`;
const Section = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1080px) {
        width: 90%;
    }
    @media all and (max-width: 980px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    @media all and (max-width: 768px) {
        width: 85%;
    }

    @media all and (max-width: 640px) {
        width: 80%;
    }
    @media all and (max-width: 480px) {
        width: 78%;
    }
    @media all and (max-width: 360px) {
        width: 75%;
    }
`;
const LeftSection = styled.div`
    width: 55%;
    @media all and (max-width: 1080px) {
        width: 57%;
    }
    @media all and (max-width: 980px) {
        width: 90%;
        margin-bottom: 10px;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
    @media all and (max-width: 640px) {
        margin-bottom: 70px;
    }
`;
const ImgContainer = styled.div`
    width: 200px;
    img {
        display: block;
        width: 100%;
    }
`;
const Title = styled.h2`
    color: #fff;
    font-size: 35px;
    @media all and (max-width: 1280px) {
        font-size: 33px;
        width: 90%;
    }
    @media all and (max-width: 1080px) {
        font-size: 34px;
        width: 100%;
    }
`;
const RightSection = styled.div`
    width: 27%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1280px) {
        width: 31%;
    }
    @media all and (max-width: 1080px) {
        width: 38%;
    }
    @media all and (max-width: 980px) {
        width: 100%;
        justify-content: flex-end;
        flex-direction: row-reverse;
    }
    @media all and (max-width: 480px) {
    }
`;
const Div = styled.div`
    border: 1px solid #fff;
    width: 150px;
    height: 55px;
    border-radius: 6px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    text-transform: capitalize;
    cursor: pointer;
    font-weight: 400;
    span {
        margin-left: 6px;
    }
    &:hover {
        background-color: #fff;
        color: #000;
    }
    @media all and (max-width: 1080px) {
        width: 160px;
    }
    @media all and (max-width: 980px) {
        height: 70px;
        width: 130px;
        margin-left: 10px;
        font-size: 14px;
    }
    @media all and (max-width: 640px) {
        width: 120px;
        height: 60px;
    }
    @media all and (max-width: 480px) {
        margin-left: 30px;
        width: 125px;
    }
`;
const Talk = styled.div`
    border: 1px solid #fff;
    width: 150px;
    height: 55px;
    border-radius: 6px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    text-transform: capitalize;
    cursor: pointer;
    font-weight: 400;
    span {
        margin-left: 6px;
    }
    &:hover {
        background-color: #fff;
        color: #000;
    }
    @media all and (max-width: 1080px) {
        width: 160px;
    }
    @media all and (max-width: 980px) {
        height: 70px;
        width: 130px;
        font-size: 14px;
    }
    @media all and (max-width: 640px) {
        width: 120px;
        height: 60px;
    }
    @media all and (max-width: 480px) {
        width: 125px;
    }
`;
