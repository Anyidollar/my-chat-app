import "./detail.css";


const Detail = ()=>{
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <p>Ifeanyi</p>
                <p>God is faithful all the time...</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat settings..</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItems">
                            <div className="photoDetail">
                            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYXV0aWZ1bCUyMGhvdXNlfGVufDB8fHx8MTY0MzYwNzA2MQ&ixlib=rb-1.2.1&q=80&w=1080"alt="" />
                            <span>photo_24..png</span>
                            </div>
                            <img src="./download.png" alt="" />
                        </div>
                        <div className="photoItems">
                            <div className="photoDetail">
                            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYXV0aWZ1bCUyMGhvdXNlfGVufDB8fHx8MTY0MzYwNzA2MQ&ixlib=rb-1.2.1&q=80&w=1080"alt="" />
                            <span>photo_24..png</span>
                            </div>
                            <img src="./download.png" alt="" />
                        </div>
                        <div className="photoItems">
                            <div className="photoDetail">
                            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYXV0aWZ1bCUyMGhvdXNlfGVufDB8fHx8MTY0MzYwNzA2MQ&ixlib=rb-1.2.1&q=80&w=1080"alt="" />
                            <span>photo_24..png</span>
                            </div>
                            <img src="./download.png" alt="" />
                        </div>
                        <div className="photoItems">
                            <div className="photoDetail">
                            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYXV0aWZ1bCUyMGhvdXNlfGVufDB8fHx8MTY0MzYwNzA2MQ&ixlib=rb-1.2.1&q=80&w=1080"alt="" />
                            <span>photo_24..png</span>
                            </div>
                            <img src="./download.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
            </div>
        </div>
    )
}
export default Detail