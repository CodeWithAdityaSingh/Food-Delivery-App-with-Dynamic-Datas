import { useDispatch } from "react-redux";

import { addItems } from "../utils/createAppSlice";



let RestaurantMenu = ({ data }) => {

    let dispactchA = useDispatch()



    return (
        <>
            {

                data.map((element) => (
                    <div className="flex w-full  justify-between items-center border-b border-black text-left p-4">

                        <div className="w-9/12">
                            <div className=" text-lg font-semibold">{element.card.info.name} </div>
                            <div className="text-lg font-semibold"> Rs-{element.card.info.price ? element.card.info.price / 100 : element.card.info.defaultrice / 100}</div>
                            <div className="text-sm ">{element.card.info.description}</div>
                        </div>
                        <div className="w-3/12 cursor-pointer ">
                            <button className="absolute w-10 text-white rounded-md p-2 bg-stone-400    " onClick={() => {




                                dispactchA(addItems(element))





                            }}>Add+</button>
                            <div><img className=" object-cover object-center " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + element.card.info.imageId}></img></div>

                        </div>


                    </div>
                ))
            }
        </>
    )
}


export default RestaurantMenu;