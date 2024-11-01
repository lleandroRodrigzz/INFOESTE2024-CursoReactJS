import { useState } from "react";
import { Burgir, Bar } from "./navbar.styles";

export const mobileNavbar = () => {
    const openLink = () => {
        const url = "https://www.unoeste.com/";
        window.open(url,'_blank');
    };

    const [btnState, setBtnState] = useState(false);

    const toggle = () => {
        setBtnState(!btnState);
        console.log(btnState);
        if(!btnState){
            return document.body.style.overflow = 'hidden';
        }
        return document.body.style.overflow = 'scroll';
    };

    return (
        <>
            <Burgir className={`burgir ${btnState ? "ativo" : ""} d-block d-lg-none`} onClick={toggle}>
                {/* Certifique-se de que o componente Bar esteja definido/importado corretamente */}
                <Bar style={{ top: 0 }} />
            </Burgir>
        </>
    );
}