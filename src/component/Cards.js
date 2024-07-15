
let Cards = ({ data }) => {

    const { name,
        avgRating, cloudinaryImageId } = data.info

    return (

        <div className="card bg-gray-200 border-black hover:border h-64 w-40 mx-2 my-4 p-2  rounded-lg">
            <img className="w-48 h-32 object-cover object-center  rounded-md m-auto" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
            <h1 className="font-bold">{name}</h1>
            <h3 className="text-sm">30 Min</h3>
            <h4 className="text-sm">{avgRating}</h4>



        </div>
    )
}

export default Cards