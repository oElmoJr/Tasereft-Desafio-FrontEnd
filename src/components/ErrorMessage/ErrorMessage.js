import { Container } from './ErrorMessage.style'
import { MdErrorOutline } from 'react-icons/md'

export default function InitialMessage() {
    return (
        <Container>
            <MdErrorOutline/>
            <p>Ops! <br/> Não encontrei nada aqui</p>
        </Container>
    )
}