import React from 'react';

import '../index.css';
import odefault from '../img/output-default.svg'
import ccircle from '../img/check-circle.svg'


class Question extends React.Component {
    
    constructor(props) {
        super();
        this.state = props.content;
      }

      handlenext = (e) => {
        if(this.state.current < this.state.questions.length - 1){
          this.props.update(this.state.current + 1);
          this.setState({current:this.state.current + 1});
        }
      }

      handleprev = (e) => {
        if(this.state.current > 0){
          this.props.update(this.state.current - 1);
          this.setState({current:this.state.current - 1});
        }
      }

      handlesubmit = (e) => {
        this.setState(prevState => {
          let jasper = Object.assign({}, prevState.questions);  // creating copy of state variable jasper
          jasper[this.state.current].completed = 'flex';                     // update the name property, assign a new value                 
          return { jasper };                                 // return new object jasper object
        });
        this.handlenext();
        
        
      }

    render() {

      return (
            <div className="flex flex-col h-full w-1/4 bg-sidebar overflow-x-hidden overflow-y-scroll">

                <div className="flex w-full h-qtitle items-end">
                    <div className="pl-5 flex justify-end flex-col h-full w-4/5 ">
                        <span className="text-gray-900 text-3xl font-poppin font-semibold flex ">{this.state.questions[this.state.current].title}</span>
                        <div className="flex items-center">
                          <span className="text-gray-700 text-sm mt-1 font-poppin">
                            Question { this.state.current + 1 } of { this.state.questions.length }
                          </span>
                          <img style={{display:this.state.questions[this.state.current].completed}} className="ml-2 flex h-5 " src={ccircle} alt="check-circle"/>
                        </div>
                        
                    </div>
                    <div className="mb-6 flex w-auto h-1/4 justify-center">
                        
                        <svg onClick={this.handleprev} className="flex h-5/6 text-gray-600 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        <svg onClick={this.handlenext} className="flex h-5/6 text-gray-600 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                        
                    </div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: this.state.questions[this.state.current].question }} className="text-gray-800 font-poppin text-lg pl-5 pr-8 pt-6 flex h-auto w-full">
                  
                </div>

                <div className="flex flex-col w-full h-auto">
                  <span className="pl-5 pt-6 flex text-3xl text-gray-900 font-poppin font-semibold">Output</span>
                  <img className= "mt-8 px-16" src={ odefault } alt="Output"/>
                </div>

                <div className=" mt-8 mb-8 flex w-full h-auto">
                  <button onClick={this.handlesubmit} className="ml-5 rounded-sm font-poppin text-logolet text-md bg-darkblue px-6 py-3  hover:bg-gray-900">Submit</button>
                </div>
                
            </div>
      );
    }
  }


export default Question;