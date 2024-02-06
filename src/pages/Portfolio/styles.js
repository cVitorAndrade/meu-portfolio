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

    @media(max-width: 830px) {
        > a,
        > div {
            display: none;
        }

        > svg {
            display: block;
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
    margin: 4rem auto 0;
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