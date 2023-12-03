import"./Direito.css"
import "./Perfis"
import"./Suggestion"
import Perfis from "./Perfis"
import Perfi2 from "../../assets/Me.jpg"
import Perfi3 from "../../assets/perfi_taina.jpg"
import Perfi4 from "../../assets/perfi_tata.jpg"
import Suggestion from "./Suggestion"
export default function ConteudoDireito(){
    return(
        <div className="ConteudoDireito">
           <Perfis
           imgPerfil={Perfi2}
           nome="Ingrid1608_"
           />
           <div className="outrassugges">
                <span className='outrassugges1'>Sugestões para você</span>
                <div className="separador"></div>
                <span className='outrassugges2'>Ver tudo</span>
           </div>
        
         <Suggestion
            imgSugest={Perfi3}
            nomeSugest="taina"
            seguido='Seguido(a) por loud_coringa'/>

          <Suggestion
            imgSugest={Perfi4}
            nomeSugest="tata"
            seguido='Seguido(a) por cocielo'
          />

            <div className="inf">
                <span><p>Sobre * Ajuda * Imprensa * API * Carreiras * Privacidade * Termos * Localizações * Idioma * Meta verified </p></span>
                <span><p>&copy; 2023 INSTAGRAM FROM META</p></span>
            </div>
        </div>
    )
}