import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const CabeceraContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    img{
        width: 212px;
        
    }
`

const Cabecera = ({ filtro, setFiltro }) => {
    return (
        <CabeceraContainer>
            <img src="img/logo.png" alt="Logo-app" />
            <h1></h1>
            <CampoTexto setFiltro={setFiltro} />
        </CabeceraContainer>
    )
}

export default Cabecera
