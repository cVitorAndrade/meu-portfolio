import { Brand, Container, Header, Home, Nav, Presentation, ScroolDownButton } from "./styles";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { FaWhatsapp } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import { MdOutlineMouse } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import rocketAndPlanet from "../../assets/rocketandplanet.png";
import astronaut from "../../assets/astronaut.png";

export function Portfolio () {
    return (
        <Container>
            <Header>
                <Brand>
                    <h2>
                        &lt;&gt;carlos.&lt;/&gt;
                    </h2>
                </Brand>
                <Nav>
                    <a href="">Home</a>
                    <a href="">Projects</a>
                    <a href="">Tech</a>
                    <a href="">Contact</a>

                    <HiOutlineMenuAlt3 
                        size={30}
                    />
                </Nav>
            </Header>

            <Home>
                <div className="rocket-and-planet">
                    <img src={rocketAndPlanet} alt="" />
                </div>

                <Presentation>
                    <h3>HI, I`M</h3>

                    <h1>CARLOS VITOR</h1>

                    <p>Fullstack Software Engineer</p>

                    <a href="">Contact</a>

                    <ul>
                        <li>
                            <a href="">
                                <FaWhatsapp 
                                    size={24}
                                />
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <MdMailOutline 
                                    size={24}
                                />
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <FaInstagram 
                                    size={24}
                                />
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <FiGithub 
                                    size={24}
                                />
                            </a>
                        </li>

                    </ul>

                </Presentation>

                <div className="astronaut">
                    <img src={astronaut} alt="" />

                </div>
            </Home>

            <ScroolDownButton>
                <a href="">
                    <MdOutlineMouse 
                        size={32}
                    />

                    <MdKeyboardDoubleArrowDown
                        size={32}
                    />
                </a>
            </ScroolDownButton>

        </Container>
    )
}