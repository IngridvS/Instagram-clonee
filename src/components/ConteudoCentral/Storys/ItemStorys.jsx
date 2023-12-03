export default function ItemStorys(props){
    return(
        <div className="ItemStorys">
            <div className="Border">
              <div className='Border2'>
                <img src={props.icon} alt="" style={{height: "55px", width: "55px"}} className='icon'/>
              </div>
            </div>
            <span className='NameStory'><p>{props.nameText}</p></span>
          </div>
    )
}