import { 
    Brand,
    Container,
    Cover,
    Demonstration,
    Description,
    Header,
    Home,
    Info,
    Nav,
    Presentation,
    Project,
    ScroolDownButton,
    Status,
    ProjectTitle,
    VisiteApp,
    Title,
    SliderControls,
    PrevButton,
    NextButton,
    TechnologiesUsed,
    Platform,
    TechnologiesList,
    Technology,
    PlatformList,
    CheckOthersRepositories,
    Techs, 
    TechsInfo,
    TechsHeader,
    Stack,
    TechsList,
    TechItem,
    StackLIst,
    Tag,
    Contact,
    Input,
    Footer
} from "./styles";

import { FlagSwitch } from "../../components/FlagSwitch";
import { SocialMedias } from "../../components/SocialMedias";

import { IoClose } from "react-icons/io5";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { MdOutlineMouse } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import { MdOutlineCheckCircleOutline } from "react-icons/md";

import { LuFigma } from "react-icons/lu";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { RiShareBoxLine } from "react-icons/ri";

import { FaGithub } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

import rocketAndPlanet from "../../assets/rocketandplanet.png";
import astronaut from "../../assets/astronaut.png";

import purpleAstronaut from "../../assets/purple-astronaut.png";

import planet from "../../assets/planet.png";
import rocket from "../../assets/rocket1.png";

import { useTranslation } from "react-i18next";
import { useState } from "react";

import { projects, stacks } from "../../utils/data";

import emailjs from "@emailjs/browser";

