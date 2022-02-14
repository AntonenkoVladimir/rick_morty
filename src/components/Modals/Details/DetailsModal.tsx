import {FC} from "react";
import {gql, useQuery} from "@apollo/client";
import {IDetails} from "./types";
import "./DetailsModal.scss";

interface DetailsProps {
  id: string
  setIsDetails: (set: boolean) => void
}

const DetailsModal: FC<DetailsProps> = ({id, setIsDetails}) => {
  const getCharacter = gql`
    query {
      character(id: ${id}){
        name,
        status,
        species,
        type,
        gender,
        image,
        location{
          name
        },
        episode{
          name
        }
      }
    }
    `;
  const {loading, error, data} = useQuery(getCharacter);
  if(loading) return null;
  if(error) return null;
  const { name, status, species, type, gender, image, location, episode}: IDetails = data.character
  return <div className="details" onClick={() => setIsDetails(false)}>
    <div className="details-char" onClick={(e) => e.stopPropagation()} >
      <div className="details-char-left">
        <p>name: {name}</p>
        <p>status: {status}</p>
        <p>species: {species}</p>
        <p>type: {type}</p>
        <p>gender: {gender}</p>
        <p>location: {location.name}</p>
        <p className="details-char-episodes">episodes: {episode.map(item => (`${item.name}, `))}</p>
      </div>
      <div className="details-char-right">
        <img src={image}/>
     </div>
    </div>
  </div>
}

export default DetailsModal;
