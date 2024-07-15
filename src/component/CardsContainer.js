
import { useEffect, useState } from "react";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

let CardsContainer = () => {


    let [data, setData] = useState([])
    let [datatwo, setDataTwo] = useState([])
    let [searchText, setSearchText] = useState("")


    useEffect(() => {
        fechdata()
    }, [])


    let fechdata = async () => {

        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

        let json = await data.json()

        setData(json.data.cards[1].card.card.gridElements.
            infoWithStyle.restaurants
        )
        setDataTwo(json.data.cards[1].card.card.gridElements.
            infoWithStyle.restaurants)
    }

    if (data.length === 0) {
        return <Shimmer></Shimmer>
    }

    return (

        <div className="w-full">
            <div className="p-4  flex  ">

                <div className=" flex ">
                    <input className="outline hover:outline-none outline-none" type='text' placeholder="Search Restaurant" value={searchText} onChange={(e) => {

                        setSearchText(e.target.value)

                    }}></input>
                    <button className="mr-10" onClick={() => {

                        let filteredRestaurant = data.filter((eachobject) => (
                            eachobject.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ))

                        setDataTwo(filteredRestaurant)

                    }} >Search</button>
                </div>
                <button className="border-2 p-2 rounded-md bg-green-200" onClick={() => {
                    let topfiltered = data.filter((eachrestaurant) => (
                        eachrestaurant.info.
                            avgRating > 4.3
                    ))

                    setDataTwo(topfiltered)
                }}>Top Rated Restaurant</button>
            </div>

            <div className="border-r-orange-100 w-full min-h-screen  flex justify-center flex-wrap  p-8">

                {

                    datatwo.map((element) => (

                        <Link to={"/restaurant/" + element.info.id} key={element.info.id}><Cards data={element} /></Link>
                    ))
                }


            </div>
        </div>
    )
}

export default CardsContainer;