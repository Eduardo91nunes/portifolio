import Foto from '../img/perfil.png';

import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
    return (
       <aside id="sidebar">
        
        <p className="title">Desenvolvedor Front-end jr</p>
        <SocialNetwork />
        <InformationConteiner />
        <a href="" className="btn">
            Download curriculo
        </a>

       </aside>
    );
};


export default Sidebar;