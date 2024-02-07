import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    background-color: ${ ({ theme }) => theme.COLORS.BLACK_900};

    *.none {
        display: none;
    }
`

export const Header = styled.header`
    width: min(90%, 162rem);
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 0;

    font-family: 'Roboto Serif', serif;
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;

    font-weight: 700;
    font-size: 2.2rem;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;

    gap: 3rem;

    > a {
        font-size: 1.8rem;
        color: ${ ({ theme }) => theme.COLORS.WHITE_900};
        padding: 1rem 1.5rem;
        
        border-bottom: 1px solid transparent;

        &:hover {
            border-bottom: 1px solid ${ ({ theme }) => theme.COLORS.WHITE_900};
        }
    }

    > a:last-of-type {
        border: 1px solid ${ ({ theme }) => theme.COLORS.WHITE_900};
        border-radius: .8rem;

        transition: background .4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

        &:hover {
            cursor: pointer;

            color: ${ ({ theme }) => theme.COLORS.BLACK_900};
            background-color: ${ ({ theme }) => theme.COLORS.WHITE_900};
        }
    }

    > svg {
        display: none;
        cursor: pointer;
    }

    @media(max-width: 900px) {
        gap: 4rem;

        > a {
            display: none;
        }

        > svg {
            display: block;
        }
    }

    @media(max-width: 400px) {
        > div {
            display: none;
        }
    }
`;

export const Home = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        flex: 1;

        img {
            width: 100%;
        }
    }

    @media(max-width: 740px) {
        flex-direction: column;

        div {
            width: 100%;
        }
    }
`;

export const Presentation = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 2.5rem;

    text-align: center;

    > h3 {
        font-size: 3.2rem;
        font-family: 'Sugar Punch Demo', sans-serif;
    }

    > h1 {
        font-family: 'Organic Relief', sans-serif;
        font-size: clamp(4rem, 4rem + 2vw, 10rem);
    }

    > p {
        font-size: 3.2rem;
        font-family: 'Roboto Serif', serif;
    }

    > a {
        width: 17rem;
        padding: 1.5rem 0;
        border-radius: 1rem;
        
        background-color: ${ ({ theme }) => theme.COLORS.WHITE_900};

        transition: background .4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        
        color: ${ ({ theme }) => theme.COLORS.BLACK_900};
        font-weight: 600;
        font-size: 1.8rem;
        font-family: 'Inter', sans-serif;
        
        border: 1px solid transparent;

        &:hover {
            cursor: pointer;
            background-color: ${ ({ theme }) => theme.COLORS.BLACK_900};
            color: ${ ({ theme }) => theme.COLORS.WHITE_900};
            border: 1px solid ${ ({ theme }) => theme.COLORS.WHITE_900};
        }
    }

    ul {
        display: flex;
        gap: 2.5rem;

        li {
            transition: transform .2s ease-in-out;

            &:hover {
                transform: translateY(-1rem);
            }
        }

        svg {
            color: ${ ({ theme }) => theme.COLORS.WHITE_900};
        }
    }
`;

export const ScroolDownButton = styled.div`
    width: 100%;
    
    margin-top: 5rem;

    display: flex;
    justify-content: center;

    > a {
        display: flex;
        flex-direction: column;

        gap: .5rem;

        color: ${ ({ theme }) => theme.COLORS.WHITE_900};

        cursor: pointer;
    }

`;

export const Title = styled.h2`
    width: 22rem;
    margin: 20rem auto 2.8rem;

    font-family: 'Roboto Slab', serif;
    font-weight: 900;
    font-size: 4.8rem;

    border-bottom: 2px solid ${ ({ theme }) => theme.COLORS.WHITE_900};

    text-align: center;
`;

export const Project = styled.div`
    width: 100%;

    display: flex;

    > div {
        flex: 1;
    }

    @media(max-width: 800px) {
        flex-direction: column;
    }

