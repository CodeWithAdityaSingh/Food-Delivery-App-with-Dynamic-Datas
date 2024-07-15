import { Link } from "react-router-dom"

import useOnOf from "../utils/useOnOf"

import { useSelector } from "react-redux"




let Header = () => {


    let data = useOnOf()

    let selectorData = useSelector((store) => store.Cart.items)
    console.log(selectorData);








    return (

        <div className="w-full flex justify-between bg-amber-200 h-24 items-center p-4 ">
            
            <div className="logo  ">
                <img className=" w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4BBNHo8J5q9AXVg_uuwmARuxeV5wzPUYMw&s"></img>
            </div>
            <div className="   ">
                <ul className="flex m-4 gap-4  font-bold   ">
                    <li><Link to='/'>Home</Link></li>
                    <Link to='/about'> <li>Info</li></Link>
                    <Link to="/contact"><li>Contact</li> </Link>
                    <Link to="/about"><li>About</li> </Link>
                    <Link to={"/cart"}> <li className="font-bold text-xl cursor-pointer">🛒{selectorData.length} (Items)</li></Link>
                    <li>{data ? "✅Online" : "❌Offline"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header