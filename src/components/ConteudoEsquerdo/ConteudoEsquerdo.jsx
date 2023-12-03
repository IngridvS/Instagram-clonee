import logoInsta from '../../assets/logo.png';
import "./Esquerdo.css";
import ItemMenu from "../ConteudoEsquerdo/ItemMenu"
import {GoHomeFill} from 'react-icons/go'
import {FiSearch} from 'react-icons/fi'
import {ImCompass2} from 'react-icons/im'
import {CgClapperBoard} from 'react-icons/cg'
import {BsSend} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsPlusSquare} from 'react-icons/bs'
import {HiMiniBars3} from 'react-icons/hi2'
import Me from "../../assets/Me.jpg"

export default function CouteudoEsquerdo(){
    return(
        <div className="ConteudoEsquerdo">
            <div className="logo"> <img src={logoInsta}  alt="" style={{width:"110px"}}/></div>
            <nav className='Menu_principal'>
                <ul>
                    <ItemMenu 
                    icone= {<GoHomeFill style={{height:"25px", width:"25px"}} />}
                    texto="Página inicial"/>

                    <ItemMenu 
                    icone={<FiSearch style={{height:"25px", width:"25px"}}/>} 
                    texto="Pesquisa"/>

                    <ItemMenu 
                    icone={<ImCompass2 style={{height:"25px", width:"25px"}}/>} 
                    texto="Explorar"/>

                    <ItemMenu
                    icone={<CgClapperBoard style={{height:"25px", width:"25px"}}/>} 
                    texto="Reels"/>

                    <ItemMenu
                    icone={<BsSend style={{height:"25px", width:"25px"}}/>} 
                    texto="Mensagens"/>

                    <ItemMenu 
                    icone={<AiOutlineHeart style={{height:"25px", width:"25px"}}/>} 
                    texto="Notificações"/>

                    <ItemMenu 
                    icone={<BsPlusSquare style={{height:"25px", width:"25px"}}/>} 
                    texto="Criar"/>

                    <li>
                        <span className='IconeEs'> <img src={Me} alt="" style={{height:'1.625rem', width:'1.625rem', borderRadius:'50%'}}/></span>
                        <span className='TextoEs'>Perfil</span>
                    </li>

                    <div className='ultimo-item'>
                        <ItemMenu
                        icone={<HiMiniBars3 style={{height:"25px", width:"22px"}} />}
                        texto="Mais"/>
                    </div>
                
                </ul>
            </nav>
        </div>
    )
}