`;

export const Info = styled.div`
    background: linear-gradient(to right, rgba(52, 98, 89, 0.65), #000000);
    padding: 4rem 0;
    display: flex;
    justify-content: center;


    > div {
        width: min(90%, 60rem);
    }

    @media(max-width: 800px) {
        text-align: center;
        background: none;
    }

`;

export const Status = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    > p {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 1.8rem;
        text-transform: uppercase;
        padding-left: 1rem;

        position: relative;

        &::before {
            content: "";
            background-color: ${ ({ theme }) => theme.COLORS.WHITE_900};
            width: 2px;
            height: 2rem;

            border-radius: .5rem;

            position: absolute;

            left: 0;
        }
    }
`;

export const ProjectTitle = styled.h2`
    font-family: 'Roboto Slab', serif;

    font-size: clamp(4rem, 6rem + 2vw, 10rem);
    `;

export const Description = styled.p`
    font-family: 'Roboto Slab', serif;

    font-size: 3.2rem;

`;

export const VisiteApp = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;

    margin: 3.4rem 0;

    > a {
        padding: 1.5rem 5rem;

        border-radius: 1.5rem;

        text-transform: uppercase;

        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
        font-size: 1.8rem;

        color: ${ ({ theme }) => theme.COLORS.WHITE_900};

        background-color: ${ ({ theme }) => theme.COLORS.GREEN_900};

        transition: filter .4s ease-in-out;

        &:hover {
            filter: brightness(1.3);
        }

    }

    @media( max-width: 800px) {
        justify-content: center;

        > a {
            padding: 1.5rem 3rem;
        }
        
    }
`;

export const Demonstration = styled.a`
    font-family: 'DM Sans', sans-serif;
    
    font-size: 2.2rem;
    font-weight: 700;

    color: ${ ({ theme }) => theme.COLORS.WHITE_900};

    text-decoration: underline;

    cursor: pointer;

`

export const Cover = styled.div`
    padding: 4rem 0;
    border-radius: 1.5rem;
    display: flex;


    > img {
        border-radius: inherit;
        width: 100%;
        flex: 1;
    }
`;

export const SliderControls = styled.div`
    width: 15rem;
    margin: 4rem auto 7rem;
    padding: 1rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    #pagination-element {
        transform: none;

        .swiper-pagination-bullet {
            background-color: ${ ({ theme }) => theme.COLORS.WHITE_900};
            
            width: 1.2rem;
            height: 1.2rem;
        }
    }
`;

export const PrevButton = styled.button`
    background: none;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    color: ${ ({ theme }) => theme.COLORS.WHITE_900};
    
    &:disabled {
        filter: brightness(0.5);
    }
`;

export const NextButton = styled.button`
    background: none;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    color: ${ ({ theme }) => theme.COLORS.WHITE_900};

    &:disabled {
        filter: brightness(0.5);
    }
`;

export const TechnologiesUsed = styled.div`
    width: 100%;    

    > p {
        font-family: 'Inter', sans-serif;
        font-size: 2.4rem;
        font-weight: 600;

        text-align: center;

        margin-bottom: 2.5rem;
    }

    @media(max-width: 1000px) {
        > p {
            margin-bottom: 6rem;
        }
    }
    
`;

export const PlatformList = styled.ul`
    display: flex;
    justify-content: space-evenly;

    @media(max-width: 1000px) {
        justify-content: center;
        flex-wrap: wrap;
        gap: 7.5rem;
        align-items: center;
    }
`;

export const Platform = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    
    gap: 1.5rem;

    max-width: 32rem;
    min-width: min(80%, 30rem);

    > a {
        display: flex;
        align-items: center;
        gap: .5rem;
        
        color: ${ ({ theme }) => theme.COLORS.WHITE_900};

        font-family: 'Inter', sans-serif;
        font-size: 2.8rem;
        font-weight: 600;

    }

    > p {
        font-family: 'Roboto', sans-serif;
        font-size: 2.4rem;

        align-self: flex-start;
    }

    @media(max-width: 1000px)  {
        justify-content: center;

        > p {
            align-self: center;
        }
    }
`;

