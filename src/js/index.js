//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Home from "./component/home.jsx";

let unidad = 0;
let decena = 0;
let centena = 0;
let unidadMil = 0;
let decenaMil = 0;
let centenaMil = 0;

function displayHello() {
    //render your react application
    //            qué vamos a dibujar,    donde lo vamos a dibujar
    ReactDOM.render(<Home unidad={unidad} decena={decena} centena={centena} unidadMil={unidadMil} decenaMil={decenaMil} centenaMil={centenaMil}/>, document.querySelector("#app"));
    unidad++;
    
    if (unidad > 9) {
        decena++;
        unidad = 0;
    }

    if (decena > 9) {
        centena++;
        decena = 0;
    }

    if (centena > 9) {
        unidadMil++;
        centena=0;
    }

    if (unidadMil > 9) {
        decenaMil++
        unidadMil = 0;
    }

    if (decenaMil > 9) {
        centenaMil++;
        decenaMil = 0;
    }


}

setInterval(displayHello, 1000);
