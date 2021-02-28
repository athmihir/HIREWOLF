import React from 'react';

import './index.css';
import cright from './img/chevron-right.svg'
import cleft from './img/chevron-left.svg'
import odefault from './img/output-default.svg'


class Question extends React.Component {
     
    constructor() {
        super();
        this.state = {color: "red"};
      }
    render() {
      return (
            <div className="flex flex-col h-full w-1/4 bg-sidebar overflow-x-hidden overflow-y-scroll">

                <div className="flex w-full h-qtitle items-end">
                    <div className="pl-5 flex justify-end flex-col h-full w-4/5 ">
                        <span className="text-3xl font-poppin font-semibold flex ">Angular Jaws</span>
                        <span className="text-sm mt-1 font-poppin">Question 1 of 3</span>
                    </div>
                    <div className="mb-6 flex w-auto h-1/4 justify-center">
                        <input type="image" className="flex h-5/6" src={cleft} alt="left nav"/>
                        <input type="image" className="flex h-5/6" src={cright} alt="right nav"/>
                    </div>
                </div>

                <div className="font-poppin text-lg pl-5 pr-8 pt-6 flex h-auto w-full">
                  Fix the error in the Angular JS code given in the Codepen. 
                  <br></br>
                  Center the main div with respect to its parent. 
                  <br></br>
                  Add a congruent color scheme to the UI.
                </div>

                <div className="flex flex-col w-full h-auto">
                  <span className="pl-5 pt-6 flex text-3xl font-poppin font-semibold">Output</span>
                  <img className= "mt-8 px-16" src={ odefault } alt="Output"/>
                </div>
                
            </div>
      );
    }
  }


export default Question;