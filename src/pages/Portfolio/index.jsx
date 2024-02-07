import { Brand, Container, Cover, Demonstration, Description, Header, Home, Info, Nav, Presentation, Project, ScroolDownButton, Status, ProjectTitle, VisiteApp, Title, SliderControls, PrevButton, NextButton, TechnologiesUsed, Platform, TechnologiesList, Technology, PlatformList, CheckOthersRepositories } from "./styles";

import { FlagSwitch } from "../../components/FlagSwitch";

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

import { RiShareBoxLine } from "react-icons/ri";

import { FaGithub } from "react-icons/fa";

import myUnsplash from "../../assets/my-unsplash.png";

import { Swiper, SwiperSlide } from 'swiper/react';

import rocketAndPlanet from "../../assets/rocketandplanet.png";
import astronaut from "../../assets/astronaut.png";
import { useTranslation } from "react-i18next";

export function Portfolio () {
    const [t] = useTranslation("global");

    return (
        <Container>
            <Header>
                <Brand>
                    <h2>
                        &lt;&gt;carlos.&lt;/&gt;
                    </h2>
                </Brand>
                <Nav>
                    <a href="">{t("Home")}</a>
                    <a href="">{t("Projects")}</a>
                    <a href="">{t("Tech")}</a>
                    <a href="">{t("Contact")}</a>
                    
                    <FlagSwitch />

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

                    <p>{t("Fullstack Software Engineer")}</p>

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
                {t("Projects")}
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
                                    <p>{t("FINISHED")}</p>
                                </Status>
                                <ProjectTitle>
                                    My Unsplash
                                </ProjectTitle>
                                <Description>
                                    {t("An image storage service, allowing users to manage and store selected sets of Unsplash images.")}
                                </Description>
                                <VisiteApp>
                                    <a href="">{t("SEE REPOSITORY")}</a>
                                    <LuFigma
                                        size={30}
                                    />
                                </VisiteApp>

                                <Demonstration href="">
                                    {t("See project live")}
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
                                    <p>{t("FINISHED")}</p>
                                </Status>
                                <ProjectTitle>
                                    My Unsplash
                                </ProjectTitle>
                                <Description>
                                    {t("An image storage service, allowing users to manage and store selected sets of Unsplash images.")}
                                </Description>
                                <VisiteApp>
                                    <a href="">{t("SEE REPOSITORY")}</a>
                                    <LuFigma
                                        size={30}
                                    />
                                </VisiteApp>

                                <Demonstration href="">
                                    {t("See project live")}
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
                                    <p>{t("FINISHED")}</p>
                                </Status>
                                <ProjectTitle>
                                    My Unsplash
                                </ProjectTitle>
                                <Description>
                                    {t("An image storage service, allowing users to manage and store selected sets of Unsplash images.")}
                                </Description>
                                <VisiteApp>
                                    <a href="">{t("SEE REPOSITORY")}</a>
                                    <LuFigma
                                        size={30}
                                    />
                                </VisiteApp>

                                <Demonstration href="">
                                    {t("See project live")}
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
                                    <p>{t("FINISHED")}</p>
                                </Status>
                                <ProjectTitle>
                                    My Unsplash
                                </ProjectTitle>
                                <Description>
                                    {t("An image storage service, allowing users to manage and store selected sets of Unsplash images.")}
                                </Description>
                                <VisiteApp>
                                    <a href="">{t("SEE REPOSITORY")}</a>
                                    <LuFigma
                                        size={30}
                                    />
                                </VisiteApp>

                                <Demonstration href="">
                                    {t("See project live")}
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

            <Swiper
                slidesPerView={1}

                navigation={{
                    prevEl: "#prev-button",
                    nextEl: "#next-button"
                }}
            >
                <SwiperSlide>
                    <TechnologiesUsed>
                        <p>{t("Technologies used to build the application services:")}</p>
                        
                        <PlatformList>
                            <Platform>
                                <a href="">
                                    Website
                                    <RiShareBoxLine
                                        size={15}
                                    />
                                </a>
                                <TechnologiesList>
                                    <Technology>
                                        HTML
                                    </Technology>
                                    <Technology>
                                        CSS
                                    </Technology>
                                    <Technology>
                                        Javascript (w/ Typescript)
                                    </Technology>
                                    <Technology>
                                        React
                                    </Technology>
                                    <Technology>
                                        NextJs
                                    </Technology>
                                    <Technology>
                                        Axios
                                    </Technology>
                                </TechnologiesList>
                            </Platform>
                            <Platform>
                                <a href="">
                                    API
                                    <RiShareBoxLine
                                        size={15}
                                    />
                                </a>
                                <TechnologiesList>
                                    <Technology>
                                        Express
                                    </Technology>
                                    <Technology>
                                        Prisma
                                    </Technology>
                                    <Technology>
                                        PostgreSQL
                                    </Technology>
                                    <Technology>
                                        Javascript (w/ Typescript)
                                    </Technology>
                                    <Technology>
                                        Node.js
                                    </Technology>
                                </TechnologiesList>
                            </Platform>
                            <Platform>
                                <a href="">
                                    Mobile APP
                                    <RiShareBoxLine
                                        size={15}
                                    />
                                </a>
                                <TechnologiesList>
                                    <Technology>
                                        React Native
                                    </Technology>
                                    <Technology>
                                        Expo
                                    </Technology>
                                    <Technology>
                                        React
                                    </Technology>
                                    <Technology>
                                        Javascript (w/ Typescript)
                                    </Technology>
                                    <Technology>
                                        Axios
                                    </Technology>
                                </TechnologiesList>

                                <p>And other +30 libraries</p>
                            </Platform>
                        </PlatformList>
                    </TechnologiesUsed>
                </SwiperSlide>

                <SwiperSlide>
                    <TechnologiesUsed>
                        <p>Technologies used to build the application services:</p>
                        
                        <PlatformList>
                            <Platform>
                                <a href="">
                                    Website
                                    <RiShareBoxLine
                                        size={15}
                                    />
                                </a>
                                <TechnologiesList>
                                    <Technology>
                                        HTML
                                    </Technology>
                                    <Technology>
                                        CSS
                                    </Technology>
                                    <Technology>
                                        Javascript (w/ Typescript)
                                    </Technology>
                                    <Technology>
                                        React
                                    </Technology>
                                    <Technology>
                                        NextJs
                                    </Technology>
                                    <Technology>
                                        Axios
                                    </Technology>
                                </TechnologiesList>
                            </Platform>
                            <Platform>
                                <a href="">
                                    API
                                    <RiShareBoxLine
                                        size={15}
                                    />
                                </a>
                                <TechnologiesList>
                                    <Technology>
                                        Express
                                    </Technology>
                                    <Technology>
                                        Prisma
                                    </Technology>
                                    <Technology>
                                        PostgreSQL
                                    </Technology>
                                    <Technology>
                                        Javascript (w/ Typescript)
                                    </Technology>
                                    <Technology>
                                        Node.js
                                    </Technology>
                                </TechnologiesList>
                            </Platform>
                            <Platform>
                                <a href="">
                                    Mobile APP
                                    <RiShareBoxLine
                                        size={15}
                                    />
                                </a>
                                <TechnologiesList>
                                    <Technology>
                                        React Native
                                    </Technology>
                                    <Technology>
                                        Expo
                                    </Technology>
                                    <Technology>
                                        React
                                    </Technology>
                                    <Technology>
                                        Javascript (w/ Typescript)
                                    </Technology>
                                    <Technology>
                                        Axios
                                    </Technology>
                                </TechnologiesList>

                                <p>And other +30 libraries</p>
                            </Platform>
                        </PlatformList>
                    </TechnologiesUsed>
                </SwiperSlide>

                <SwiperSlide>
                    <TechnologiesUsed>
                        <p>Technologies used to build the application services:</p>
                        
                        <PlatformList>
                            <Platform>
                                <a href="">
                                    Website
                                    <RiShareBoxLine
                                        size={15}
                                    />
                                </a>
                                <TechnologiesList>
                                    <Technology>
                                        HTML
                                    </Technology>
                                    <Technology>
                                        CSS
                                    </Technology>
                                    <Technology>
                                        Javascript (w/ Typescript)
                                    </Technology>
                                    <Technology>
                                        React
                                    </Technology>
                                    <Technology>
                                        NextJs
                                    </Technology>
                                    <Technology>
                                        Axios
                                    </Technology>
                                </TechnologiesList>
                            </Platform>
                            <Platform>
                                <a href="">
                                    API
                                    <RiShareBoxLine
                                        size={15}
                                    />
                                </a>
                                <TechnologiesList>
                                    <Technology>
                                        Express
                                    </Technology>
                                    <Technology>
                                        Prisma
                                    </Technology>
                                    <Technology>
                                        PostgreSQL
                                    </Technology>
                                    <Technology>
                                        Javascript (w/ Typescript)
                                    </Technology>
                                    <Technology>
                                        Node.js
                                    </Technology>
                                </TechnologiesList>
                            </Platform>
                            <Platform>
                                <a href="">
                                    Mobile APP
                                    <RiShareBoxLine
                                        size={15}
                                    />
                                </a>
                                <TechnologiesList>
                                    <Technology>
                                        React Native
                                    </Technology>
                                    <Technology>
                                        Expo
                                    </Technology>
                                    <Technology>
                                        React
                                    </Technology>
                                    <Technology>
                                        Javascript (w/ Typescript)
                                    </Technology>
                                    <Technology>
                                        Axios
                                    </Technology>
                                </TechnologiesList>

                                <p>And other +30 libraries</p>
                            </Platform>
                        </PlatformList>
                    </TechnologiesUsed>
                </SwiperSlide>

                <SwiperSlide>
                    <TechnologiesUsed>
                        <p>Technologies used to build the application services:</p>
                        
                        <PlatformList>
                            <Platform>
                                <a href="">
                                    Website
                                    <RiShareBoxLine
                                        size={15}
                                    />
                                </a>
                                <TechnologiesList>
                                    <Technology>
                                        HTML
                                    </Technology>
                                    <Technology>
                                        CSS
                                    </Technology>
                                    <Technology>
                                        Javascript (w/ Typescript)
                                    </Technology>
                                    <Technology>
                                        React
                                    </Technology>
                                    <Technology>
                                        NextJs
                                    </Technology>
                                    <Technology>
                                        Axios
                                    </Technology>
                                </TechnologiesList>
                            </Platform>
                            <Platform>
                                <a href="">
                                    API
                                    <RiShareBoxLine
                                        size={15}
                                    />
                                </a>
                                <TechnologiesList>
                                    <Technology>
                                        Express
                                    </Technology>
                                    <Technology>
                                        Prisma
                                    </Technology>
                                    <Technology>
                                        PostgreSQL
                                    </Technology>
                                    <Technology>
                                        Javascript (w/ Typescript)
                                    </Technology>
                                    <Technology>
                                        Node.js
                                    </Technology>
                                </TechnologiesList>
                            </Platform>
                            <Platform>
                                <a href="">
                                    Mobile APP
                                    <RiShareBoxLine
                                        size={15}
                                    />
                                </a>
                                <TechnologiesList>
                                    <Technology>
                                        React Native
                                    </Technology>
                                    <Technology>
                                        Expo
                                    </Technology>
                                    <Technology>
                                        React
                                    </Technology>
                                    <Technology>
                                        Javascript (w/ Typescript)
                                    </Technology>
                                    <Technology>
                                        Axios
                                    </Technology>
                                </TechnologiesList>

                                <p>And other +30 libraries</p>
                            </Platform>
                        </PlatformList>
                    </TechnologiesUsed>
                </SwiperSlide>

            </Swiper>

            <CheckOthersRepositories
                href="https://github.com/cvitorandrade"
            >
                <FaGithub
                    size={25}
                />

                {t("Check other repositories")}
            </CheckOthersRepositories>


        </Container>
    )
}