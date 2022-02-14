import {FC} from "react";
import {useNavigate} from "react-router-dom";
import "./Error.scss";

const Error: FC = () => {
  const navigate = useNavigate();

  return <div className="get-char-error">
    <p>Нет персонажей, удовлетворяющих критериям поиска</p>
    <button onClick={() => navigate("/main/1")}>Сбросить фильтры поиска</button>
  </div>
}

export default Error;
