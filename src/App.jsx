import Header from "./Components/Header";
import Meal from "./Components/Meal";
import {CreateContextProvider} from '../src/Store/CartContext'
import {UserProgressContextProvider} from '../src/Store/UserProgressContext'
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
function App() {
  return (
    <>
    <UserProgressContextProvider>
    <CreateContextProvider>
    <Header/>
    <Meal/>
    <Cart/>
    <Checkout/>
    </CreateContextProvider>
    </UserProgressContextProvider>
    </>
  );
}

export default App;
