import Modal from "./Ui/Modal";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import { CurrentFormat } from "../util/formatting";
import ButtonComponent from "./Ui/ButtomComponent";
import UserProgressContext from "../Store/UserProgressContext";
import CartItem from "../Components/CartItem";
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);
  const Total = cartCtx.item.reduce(
    (totalprice, item) => totalprice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    progressCtx.hideCart();
  }

  function handlegotocheckout() {
    progressCtx.showCheckout();
  }
  return (
    <Modal className="cart" open={progressCtx.progress === "cart"} onClose={ progressCtx.progress === "cart" ?handleCloseCart:null}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.item.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={()=>cartCtx.addItem(item)} 
            onDecrease={()=>cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{CurrentFormat.format(Total)}</p>
      <p className="modal-actions">
        <ButtonComponent onClick={handleCloseCart} textOnly>
          Close
        </ButtonComponent>
        {cartCtx.item.length>0 && 
        <ButtonComponent onClick={handlegotocheckout}>
          Go To Check Out
        </ButtonComponent>
}
      </p>
    </Modal>
  );
}
