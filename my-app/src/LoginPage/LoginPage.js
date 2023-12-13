/*
this is the login page. it is a simple button right now that immediately takes you to the home screen.
when i start working on  implementing user accounts, this will have more functionality
*/
import "./LoginPage.css";

function LoginPage({onLoginClick}) {
    
    return (
        <div className="loginScreen">
            <button type="button" className="login" onClick={onLoginClick}> Play </button>
        </div>
    );
}

export default LoginPage;