import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"


import "../components/informations.sass";


const InformationConteiner = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon"/>
                <div>
                    <h3>Telefone</h3>
                    <p>(38) 99864-6964</p>
                </div>
            </div>
            
            <div className="info-card">
                <AiOutlineMail id="email-icon"/>
                <div>
                    <h3>Email</h3>
                    <p>edununes1548@gmail.com</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillEnvironment id="pin-icon"/>
                <div>
                    <h3>Localização</h3>
                    <p>Unaí / Minas Gerais</p>
                </div>
            </div>

        </section>
    )
}