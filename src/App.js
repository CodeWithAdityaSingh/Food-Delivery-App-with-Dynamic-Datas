
import React from "react"
import ReactDOM from 'react-dom/client'
import Header from './component/Header'
import CardsContainer from "./component/CardsContainer"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from './component/About'
import RestaurantDetails from "./component/RestaurantDetails"
import Cart from "./component/Cart"
import Contact from "./component/Contact"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"






let App = () => {

    return (


        <Provider store={appStore}>


            <div className="w-screen">
                <Header />
                <Outlet />
            </div>

        </Provider>




    )
}



let routerr = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <CardsContainer />
            },

            {
                path: '/about',
                element: <About />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantDetails />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'cart',
                element: <Cart />
            }
        ]

    }
])


let root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={routerr} />)