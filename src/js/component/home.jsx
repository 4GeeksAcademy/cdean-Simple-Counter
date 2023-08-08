import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondCounter from "./secondsCounter.js";

//create your first component
const Home = ({unidad, decena, centena, unidadMil, decenaMil, centenaMil}) => {
    return (
        <div className="container-full">
        <SecondCounter unidad={unidad} decena={decena} centena={centena} unidadMil={unidadMil} decenaMil={decenaMil} centenaMil={centenaMil}/>
        </div>
    );
};
export default Home;
