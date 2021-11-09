import React from "react";
import { Link } from "react-router-dom";
import './base.css'


export default function home(){

    return(
        <div className="container main">
            <div className="row">
                <div className="col-lg-6 leftChange">

                </div>
                <div className="col-lg-6 rightChange">
                    
                    <div className="buttons">
                        <Link to="/Registration" className="btn btn-primary button">Register Here</Link>    
                    </div>
                    <div className="buttons">
                    <Link to="/Login" className="btn btn-primary button">Login Here</Link>  
                    </div>
                    
                </div>
            </div>
            
        </div>
    )

}