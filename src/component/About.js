import { useState, useEffect } from "react";
import Shimmer from './Shimmer'



let About = () => {

  let [data, setData] = useState(null)

  useEffect(()=>{
     fechdata()
  },[])


  let fechdata = async ()=>{
      let data = await fetch('https://api.github.com/users/CodeWithAdityaSingh')

      let json =  await data.json()

      setData(json)
  }


  return data === null ? <Shimmer /> : (

    <div className="m-4">
      <h1>{data.name}</h1>
      <span>{data.location}</span>
      <div>aditya@gmail.com</div>
      <div>{data.bio}</div>

      <img  className="w-60 object-contain object-center" src={data.avatar_url}></img>

    </div>
  )

}

export default About;