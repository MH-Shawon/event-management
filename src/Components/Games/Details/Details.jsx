import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const {id} = useParams()
const loaded = useLoaderData();
console.log(loaded)


    return (
        <div>
           <h5>this is games details:{id}</h5> 
        </div>
    );
};

export default Details;