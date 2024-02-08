import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    gap: 2.5rem;

    > li {
        transition: transform .2s ease-in-out;

        &:hover {
            transform: translateY(-1rem);
        }

        svg {
            color: ${ ({ theme }) => theme.COLORS.WHITE_900};
        }
    }

`;