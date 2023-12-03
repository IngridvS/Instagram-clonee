import "./Central.css"
import ItemStorys from "./Storys/ItemStorys"
import Usuario1 from '../../assets/Me.jpg'
import Usuario2 from "../../assets/Instituto....png"
import Usuario3 from "../../assets/Jully....jpg"
import Usuario4 from "../../assets/Igao.jpg"

import Usuario6 from "../../assets/Cocielo.jpg"
import Post from "./Post/Post"
import Post2 from "../../assets/imagem_postumbu.png"
import Post3 from "../../assets/imagem_proa.webp"
import Post4 from "../../assets/imagem_tata_cocielo.webp"
import Usuario7 from "../../assets/Perfil_Umbu.jpg"
import Usuario8 from"../../assets/loud_coringa.png"

export default function ConteudoCentral(){
    return (
        <div className="ConteudoCentral">
            <div className="Stories">
                <ItemStorys nameText="ingrid1608_" icon={Usuario1}/>
                <ItemStorys nameText="instituto" icon={Usuario2}/>
                <ItemStorys nameText="jullymolina" icon={Usuario3}/>
                <ItemStorys nameText="igao" icon={Usuario4}/>
                <ItemStorys nameText="cocielo" icon={Usuario6}/>
                <ItemStorys nameText="sejaumbu" icon={Usuario7}/>
                <ItemStorys nameText="loud_coringa" icon={Usuario8}/>
              
            </div>

            <div className="Timeline">
                <Post
                icon={Usuario2}
                nameUser="instituto.proa"
                time="Há 3 dias"
                post={Post3}
                miniIcon={Usuario1}
                NameLike='Ingrid1608_'
                NamePerfil='instituto.proa'
                Descricao ="A Plataforma PROA é a chave para abrir as portas do mercado de trabalho!
                

                💼 Para você que está buscando o primeiro emprego, é a oportunidade perfeita!
                
                🧑‍💻 Sobre o curso
                • 100% on-line e gratuito
                • Duração de 3 meses..."
                quantComent="20"
                NamePerfilComent="Ingrid1608_"
                coment="💙💙💙💙"
                NamePerfilComent2="anaarnoni"
                coment2="Amoooooo"
                />
                {/* <<<<<<=========>>>>>>> */}

                <Post
                icon={Usuario7}
                nameUser="sejaumbu"
                time="11 de outubro"
                post={Post2}
                miniIcon={Usuario1}
                NameLike='Ingrid1608_'
                NamePerfil='sejaumbu'
                Descricao ="Bem-vindo ao futuro da jardinagem! 🌱💚🍃

                Somos a plataforma que valoriza o trabalho dos jardineiros e conecta apaixonados por jardins a serviços personalizados de alta qualidade. 🌿🪴🌳..."
                quantComent="20"
                NamePerfilComent="Ingrid1608_"
                coment="Um projeto pensado com carinho 💚"
                NamePerfilComent2="claraxsz_"
                coment2="Ótimo projeto, parabéns!💚"
                />
                {/* <<<<<<=========>>>>>>> */}
                
                
                
                <Post
                icon={Usuario6}
                nameUser="Cocielo"
                time="21 de maio"
                post={Post4}
                miniIcon={Usuario1}
                NameLike='Ingrid1608_'
                NamePerfil='Cocielo'
                Descricao =""
                quantComent="39,8 mil"
                NamePerfilComent="Tata"
                coment="Nossa família agora tá completa 🥹❤️ seja bem vindo Caio 😍"
                NamePerfilComent2="Igao"
                coment2="Tô explodindo de felicidade, obrigado por isso, amo mt vcs ❤️❤️❤️❤️"
                />
                {/* <<<<<<=========>>>>>>> */}
                
            </div>
            
            
        </div>
    )
}