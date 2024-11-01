import { Image, Nav,Wrapper } from "./navbar.styles";
import logoFipp from "../../assets/images/logo-nova.png"

export const Navbar = () => {
    return(
        <Wrapper>
            <Nav>
                <Image src={logoFipp} alt="logo fipp"/>
            </Nav>
        </Wrapper>
    );
}