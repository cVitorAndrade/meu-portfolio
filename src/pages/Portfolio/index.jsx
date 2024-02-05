import { Brand, Container, Header, Nav } from "./styles";

export function Portfolio () {
    return (
        <Container>
            <Header>
                <Brand>
                    <h1>
                        &lt;&gt;carlos.&lt;/&gt;
                    </h1>
                </Brand>
                <Nav>
                    <a href="">Home</a>
                    <a href="">Projects</a>
                    <a href="">Tech</a>
                    <a href="">Contact</a>
                </Nav>
            </Header>
        </Container>
    )
}