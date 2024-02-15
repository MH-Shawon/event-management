import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const Details = () => {
  const { id } = useParams();
  const games = useLoaderData();
  const gDetails = games.filter((game) => game.id === id);

  return (
    <div className="lg:px-24">
      {gDetails.map((gDetails) => (
        <DetailsCard key={gDetails.id} gDetails={gDetails}></DetailsCard>
      ))}
    </div>
  );
};

export default Details;
