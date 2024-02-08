import { Container } from "./styles";

import { FaWhatsapp } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

export function SocialMedias () {
    return (
        <Container>
            <li>
                <a 
                    href="https://api.whatsapp.com/send?phone=5588981349193" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <FaWhatsapp 
                        size={24}
                    />
                </a>
            </li>

            <li>
                <a
                    href="mailto:dev.cvitor@gmail.com"
                    target="_blank" 
                    rel="noreferrer"
                >
                    <MdMailOutline 
                        size={24}
                    />
                </a>
            </li>

            <li>
                <a
                    href="https://github.com/cvitorandrade" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <FiGithub 
                        size={24}
                    />
                </a>
            </li>
        </Container>
    )
}