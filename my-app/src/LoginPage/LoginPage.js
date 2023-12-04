/*
this is the login page. it is a simple button right now that immediately takes you to the home screen.
when i start working on  implementing user accounts, this will have more functionality
*/
import "./LoginPage.css";

function LoginPage({onLoginClick}) {
    return (
        <button type="button" className="login" onClick={onLoginClick}>Log in</button>
    );
}

export default LoginPage;