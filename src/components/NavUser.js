import './NavUser.css';

function NavUser() {
    // check local storage for user info
    const user = localStorage.getItem('user');
    // if user info is not found, return login button
    if (!user) {
        return (
            <div className="nav-user">
                <a href="/login">Login</a>
            </div>
        );
    }
    const userObj = JSON.parse(user);
    const username = userObj.username;
    const avatar = userObj.avatar;
    // if user info is found, return user info
    return (
        <div className="nav-user">
            <div className="nav-user-avatar">
                <image src={avatar} alt="avatar" />
            </div>
            <div className="nav-user-username">
                {username}
            </div>
        </div>
    );
}

export default NavUser;