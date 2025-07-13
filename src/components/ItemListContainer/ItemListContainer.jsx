import { useState } from "react";

// const [peliculas, setPeliculas] = useState([]);
export function ItemListContainer({ greet }) {
  return (
    <div className="item_list_container">
      <div className="saludo">
        <h1>{greet}</h1>
        <p className="frase"></p>
      </div>
      <div className="container">
        <ul className="list_container">
          <li className="item">
            <img
              className="item_img"
              src="https://res.cloudinary.com/dv9yjyclh/image/upload/v1750607421/amatheur_ruxc95.jpg"
            />
            <p className="title">The Amatheur</p>
          </li>
          <li className="item">
            <img
              className="item_img"
              src="https://res.cloudinary.com/dv9yjyclh/image/upload/v1750607420/candle_npwrv5.jpg"
            />
            <p className="title">Candle in the Tomb</p>
          </li>
          <li className="item">
            <img
              className="item_img"
              src="https://res.cloudinary.com/dv9yjyclh/image/upload/v1750607421/dragon_mjyku5.jpg"
            />
            <p className="title">Dragon</p>
          </li>
          <li className="item">
            <img
              className="item_img"
              src="https://res.cloudinary.com/dv9yjyclh/image/upload/v1750607421/lilo_dgkml8.jpg"
            />
            <p className="title"> Lilo & Stitch</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
