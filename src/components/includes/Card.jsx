import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Card() {
    const [item, setItem] = useState([
        {
            id: 1,
            img: require("../../assets/images/webdesigning.png"),
            title: "web designing",
            paragraph:
                "We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.",
        },
        {
            id: 2,
            img: require("../../assets/images/webapplication.png"),
            title: "web application",
            paragraph:
                "We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications.",
        },
        {
            id: 3,
            img: require("../../assets/images/mobileappdevelopment.png"),
            title: "mobile app development",
            paragraph:
                "We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions.",
        },
        {
            id: 4,
            img: require("../../assets/images/ecommercedevelopment.png"),
            title: "ecommerce development",
            paragraph:
                "For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start.",
        },
        {
            id: 5,
            img: require("../../assets/images/digitalmarketing.png"),
            title: "digital marketing",
            paragraph:
                "We bring together expertise in brand marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility.",
        },
        {
            id: 6,
            img: require("../../assets/images/graphic.png"),
            title: "graphic designing",
            paragraph:
                "We build sustainable, brands by connecting your product and message with audiences that would want to get your and or services. We nurture ideas to transform ands through creativity focussed on growth. ",
        },
    ]);
    const [textColor] = useState([
        "#e7f0f7",
        "#f6f5f3",
        "#f6f5f3",
        "#fcf0e4",
        "#f5f6f8",
        "#effbfb",
    ]);
    return (
        <>
            {item.map((data, index) => (
                <Container id={data.id} background={textColor[index]} href="/">
                    <ImgContainer>
                        <img src={data.img} alt="image" />
                    </ImgContainer>
                    <Title>{data.title}</Title>
                    <Paragraph>{data.paragraph}</Paragraph>
                </Container>
            ))}
        </>
    );
}

export default Card;
const Container = styled.a`
    height: 240px;
    color: #000;
    cursor: pointer;
    background: ${(data) => data.background};
    border-radius: 5px;
    padding: 35px 25px 25px;
    @media all and (max-width: 1280px) {
        height: 200px;
    }
    @media all and (max-width: 1080px) {
        height: 230px;
    }
    @media all and (max-width: 980px) {
        height: 200px;
    }
`;
const ImgContainer = styled.div`
    width: 45px;
    img {
        width: 100%;
        display: block;
    }
`;
const Title = styled.h2`
    text-transform: capitalize;
    font-size: 20px;
    margin: 10px 0;
    color: #000000;
`;
const Paragraph = styled.p`
    font-size: 15px;
`;
