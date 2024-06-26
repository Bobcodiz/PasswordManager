import {Outlet} from "react-router-dom";
import "./../styling/Home.css"
import secure from "../pics/secure.jpeg"

import {Footer} from "./Footer";
import {SignUp} from "./SignUp";

export const Home =() =>{

    return(
        <>
            <div id="Page">
                <div className="words">
                    <h2 className="head">Say goodbye to forgetting passwords</h2>
                    <h3 className="sub-head">
                        <span className="span-1">Make life</span> <br/>
                        <span className="span-1">simple & safe</span>
                    </h3>
                    <button className="btn">{SignUp}</button>
                </div>
                <div className="image">
                    <img src={secure} alt={" Security pic"}/>
                </div>
                <div className="words2">
                    <h2 className="head">Say goodbye to forgetting passwords</h2>
                    <h3 className="sub-head">
                        <span className="span-1">Make life</span> <br/>
                        <span className="span-1">simple & safe</span>
                    </h3>
                </div>
            </div>
            <Outlet/>
            <Footer/>

        </>
    );
}