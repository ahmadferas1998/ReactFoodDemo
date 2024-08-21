import logoimg from "../assets/logo.jpg";
import ButtomComponent from "../Components/Ui/ButtomComponent";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);
  const total = cartCtx.item.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function handleShowCart(){
    progressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoimg}></img>
        <h1>React Food</h1>
      </div>
      <nav>
        <ButtomComponent onClick={handleShowCart} textOnly={true}>Cart({total})</ButtomComponent>
      </nav>
    </header>
  );
}
