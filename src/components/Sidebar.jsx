import Foto from '../img/perfil.png'

import '../styles/components/sidebar.sass';
import SocialNetwork from './SocialNetwork';

const Sidebar = () => {
    return (
       <aside id="sidebar">
        
        <p className="title">Desenvolvedor Front-end jr</p>
        <SocialNetwork />
        <p>Informações de contato</p>
        <a href="" className="btn">
            Download curriculo
        </a>

       </aside>
    )
}


export default Sidebar