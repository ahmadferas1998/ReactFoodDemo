import Modal from "./Ui/Modal";
import CartContext from "../Store/CartContext";
import { useContext } from "react";
import { CurrentFormat } from "../util/formatting";
import Input from "../Components/Ui/Input";
import ButtonComponent from "./Ui/ButtomComponent";
import UserProgressContext from "../Store/UserProgressContext";

// const requestConfig ={
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     },
// }

export default function Checkout() {
  const cartCtx = useContext(useContext);
  const progressCtx = useContext(UserProgressContext);
  const Total = cartCtx?.item.reduce(
    (totalprice, item) => totalprice + item.quantity * item.price,
    0
  );
  function handleClose() {
    progressCtx.hideCheckout();
  }
  // const ={data:LoadedMeals,isLoading,error}=UseHttp("http://localhost:3000/meals",requestConfig,[])
  return (
    <Modal
      open={progressCtx.progress == "checkout"}
      onClose={progressCtx.progress == "checkout" ? handleClose : null}
    >
      <form>
        <h2>CheckOut</h2>
        <p>Total Ammount: {CurrentFormat.format(Total)}</p>
        <Input lable="Full Name" type="text" id="full-name" />
        <Input lable="E-mail Addris" type="email" id="email" />
        <Input lable="street" type="text" id="street" />
        <div className="control-row">
          <Input lable="post Code" type="text" id="post-Code" />
          <Input lable="city" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <ButtonComponent onClick={handleClose} type="button" textOnle>
            Close
          </ButtonComponent>
          <ButtonComponent>Submit Order</ButtonComponent>
        </p>
      </form>
    </Modal>
  );
}
