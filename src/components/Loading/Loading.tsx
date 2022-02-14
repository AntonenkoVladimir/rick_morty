// import {FC} from "react";
// import {useNavigate} from "react-router-dom";
// import "./Error.scss";
// import {ICharacter} from "../../interfaces/interfaces";
//
// const Loading: FC = () => {
//   const navigate = useNavigate();
//   const arr = [];
//   for (let i = 0; i < 20; i++) {
//     arr.push(1);
//   }
//
//
//   return <div className="get-char">
//     {
//       arr.map() => (
//         <div key={`key-${Math.floor(Math.random() * 1000000)}`} className="get-char-character">
//           <div className="get-char-character-left">
//             <p>name: {name}</p>
//             <p>status: {status}</p>
//             <p>species: {species}</p>
//             <p>type: {type}</p>
//             <p>gender: {gender}</p>
//             <p>location: {location.name}</p>
//             <p className="get-char-episodes">episodes: {episode.map(item => (`${item.name}, `))}</p>
//           </div>
//           <div className="get-char-character-right">
//             <img src={image}/>
//           </div>
//         </div>
//       ))
//     }
//   </div>
// }
//
// export default Loading;