export function Portfolio () {
    const [t] = useTranslation("global");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [sidebarIsOpened, setSidebarIsOpened] = useState(false);

    function sendEmail (e) {
        e.preventDefault();

        if ( !name.trim() || !email.trim() || !message.trim() ) {
            alert(t("All fields must be filled in"));
            return;
        }

        const templateParams = {
            from_name: name,
            email,
            message
        }

        emailjs.send("service_hhvobqn", "template_9jnt4yk", templateParams, "nvBRhKqV24j_idxLa")
        .then(() => {
            alert(t("Email sent successfully, I will contact you soon"));
            clearInputs();

        })
        .catch(error => {
            alert(t("Error sending email"));
            console.log(error);
        })
    }

    function clearInputs () {
        setEmail("");
        setName("");
        setMessage("");
    }

    return (
        <Container>
            <Header className={sidebarIsOpened ? "opened" : ""}>
                <Brand>
                    <h2>
                        &lt;&gt;carlos.&lt;/&gt;
                    </h2>

                    <IoClose 
                        size={30}

                        onClick={ () => setSidebarIsOpened(false) }
                    />
                    
                </Brand>
                <Nav>

                    <a 
                        href="#home"
                        onClick={() => setSidebarIsOpened(false) }
                    >
                        {t("Home")}
                    </a>

                    <a 
                        href="#projects"
                        onClick={() => setSidebarIsOpened(false) }
                    >
                        {t("Projects")}
                    </a>

                    <a 
                        href="#tech"
                        onClick={() => setSidebarIsOpened(false) }
                    >
                        {t("Tech")}
                    </a>

                    <a 
                        href="#contact"
                        onClick={() => setSidebarIsOpened(false) }
                    >
                        {t("Contact")}
                    </a>
                    
                    <FlagSwitch />

                    <HiOutlineMenuAlt3 
                        size={30}
                        onClick={ () => setSidebarIsOpened(true) }
                    />

                </Nav>

                <SocialMedias />


            </Header>

            <Home>
                <div className="rocket-and-planet">
                    <img src={rocketAndPlanet} alt="" />
                </div>

                <Presentation id="home">
                    <h3>HI, I`M</h3>

                    <h1>CARLOS VITOR</h1>

                    <p>{t("Fullstack Software Engineer")}</p>

                    <a href="#contact">{t("Contact")}</a>

                    <SocialMedias />

                </Presentation>

                <div className="astronaut">
                    <img src={astronaut} alt="" />

                </div>
            </Home>

            <ScroolDownButton>
                <div>
                    <MdOutlineMouse 
                        size={32}
                    />

                    <MdKeyboardDoubleArrowDown
                        size={32}
                    />
                </div>
            </ScroolDownButton>

            <Title id="projects">
                {t("Projects")}
            </Title>

            <Swiper
                slidesPerView={1}
                allowTouchMove={false}

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

                {
                    projects && 
                    projects.map( project => (
                        <SwiperSlide key={project.id}>
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
                                            {project.name}
                                        </ProjectTitle>

                                        <Description>
                                            {t(project.description)}
                                        </Description>
                                        <VisiteApp>
                                            <a 
                                                href={project.repository}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {t("SEE REPOSITORY")}
                                            </a>

                                            {
                                                project.design &&
                                                <a
                                                    href={project.design}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <LuFigma
                                                        size={30}
                                                    />
                                                </a>
                                            }
                                        </VisiteApp>

                                        {
                                            project.deploy &&

                                            <Demonstration
                                                href={project.deploy}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {t("See project live")}
                                            </Demonstration>
                                        }

                                    </div>

                                </Info>

                                <Cover>
                                    <img src={project.image} alt="" />
                                </Cover>
                            </Project>

                        </SwiperSlide>
                    ))
                }

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
                allowTouchMove={false}

                navigation={{
                    prevEl: "#prev-button",
                    nextEl: "#next-button"
                }}
            >                

                {
                    projects && 
                    projects.map( project => (
                        <SwiperSlide
                            key={project.id}
                        >
                        <TechnologiesUsed>
                            <p>{t("Technologies used to build the application services:")}</p>
                            <PlatformList>
                                {
                                    project.platforms &&
                                    project.platforms.map( platform => (
                                        <Platform
                                            key={platform.id}
                                        >
                                            <a
                                                href={platform.repository}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {platform.name}
                                                <RiShareBoxLine
                                                    size={15}
                                                />
                                            </a>
                                            <TechnologiesList>
                                                {
                                                    platform.technologies &&
                                                    platform.technologies.map( technology => (
                                                        <Technology
                                                            key={technology.id}
                                                        >
                                                            {technology.name}
                                                        </Technology>
                                                    ))
                                                }
                                            </TechnologiesList>
                                        </Platform>
                                    ))
                                }
                            </PlatformList>
                        </TechnologiesUsed>

                        </SwiperSlide>
                    ))
                }

            </Swiper>

            <CheckOthersRepositories
                href="https://github.com/cvitorandrade"
            >
                <FaGithub
                    size={25}
                />

                {t("Check other repositories")}
            </CheckOthersRepositories>

            <Techs id="tech">
                <TechsInfo>
                    <TechsHeader>
                        <h3>{t("and finally,")}</h3>
                        <h2>{t("tech.")}</h2>
                        <p>{t("In my personal journey, I've developed skills and have already worked with some technologies, and here they are:")}</p>
                    </TechsHeader>

                    <StackLIst>

                        {
                            stacks && 
                            stacks.map(stack => (
                                <Stack
                                    key={stack.id}
                                >
                                    <Tag>
                                        <h4>
                                            {stack.name}
                                        </h4>
                                    </Tag>

                                    <TechsList>
                                        {
                                            stack.techs &&
                                            stack.techs.map(tech => (
                                                <TechItem
                                                    key={tech.id}
                                                >
                                                    <img src={tech.image} alt="" />
                                                    <h4>
                                                        {tech.name}
                                                        {
                                                            tech.experience && 
                                                            <span>
                                                                {tech.experience} {t("year experience")}
                                                            </span>
                                                        }
                                                    </h4>
                                                </TechItem>
                                            ))
                                        }
                                    </TechsList>

                                </Stack>
                            ))
                        }
                    </StackLIst>

                </TechsInfo>

                <div>
                    <img src={purpleAstronaut} alt="" />
                </div>

            </Techs>

            <Contact id="contact">
                <h2>{t("WANT TO HAVE AN AWESOME PROJECT DONE?")}</h2>
                <div className="planet">
                    <img src={planet} alt="" />
                </div>
                <div className="rocket">
                    <img src={rocket} alt="" />
                </div>


                <form
                    onSubmit={sendEmail}
                >
                    <Input>
                        <input
                            type="email" 
                            placeholder={t("Enter your email")}
                            onChange={ e => setEmail(e.target.value) }
                            value={email}
                        />
                    </Input>

                    <Input>
                        <input 
                            type="text" 
                            placeholder={t("Enter your name")}
                            onChange={ e => setName(e.target.value) }
                            value={name}
                        />
                    </Input>

                    <textarea 
                        placeholder={t("Type a message!")}
                        onChange={ e => setMessage(e.target.value) }
                        value={message}
                    >
                    </textarea>

                    <button>
                        {t("Contact")}
                    </button>
                    
                </form>
            </Contact>

            <Footer>
                <p>{t("Developed by Carlos Vitor")}</p>

                <SocialMedias />

            </Footer>


        </Container>
    )
}