import Menu from "./menu";
import Button from "./button";
import "../components/header.scss"
function Header() {

    return (
        
            <section className="nav">

            <h1>LeoTrim</h1>
                <Menu />
                <div className="buttons">
            <Button text="Login" />
            <Button text="Sing up" />
                </div>
            </section>
      
    )
}

export default Header;
