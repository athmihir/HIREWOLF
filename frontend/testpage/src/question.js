import React from 'react';

import './index.css';
import cright from './img/chevron-right.svg'
import cleft from './img/chevron-left.svg'


class Question extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
      }
    render() {
      return (
            <div className="flex flex-col h-full w-1/4 bg-sidebar">
                <div className="flex flex-col-reverse w-full h-1/6">
                    <div className="flex h-1/4 w-full items-center">
                        <span className="text-3xl font-semi-bold p-8 flex w-5/6">Angular Jaws</span>
                        <img className="flex h-2/3" src={cleft} alt=""/>
                        <img className="flex h-2/3" src={cright} alt=""/>
                        
                    </div>
                    <div className="flex">

                    </div>
                </div>
                <div className="flex"></div>
            </div>
        
      );
    }
  }


export default Question;