import {FC} from "react";
import {ICharacter} from "../../interfaces/interfaces";
import {useNavigate} from "react-router-dom";
import "./GetChar.scss";

interface GetCharProps {
  loading: boolean,
  error?: object,
  data: {
    characters: {
      results: ICharacter[]
    }
  }
}

const GetChar: FC<GetCharProps> = ({loading, error, data}) => {
  const navigate = useNavigate();

  if (loading) return <p className="get-char-loading">Loading...</p>;
  if (error) return <div className="get-char-error">
    <p>Нет персонажей, удовлетворяющих критериям поиска</p>
    <button onClick={() => navigate("/main/1")}>Сбросить фильтры поиска</button>
  </div>
  return <div className="get-char">
    {
      data.characters["results"].map(({typename, name, id, status, species, type, gender, image, location, episode}: ICharacter) => (
        <div key={`${typename}-${Math.floor(Math.random() * 1000000)}`} className="get-char-character">
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
