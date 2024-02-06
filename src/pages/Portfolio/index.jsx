import { Brand, Container, Cover, Demonstration, Description, Header, Home, Info, Nav, Presentation, Project, ScroolDownButton, Status, ProjectTitle, VisiteApp, Title, SliderControls, PrevButton, NextButton } from "./styles";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { FaWhatsapp } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import { MdOutlineMouse } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import { MdOutlineCheckCircleOutline } from "react-icons/md";

import { LuFigma } from "react-icons/lu";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import myUnsplash from "../../assets/my-unsplash.png";

import { Swiper, SwiperSlide } from 'swiper/react';

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

            <Title>
                Projects
            </Title>

            <Swiper
                slidesPerView={1}
                
                navigation={{
                    prevEl: "#prev-button",
                    nextEl: "#next-button",
                    clickable: true
                }}

                pagination={{
                    el: "#pagination-element",
                    clickable: true,
                    dynamicBullets: true
                }}
            >
                <SwiperSlide>
                    <Project>
                        <Info>
                            <div>
                                <Status>
                                    <MdOutlineCheckCircleOutline
                                        size={24}
                                    />
                                    <p>FINISHED</p>
                                </Status>
                                <ProjectTitle>
                                    My Unsplash
                                </ProjectTitle>
                                <Description>
                                    Um serviço para armazenar imagens, permitindo aos usuários gerenciar e armazenar conjuntos selecionados de imagens Unsplash.
                                </Description>
                                <VisiteApp>
                                    <a href="">VER REPOSITÓRIO</a>
                                    <LuFigma
                                        size={30}
                                    />
                                </VisiteApp>

                                <Demonstration href="">
                                    Ver projeto ao vivo
                                </Demonstration>
                            </div>
                        </Info>

                        <Cover>
                            <img src={myUnsplash} alt="" />
                        </Cover>
                    </Project>
                </SwiperSlide>

                <SwiperSlide>
                    <Project>
                        <Info>
                            <div>
                                <Status>
                                    <MdOutlineCheckCircleOutline
                                        size={24}
                                    />
                                    <p>FINISHED</p>
                                </Status>
                                <ProjectTitle>
                                    My Unsplash
                                </ProjectTitle>
                                <Description>
                                    Um serviço para armazenar imagens, permitindo aos usuários gerenciar e armazenar conjuntos selecionados de imagens Unsplash.
                                </Description>
                                <VisiteApp>
                                    <a href="">VER REPOSITÓRIO</a>
                                    <LuFigma
                                        size={30}
                                    />
                                </VisiteApp>

                                <Demonstration href="">
                                    Ver projeto ao vivo
                                </Demonstration>
                            </div>
                        </Info>

                        <Cover>
                            <img src={myUnsplash} alt="" />
                        </Cover>
                    </Project>
                </SwiperSlide>

                <SwiperSlide>
                    <Project>
                        <Info>
                            <div>
                                <Status>
                                    <MdOutlineCheckCircleOutline
                                        size={24}
                                    />
                                    <p>FINISHED</p>
                                </Status>
                                <ProjectTitle>
                                    My Unsplash
                                </ProjectTitle>
                                <Description>
                                    Um serviço para armazenar imagens, permitindo aos usuários gerenciar e armazenar conjuntos selecionados de imagens Unsplash.
                                </Description>
                                <VisiteApp>
                                    <a href="">VER REPOSITÓRIO</a>
                                    <LuFigma
                                        size={30}
                                    />
                                </VisiteApp>

                                <Demonstration href="">
                                    Ver projeto ao vivo
                                </Demonstration>
                            </div>
                        </Info>

                        <Cover>
                            <img src={myUnsplash} alt="" />
                        </Cover>
                    </Project>
                </SwiperSlide>

                <SwiperSlide>
                    <Project>
                        <Info>
                            <div>
                                <Status>
                                    <MdOutlineCheckCircleOutline
                                        size={24}
                                    />
                                    <p>FINISHED</p>
                                </Status>
                                <ProjectTitle>
                                    My Unsplash
                                </ProjectTitle>
                                <Description>
                                    Um serviço para armazenar imagens, permitindo aos usuários gerenciar e armazenar conjuntos selecionados de imagens Unsplash.
                                </Description>
                                <VisiteApp>
                                    <a href="">VER REPOSITÓRIO</a>
                                    <LuFigma
                                        size={30}
                                    />
                                </VisiteApp>

                                <Demonstration href="">
                                    Ver projeto ao vivo
                                </Demonstration>
                            </div>
                        </Info>

                        <Cover>
                            <img src={myUnsplash} alt="" />
                        </Cover>
                    </Project>
                </SwiperSlide>
                <SwiperSlide>
                    <Project>
                        <Info>
                            <div>
                                <Status>
                                    <MdOutlineCheckCircleOutline
                                        size={24}
                                    />
                                    <p>FINISHED</p>
                                </Status>
                                <ProjectTitle>
                                    My Unsplash
                                </ProjectTitle>
                                <Description>
                                    Um serviço para armazenar imagens, permitindo aos usuários gerenciar e armazenar conjuntos selecionados de imagens Unsplash.
                                </Description>
                                <VisiteApp>
                                    <a href="">VER REPOSITÓRIO</a>
                                    <LuFigma
                                        size={30}
                                    />
                                </VisiteApp>

                                <Demonstration href="">
                                    Ver projeto ao vivo
                                </Demonstration>
                            </div>
                        </Info>

                        <Cover>
                            <img src={myUnsplash} alt="" />
                        </Cover>
                    </Project>
                </SwiperSlide>

                <SwiperSlide>
                    <Project>
                        <Info>
                            <div>
                                <Status>
                                    <MdOutlineCheckCircleOutline
                                        size={24}
                                    />
                                    <p>FINISHED</p>
                                </Status>
                                <ProjectTitle>
                                    My Unsplash
                                </ProjectTitle>
                                <Description>
                                    Um serviço para armazenar imagens, permitindo aos usuários gerenciar e armazenar conjuntos selecionados de imagens Unsplash.
                                </Description>
                                <VisiteApp>
                                    <a href="">VER REPOSITÓRIO</a>
                                    <LuFigma
                                        size={30}
                                    />
                                </VisiteApp>

                                <Demonstration href="">
                                    Ver projeto ao vivo
                                </Demonstration>
                            </div>
                        </Info>

                        <Cover>
                            <img src={myUnsplash} alt="" />
                        </Cover>
                    </Project>
                </SwiperSlide>

            </Swiper>
            
            <SliderControls>
                <PrevButton id="prev-button">
                    <MdKeyboardArrowLeft
                        size={25}
                    />
                </PrevButton>

                <div id="pagination-element"></div>

                <NextButton id="next-button">
                    <MdOutlineKeyboardArrowRight
                        size={25}
                    />
                </NextButton>

            </SliderControls>

        </Container>
    )
}