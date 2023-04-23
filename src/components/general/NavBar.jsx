import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "../includes/HamburgerMenu";

function NavBar() {
    const [isMenu, setMenu] = useState(false);
    window.addEventListener("scroll", function () {
        var header = document.getElementById("content");
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    return (
        <>
            <HamburgerMenu isMenu={isMenu} setMenu={setMenu} />
            <Container id="content" className="sticky">
                <Section>
                    <Content>
                        <LogoSection>
                            <img
                                src={require("../../assets/images/woxrologo.png")}
                                alt="logo"
                            />
                        </LogoSection>
                        <MenuIcon onClick={() => setMenu(!isMenu)}>
                            <GiHamburgerMenu />
                        </MenuIcon>
                    </Content>
                    <NavSection>
                        <Items>
                            <a href="/">Home</a>
                        </Items>
                        <Items>
                            <a href="/">About</a>
                        </Items>
                        <Items>
                            <a href="/">Services</a>
                        </Items>
                        <Items>
                            {" "}
                            <a href="/">Technology</a>
                        </Items>
                        <Items>
                            {" "}
                            <a href="/">Careers</a>
                        </Items>
                        <Items>
                            {" "}
                            <a href="/">blogs</a>
                        </Items>
                        <Items>
                            {" "}
                            <a href="/">Our Works</a>
                        </Items>
                        <Items>
                            {" "}
                            <a href="/">Contact Us</a>
                        </Items>
                    </NavSection>
                </Section>
            </Container>
        </>
    );
}

export default NavBar;
const Container = styled.div`
    width: 100%;
    background-color: #fff;
`;
const Section = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;
const Content = styled.div`
    padding: 20px 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 980px) {
        padding: 20px 12px 35px 30px;
    }
    @media all and (max-width: 768px) {
        padding: 15px 12px 20px 20px;
    }
    @media all and (max-width: 640px) {
        padding: 10px 12px 15px 15px;
    }
`;
const LogoSection = styled.div`
    width: 160px;

    img {
        width: 100%;
        display: block;
    }
    @media all and (max-width: 640px) {
        width: 130px;
    }
`;
const MenuIcon = styled.div`
    font-size: 25px;
    display: none;
    @media all and (max-width: 980px) {
        display: block;
    }
`;
const NavSection = styled.ul`
    background-color: #161a1e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 60px;
    border-bottom: 1px solid #fff;
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const Items = styled.li`
    a {
        color: #fff;
        text-transform: capitalize;
        list-style: none;
        font-size: 18px;
        cursor: pointer;
    }
`;
