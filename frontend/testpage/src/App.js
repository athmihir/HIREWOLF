import './index.css';
import hirewolf from './img/wolfie.svg'
import Question from './question'
import Timer from './timer'

function App() {
  return (
    <div className="App w-screen h-screen">
      <header className="pr-4 flex w-full h-navh flex bg-darkblue">
		<div className="flex items-center w-1/2 h-full">
			<img className="ml-8 h-2/3 " src={hirewolf} alt="logo"/>
			<div className="ml-1 text-xl text-logolet font-josefin">HIREWOLF</div>
		</div>
		<Timer></Timer>
		<div className="font-poppin flex justify-end items-center w-1/6 h-full">
			<button className="mr-4 rounded-sm font-semibold font-poppin text-logolet text-base bg-green-600 px-4 py-2 hover:bg-green-800 hover:text-gray-300">Submit Test</button>
		</div>
			
      </header>
      <div className="flex h-body w-full">
        <Question></Question>
        <div className="flex h-full w-full bg-blueGray">
		
		<iframe src="https://codesandbox.io/embed/serene-gagarin-odlvu?fontsize=14&hidenavigation=1&theme=dark"
		className="h-body w-full overflow-hidden"
     title="serene-gagarin-odlvu"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
		
        </div>
      </div>
      

    </div>
  );
}

export default App;
