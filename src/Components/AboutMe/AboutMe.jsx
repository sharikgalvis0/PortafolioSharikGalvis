import "./AboutMe.scss"
import AboutUSImg from "../../assets/img/Sharik_Galvis.jpg"


const AboutMe = () => {
    return (

        <section className="AboutMe" id="AboutMe">
            <div className="card">
                <img src={AboutUSImg} alt="" />
            </div>

            <div className="aboutMe-info">
                <h2><span class="material-symbols-outlined">person_pin</span> Sobre mí</h2>
                <p> Me llamo Sharik Galvis, soy una desarrolladora web apasionada por crear
                        excelentes experiencias digitales. Mi enfoque principal se centra en las bases de datos y el
                        desarrollo front-end, donde combino mi creatividad con habilidades técnicas para construir
                        productos digitales impresionantes.

                        Como desarrolladora, escucho atentamente las necesidades de los usuarios y los objetivos del
                        proyecto, lo que me permite crear soluciones que no solo sean funcionales, sino también
                        atractivas y fáciles de usar. Mi compromiso con la responsabilidad y la mejora continua me
                        impulsa a perfeccionar mis habilidades constantemente, manteniéndome al día con las últimas
                        tendencias y tecnologías en el mundo del desarrollo web. Estoy emocionada por la oportunidad de
                        contribuir a proyectos innovadores y desafiantes que me permitan aplicar y expandir mis
                        habilidades como desarrolladora web. ¡Espero poder colaborar contigo para llevar tus ideas al
                        siguiente nivel digital!
                </p>
                <p>¡Gracias por visitar mi portafolio!</p>
            </div>

        </section>
    )
}
export default AboutMe