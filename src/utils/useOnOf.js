import { useEffect, useState } from "react";

let useOnOf = () => {


    let [data, setData] = useState(true)

    useEffect(() => {

        window.addEventListener('online', () => {



            setData(true)

        })

        window.addEventListener('offline', () => {
            setData(false)
        })

    }, [])



    return data


}

export default useOnOf;