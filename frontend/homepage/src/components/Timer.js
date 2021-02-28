import React, { Component } from "react";
import '../index.css';

const time = 7200;

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {h :0 , m:0 ,s:0, seconds:time };
        
    }
    render(){
        return(
        <div className="font-poppin flex justify-end items-center w-2/6 h-full">
            <div className="items-center justify-center ml-0.5 rounded-full flex bg-lightblue h-navbtn w-navbtn">
            {  ('0' + this.state.h).slice(-2) } 
			</div>
            <div className="items-center justify-center ml-0.5 flex text-lightblue h-navbtn w-navbtn">
                :
			</div>
            
			<div className="items-center justify-center ml-0.5 rounded-full flex bg-lightblue h-navbtn w-navbtn">
            {('0' + this.state.m).slice(-2) } 
			</div>
            <div className="items-center justify-center ml-0.5 flex text-lightblue h-navbtn w-navbtn">
                :
			</div>

			<div className="items-center justify-center mr-8 ml-0.5 rounded-full flex bg-lightblue h-navbtn w-navbtn">
            { ('0' + this.state.s).slice(-2) }
			</div>
        </div>
        );
    }
    componentDidMount(){
        this.myInterval = setInterval(()=>{
            this.setState(prevState=>({
                seconds:prevState.seconds - 1
            }))
            var ho = Math.floor(this.state.seconds / 3600);
            var mo = Math.floor(this.state.seconds % 3600 / 60);
            var so = Math.floor(this.state.seconds % 3600 % 60);
            this.setState({h:ho,m:mo,s:so})
            if(this.state.seconds === 0){
                window.location.reload(1);
            }
        },1000)
    }

}

export default Timer