export const TechnologiesList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: .6rem;
    
    list-style: disc;

    @media(max-width: 1000px)  {
        list-style: none;
        align-items: center;
    }

    @media(max-width: 670px) {
        list-style: disc;
        align-items: self-start;
    }

    @media(max-width: 350px) {
        list-style: none;
        align-items: center;
    }

`;

export const Technology = styled.li`
    font-family: 'Roboto', sans-serif;
    font-size: 2.4rem;
`;

export const CheckOthersRepositories = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.3rem;
    
    background-color: ${ ({ theme }) => theme.COLORS.WHITE_900};

    max-width: min(90%, 42.7rem);

    padding: 1.5rem 0;
    margin: 7rem auto 0;


    border-radius: 1rem;

    color: ${ ({ theme }) => theme.COLORS.BLACK_900};

    font-family: 'Inter', sans-serif;
    font-size: 2.4rem;
    font-weight: 600;

    transition: filter .3s ease-in-out;

    &:hover {
        cursor: pointer;
        filter: brightness(0.7);
    }

    @media(max-width: 350px) {
        font-size: 2rem;
    }
`;

export const Techs = styled.div`
    display: flex;

    margin-top: 17.5rem;

    > div:last-child {
        width: 100%;
        flex: 1;

        align-self: center;

        img {
            width: 100%;
        }
    }

    @media(max-width: 1100px) {

        background: linear-gradient(to left, rgba(74, 25, 112, .25), #000000);
        > div:last-child {
            display: none;
        }
    }

`;

export const TechsInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 9.5rem;

    @media(max-width: 1430px) {
        padding-left: 1rem;
    }

    @media(max-width: 740px) {
        width: 90%;
    }

`;

export const TechsHeader = styled.div`
    font-family: 'Roboto Slab', serif;
    max-width: 70rem;

    > h3 {
        font-weight: 900;
        font-size: 3.6rem;
    }

    > h2 {
        font-weight: 900;
        font-size: 22.5rem;

        line-height: 20rem;
    }

    > p {
        font-size: 2.4rem;
        font-weight: 700;
    }

    @media(max-width: 740px) {
        width: 90%;

        > h2 {
            font-size: 16rem;
        }
    }

    @media(max-width: 400px) {
        > h2 {
            font-size: 12rem;

            line-height: 12rem;
        }
    }
`;

export const StackLIst = styled.ul`
    display: flex;
    flex-direction: column;

    gap: 10rem;
    max-width: 70rem;

    @media(max-width: 740px) {
        width: 90%;
    }
`;

export const Stack = styled.div`
    display: flex;
    flex-direction: column;

    gap: 3.5rem;

`;

import tagBackground from "../../assets/tag.png"

export const Tag = styled.div`
    display: flex;

    > h4 {
        display: flex;
        align-items: center;

        color: ${ ({ theme }) => theme.COLORS.BLACK_900};
    
        font-family: 'Inter', sans-serif;
        font-size: 2.2rem;
        font-weight: 700;

        background-color: ${ ({ theme }) => theme.COLORS.   WHITE_900};

        height: 4rem;

        padding-left: 2rem;
        padding-right: .5rem;

        position: relative;

        &::after {
            content: "";
            position: absolute;

            width: 2.8rem;
            height: 4rem;

            right: -2.6rem;

            background-image: url(${ tagBackground });
        }
    }


`;

export const TechsList = styled.ul`
    display: flex;

    justify-content: space-between;
    row-gap: 3.5rem;
    flex-wrap: wrap;


    @media(max-width: 610px) {
        justify-content: center;
    }

`;

export const TechItem = styled.li`
    display: flex;

    align-items: center;

    max-width: 28rem;
    justify-content: space-between;


    font-family: 'Roboto Serif', serif;

    > h4 {
        display: flex;
        flex-direction: column;
        width: 16rem;

        gap: 1.3rem;

        font-size: 2.8rem;
        font-weight: 700;

        span {
            font-size: 2.2rem;
            font-weight: 400;
        }
    }

    @media(max-width: 610px) {
        max-width: 100%;
        gap: 2.5rem;
    }

    @media(max-width: 350px) {
        flex-direction: column;

        > h4 {
            text-align: center;
        }
    }

`;