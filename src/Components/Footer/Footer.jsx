import "./Footer.scss"



const Footer = () => {
    let today = new Date();
    let year = today.getFullYear();

    return (
        <footer>
            <p>&copy; {year} Sharik Galvis. Todos los derechos reservados.</p>
        </footer>
    )


}
export default Footer;