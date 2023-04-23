import React from "react";
import styled from "styled-components";

function SpotLight() {
    return (
        <>
            <Container>
                <Video muted="true" autoPlay="true">
                    <source
                        src="https://woxro.com/public/assets/video/banner.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="https://woxro.com/public/assets/video/banner.mp4"
                        type="video/ogg"
                    />
                </Video>
                <Heading>
                    Kerala's Leading Web <br></br>Design Company
                </Heading>
                <Description>
                    Global Web Designing Company That Provides Full-cycle
                    Software Development Services, E-commerce & Mobile App
                    Development Services.
                </Description>
            </Container>
        </>
    );
}

export default SpotLight;
const Container = styled.div`
    width: 100%;
    max-height: 550px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    @media all and (max-width: 640px) {
        height: 55vh;
    }
    @media all and (max-width: 480px) {
        height: 50vh;
    }
`;
const Video = styled.video`
    width: 100%;
    opacity: 0.4;
    height: 100%;
    max-height: 550px;
    object-fit: cover;
`;
const Heading = styled.h1`
    font-size: 80px;
    font-weight: 800;
    color: #fff;
    text-align: center;
    position: absolute;
    top: 100px;
    @media all and (max-width: 980px) {
        font-size: 50px;
        top: 70px;
        font-weight: 700;
    }
    @media all and (max-width: 640px) {
        font-size: 45px;
        font-weight: 600x;
    }
    @media all and (max-width: 480px) {
        font-size: 30px;
        font-weight: 700;
    }
`;
const Description = styled.p`
    position: absolute;
    color: #fff;
    bottom: 100px;
    font-size: 24px;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    @media all and (max-width: 980px) {
        font-size: 19px;
    }
    @media all and (max-width: 768px) {
        bottom: 50px;
    }
    @media all and (max-width: 640px) {
        width: 87%;
        font-size: 20px;
    }
    @media all and (max-width: 480px) {
        font-size: 17px;
        width: 86%;
    }
    @media all and (max-width: 360px) {
        font-size: 17px;
        width: 82%;
    }
`;
