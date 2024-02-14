import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    // const {id} = useLoaderData();
    const {id} = useParams()
    console.log(id)

    return (
        <div>
           <h5>this is games details:{id}</h5> 
        </div>
    );
};

export default Details;