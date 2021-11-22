import { Container } from "./User.style"
import { MdPerson, MdAlternateEmail, MdBusinessCenter, MdCall, MdPlace, MdLaptop  } from "react-icons/md";

export default function User({id, userName, name, company , phone, email, street, suite, city, zipcode, website}) {
    return (
        <Container>
            <div>
                <h2>{userName}</h2>
                <h3>[{id}]</h3>
            </div>
            <p><MdPerson/>Name: {name}</p>
            <p><MdBusinessCenter/>Company: {company}</p>
            <p><MdCall/>Phone: {phone}</p>
            <p><MdAlternateEmail/>Email: {email}</p>
            <p><MdPlace/>Address: {street}, {suite} - {city}, {zipcode}</p>
            <a href={"https://" + website} ><MdLaptop />website</a>
        </Container>
    )
}