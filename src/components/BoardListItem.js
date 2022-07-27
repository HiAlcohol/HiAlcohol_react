import heart from '../img/heart_fill.png'
import '../scss/board/BoardListItem.scss'

function BoardListItem(props) {
    let linkIs = ""
    if (props.link === 'board'){
        linkIs = "/board/" 
    }
    else if(props.link === 'suggestion') {
        console.log("ok")
        linkIs = "/suggestions/" 
        console.log("?? >>", linkIs)
    }
    
    const board = props.board;
    
    
    const listItem = []
    for (let i = 0; i < props.board.length; i++) {
        
        listItem.push(
            <div className="content">
                <a href={linkIs+ board[i].id}>
                    <div className="subject">
                        <p>{board[i].title}</p>
                        <div className="info">
                            <span>{board[i].userName}</span>
                            <span> | </span>
                            <span>{board[i].createDate}</span>
                        </div>
                    </div>
                </a>
                <div className="like">
                    <a href="#"><button id="img_btn" className="likebtn">
                        <input type="image" id="likeImg" src={heart} />
                    </button></a>
                    <div id="likes" disabled="disabled">{board[i].likedCnt}</div>
                </div>
            </div>
        )
    }
    return <div className='contentList'>{listItem}</div>
    
}

export default BoardListItem;