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

    @media(max-width: 740px) {
        > a {
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
    
    margin-top: 2rem;

    display: flex;
    justify-content: center;

    > a {
        display: flex;
        flex-direction: column;

        gap: .5rem;

        color: ${ ({ theme }) => theme.COLORS.WHITE_900};

        cursor: pointer;
    }

`