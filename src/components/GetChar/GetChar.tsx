import {FC, useState} from "react";
import {ICharacter} from "./types";
import Loading from "../Loading/Loading";
import DetailsModal from "../Modals/Details/DetailsModal";
import "./GetChar.scss";

interface GetCharProps {
  loading: boolean,
  data: {
    characters: {
      results: ICharacter[]
    }
  }
}

const GetChar: FC<GetCharProps> = ({loading, data}) => {
  const [isDetails, setIsDetails] = useState(false)
  const [detailsId, setDetailsId] = useState("")
  const details = (id: string) => {
    setDetailsId(id);
    setIsDetails(true);
  }

  if (loading) return <Loading />;
  return <div className="get-char">
    {isDetails && <DetailsModal id={detailsId} setIsDetails={setIsDetails}/>}
    {
      data.characters["results"].map(({typename, name, id, status, species, type, gender, image, location, episode}: ICharacter) => (
        <div
          key={`${typename}-${id}`}
          className="get-char-character"
          onClick={() => details(id)}
        >
          <div className="get-char-character-left">
            <p>name: {name}</p>
            <p>status: {status}</p>
            <p>species: {species}</p>
            <p>type: {type}</p>
            <p>gender: {gender}</p>
            <p>location: {location.name}</p>
            <p className="get-char-episodes">episodes: {episode.map(item => (`${item.name}, `))}</p>
          </div>
          <div className="get-char-character-right">
            <img src={image}/>
          </div>
        </div>
      ))
    }
  </div>
}

export default GetChar;
