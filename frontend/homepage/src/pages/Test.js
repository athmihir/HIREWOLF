import '../index.css';
import React, { Component } from "react";
import hirewolf from '../img/wolfie.svg'
import Question from '../components/Question'
import Timer from '../components/Timer'
import axios from 'axios';

const state = {
	current: 0,
	questions: [
		{
			title: '',
			question: ''
  		}
 	],
	isLoading: true,
};

class Test extends Component{

	constructor(props){
		super();
		this.state = state;
	}

	componentDidMount = async() => {
		console.log("axios req made");
		try {
			const resp = await axios.get(`http://127.0.0.1:4000/user/test-questions`);
			console.log("axios req made and data is ->");
			console.log(resp.data);
			const newstate = resp.data;
			this.setState({ 
			current: newstate.current,
			questions: newstate.questions,
			isLoading: false, });
			// .then(res => {
			// 	console.log("axios req made and data is ->");
			// 	console.log(res.data);
			// 	const newstate = res.data;
			// 	this.setState({ 
			// 		current: newstate.current,
			// 		questions: newstate.questions });
			// })
		} catch (err) {
			console.error(err);
		}
		
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
			  {this.state.isLoading ? <h1>Loading...</h1> : <React.Fragment><header className="pr-4 flex w-full h-navh flex bg-darkblue">
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
				<div dangerouslySetInnerHTML={{ __html: this.state.questions[this.state.current].embed }} className="flex h-full w-full bg-blueGray">
				
				{/* <iframe src="https://codesandbox.io/embed/serene-gagarin-odlvu?fontsize=14&hidenavigation=1&theme=dark"
				className="h-body w-full overflow-hidden"
			 title="serene-gagarin-odlvu"
			 allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
			 sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
		   ></iframe> */}
				
				</div>
			  </div></React.Fragment>}
			  
			</div>
		  );
	}
}

export default Test;
