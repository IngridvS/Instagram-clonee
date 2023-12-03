export default function Perfis (props){
    return(
        <aside>
            <div className="bordTitulo">
            <img src={props.imgPerfil} alt="" className="icon iconD"/>
            </div>
            <div className="align">
                <span className="nomeTitulo">{props.nome}</span>
            </div>
            <div className="separador"></div>
            <span className="mudar">Mudar</span>
        </aside>
    )
}