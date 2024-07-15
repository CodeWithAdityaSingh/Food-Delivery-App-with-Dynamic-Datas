import { useEffect, useState } from "react"
import Shimmer from './Shimmer'
import { useParams } from "react-router-dom"
import RestaurantDescription from "./RestaurantDescriptipon"


let RestaurantDetails = () => {



    let [restaurantMenu, setRestaurantManu] = useState([])

    let { resId } = useParams()


    useEffect(() => {
        fechdata()

    }, [])


    let fechdata = async () => {

        let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=" + resId)

        let json = await data.json()
        setRestaurantManu(json.data)
    }


    if (restaurantMenu.length === 0) {
        return <Shimmer />
    }


    const { name, city, cloudinaryImageId, costForTwoMessage, cuisines } = restaurantMenu.cards[2].card.card.info

    const {
        itemCards
    } = restaurantMenu.cards[4].
        groupedCard.
        cardGroupMap.
        REGULAR.cards[2].card.card





    let filteredcards = restaurantMenu.cards[4].
        groupedCard.
        cardGroupMap.
        REGULAR.cards.filter((cards) => (
            cards?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ))




    return (

        <div className="w-full text-center">

            <div className=" flex justify-center w-screen ">

                <div className=" w-6/12   " >
                    <div className=" flex  justify-between       ">

                        <span className="font-bold text-2xl">{name}</span>
                        <img className="w-20 h-20" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>

                    </div>
                    <div className=" font-semibold">

                        <span>{cuisines}-</span>
                        <span>Rs:- {costForTwoMessage}</span>

                    </div>

                </div>
            </div>
            <h2 className="text-center font-semibold text-lg mt-10">Menu</h2>
           
                <div className="w-screen flex justify-center">
                    <div className=" text-center w-6/12 ">


                        {

                            filteredcards.map((element, index) => (

                                <RestaurantDescription data={element.card.card} />



                            ))
                        }

                    </div>
              
            </div>
        </div>
    )
}

export default RestaurantDetails