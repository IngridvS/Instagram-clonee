export default function ItemMenu(props){
    return (
        <li>
            <span className="IconeEs">{props.icone}</span>
            <span className="TextoEs">{props.texto}</span>
        </li>
    )
}