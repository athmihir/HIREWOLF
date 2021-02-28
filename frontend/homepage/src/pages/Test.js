import '../index.css';
import React, { Component } from "react";
import hirewolf from '../img/wolfie.svg'
import Question from '../components/Question'
import Timer from '../components/Timer'
import { useHistory } from 'react-router-dom';

const state = {current:0 ,
	questions:[{title:'Angular Jaws', question:"Fix the error in the Angular JS code given in the Codepen.<br> Center the main div with respect to its parent.<br>Add a congruent color scheme to the UI.", completed:'none', iframe: '<iframe src="https://codesandbox.io/embed/serene-gagarin-odlvu?fontsize=14&hidenavigation=1&theme=dark" class="h-body w-full overflow-hidden" title="serene-gagarin-odlvu" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>'
  }, {title:'React to It', question:"Fix the error in the React JS code given in the Codepen below.<br> Create a new react component using function class.<br>Store the states for each variable properly.",completed:'none', iframe: '<iframe src="https://codesandbox.io/embed/falling-browser-vfz4t?fontsize=14&hidenavigation=1&theme=dark" class="h-body w-full overflow-hidden" title="falling-browser-vfz4t" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>'
  }
  ]};

class Test extends Component{

	constructor(props){
		super();
		this.state = state;
	}
	
	handleUpdate = (a) => {
		console.log(a);
		console.log('updated');
		this.setState({current:a});
	}

	handleSubmit = () => {
		window.location.replace("/");
	}
	
	render(){
		return (
			<div className="App w-screen h-screen">
			  <header className="pr-4 flex w-full h-navh flex bg-darkblue">
				<div className="flex items-center w-1/2 h-full">
					<img className="ml-8 h-2/3 " src={hirewolf} alt="logo"/>
					<div className="ml-1 text-xl text-logolet font-josefin">HIREWOLF</div>
				</div>
				<Timer></Timer>
				<div className="font-poppin flex justify-end items-center w-1/6 h-full">
					<button onClick={this.handleSubmit} className="mr-4 rounded-sm  font-poppin text-logolet text-base bg-green-600 px-4 py-2 hover:bg-green-800 hover:text-gray-300">Submit Test</button>
				</div>
					
			  </header>
			  <div className="flex h-body w-full">
				<Question update={this.handleUpdate} content={this.state}></Question>
				<div dangerouslySetInnerHTML={{ __html: this.state.questions[this.state.current].iframe }} className="flex h-full w-full bg-blueGray">
				
				{/* <iframe src="https://codesandbox.io/embed/serene-gagarin-odlvu?fontsize=14&hidenavigation=1&theme=dark"
				className="h-body w-full overflow-hidden"
			 title="serene-gagarin-odlvu"
			 allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
			 sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
		   ></iframe> */}
				
				</div>
			  </div>
			</div>
		  );
	}
}

export default Test;
