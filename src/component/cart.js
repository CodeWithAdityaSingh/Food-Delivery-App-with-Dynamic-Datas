import { useDispatch } from "react-redux";
import { clearCart } from "../utils/createAppSlice";
import { removeItems } from "../utils/createAppSlice";
import { useSelector } from "react-redux";
import RestaurantMenu from "./RestaurantMenu";


let Cart = () => {

    let dispatch = useDispatch()


    let dataItems = useSelector((store) => store.Cart.items)


    return (

        <div className="text-center w-full    ">
            <button className=" rounded-lg m-2 p-2 bg-black text-white" onClick={() => {
                dispatch(removeItems())
            }}>Remove-Items</button>
            <button className=" rounded-lg m-2 p-2 bg-black text-white" onClick={() => {
                dispatch(clearCart())
            }}>clearCart</button>
            <div className="w-screen flex justify-center mt-4 text-center  ">

                <div className="w-6/12 text-center mt-4">


                    {dataItems.length === 0 ? <h1 className="font-semibold text-4xl mt-5 ml-5">Cart is Empty 📦</h1> : <RestaurantMenu data={dataItems} />}


                </div>
            </div>


        </div>
    )
}

export default Cart;