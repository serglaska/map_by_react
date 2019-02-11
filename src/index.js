import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const data = [
  {
    title: "Jupiter ",
    description:
      "Юпи́тер — крупнейшая планета Солнечной системы, пятая по удалённости от Солнца.",
    image:
      "https://uploads.codesandbox.io/uploads/user/98cdc94e-86be-4296-b92c-a32a3c65429e/OXVH-Jupiter.jpg",
    styles: {
      borderRadius: "10px",
      color: "green",
      fontSize: "14px"
    }
  },
  {
    title: "Saturn ",
    description:
      "Сату́рн — шестая планета от Солнца и вторая по размерам планета в Солнечной системе после Юпитера. Сатурн",
    image:
      "https://uploads.codesandbox.io/uploads/user/98cdc94e-86be-4296-b92c-a32a3c65429e/fT7f-saturn.jpg",
    styles: {
      borderRadius: "10px",
      color: "blue",
      fontSize: "16px"
    }
  },
  {
    title: "Neptun ",
    description:
      "Непту́н — восьмая и самая дальняя от Земли планета Солнечной системы.",
    image:
      "https://uploads.codesandbox.io/uploads/user/98cdc94e-86be-4296-b92c-a32a3c65429e/odS4-neptun.jpg",
    styles: {
      borderRadius: "15px",
      color: "pink",
      fontSize: "18px"
    }
  },
  {
    title: "Uranus ",
    description:
      "Ура́н — планета Солнечной системы, седьмая по удалённости от Солнца, третья по диаметру и четвёртая по массе.",
    image:
      "https://uploads.codesandbox.io/uploads/user/98cdc94e-86be-4296-b92c-a32a3c65429e/58zY-Uranus.jpg",
    styles: {
      borderRadius: "20px",
      color: "yellow",
      fontSize: "20px"
    }
  }
];
// ////////////////////////////////////////////////////////
function App() {
  return (
    <fragment>
      <div className="App">
        <h1 className="topic">My cosmos</h1>
        {data.map((el, index) => (
          <Mapa
            key={index}
            image={el.image}
            color={el.styles.color}
            fontSize={el.styles.fontSize}
            borderRadius={el.styles.borderRadius}
          >
            {el.title}
            {el.description}
            {el.styles.color}
          </Mapa>
        ))}
      </div>
      <style>
        {`
              .App {
                display: grid;
                grid-gap: 40px;
                background-color: azure;
                grid-template-columns: 1fr;
              }
              .topic {
                text-align: center;
              }`}
      </style>
    </fragment>
  );
}

let Mapa = styled.div`
  background-size: 50%;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  background: url(${props => props.image});
  border-radius: ${props => props.borderRadius};
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
