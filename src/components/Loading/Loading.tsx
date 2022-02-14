import {FC} from "react";
import "./Loading.scss";

const Loading: FC = () => {
  const arr = [];
  for (let i = 0; i < 20; i++) arr.push(1);

  return <div className="loading">
    {
      arr.map(() => (
        <div key={`key-${Math.floor(Math.random() * 1000000)}`} className="loading-character">
          <div className="loading-left">
            <p>name: ...</p>
            <p>status: ...</p>
            <p>species: ...</p>
            <p>type: ...</p>
            <p>gender: ...</p>
            <p>location: ...</p>
            <p className="get-char-episodes">episodes: ...</p>
          </div>
          <div className="loading-right">
            <div/>
          </div>
        </div>
      ))
    }
  </div>
}

export default Loading;
