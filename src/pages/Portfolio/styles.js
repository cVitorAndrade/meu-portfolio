import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${ ({ theme }) => theme.COLORS.BLACK_900};
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
        text-decoration: none;
        color: ${ ({ theme }) => theme.COLORS.WHITE_900};
        padding: 1rem 1.5rem;
        
        border-bottom: 1px solid transparent;

        &:hover {
            border-bottom: 1px solid ${ ({ theme }) => theme.COLORS.WHITE_900};
        }
    }

    > a:last-child {
        border: 1px solid ${ ({ theme }) => theme.COLORS.WHITE_900};
        border-radius: .8rem;

        transition: background .4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

        &:hover {
            cursor: pointer;

            color: ${ ({ theme }) => theme.COLORS.BLACK_900};
            background-color: ${ ({ theme }) => theme.COLORS.WHITE_900};
        }
    }
`;