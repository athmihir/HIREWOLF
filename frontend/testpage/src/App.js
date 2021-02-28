import './index.css';
import hirewolf from './img/wolfie.svg'
import Question from './question'

function App() {
  return (
    <div className="App w-screen h-screen">
      <header className="pr-4 flex w-full h-navh flex bg-darkblue">
		<div className="flex items-center w-1/2 h-full">
			<img className="ml-8 h-2/3 " src={hirewolf} alt="logo"/>
			<div className="ml-1 text-xl text-logolet font-josefin">HIREWOLF</div>
		</div>
		<div className="flex justify-end items-center w-1/2 h-full">
			<div className="ml-2 rounded-full flex-none bg-lightblue h-navbtn w-navbtn">
			</div>
			<div className="ml-2 rounded-full flex-none bg-lightblue h-navbtn w-navbtn">
			</div>
			<div className="mr-8 ml-2 rounded-full flex-none bg-lightblue h-navbtn w-navbtn">
			</div>
		</div>
      </header>
      <div className="flex h-body w-full">
        <Question></Question>
        <div className="flex h-full w-codepen bg-blueGray">
        </div>
      </div>
      

    </div>
  );
}

export default App;
