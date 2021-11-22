import { Container } from './InitialMessage.style'
import { MdInfoOutline } from 'react-icons/md'

export default function InitialMessage() {
    return (
        <Container>
            <MdInfoOutline/>
            <div>
                <p> Pesquise o <strong>id</strong>, <strong>username</strong> ou <strong>name</strong> do usuário que procura.</p>
                <p>api usada: <a target='_blank' rel="noreferrer"  href='https://jsonplaceholder.typicode.com/users' >https://jsonplaceholder.typicode.com/users</a></p>
            </div>
        </Container>
    )
}