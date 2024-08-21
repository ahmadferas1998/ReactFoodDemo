import l from '../data/images/beef-tacos.jpg'
import {CurrentFormat} from '../util/formatting'
import ButtomComponent from '../Components/Ui/ButtomComponent'
import { useContext } from 'react'
import CartContext from '../Store/CartContext'
export default function MealItem({meal}){
const cartCtx= useContext(CartContext)
    function handleAddMealToCart(){
        cartCtx.addItem(meal)
    }
    return(
        <>
        <li className="meal-item" key={meal.id}>
            <article>
                <img src={l} alt={meal.name} />
                <div>
                    <h3>
                        {meal.name}
                    </h3>
                    <p className="meal-item-price">{CurrentFormat.format( meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meai-0item-action">
              <ButtomComponent onClick={handleAddMealToCart}> Add To Cart </ButtomComponent>
                </p>
            </article>
        </li>
        </>
    )
}