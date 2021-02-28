import GoogleLogin from 'react-google-login'
import './App.css'
import HireWolf from './img/wolfie.svg'

function App() {

	const responseGoogle = (response) => {
		console.log(response);
		console.log(response.profileObj);
	}

	return (
		<div className="App flex flex-row">
			{/* left container */}
			<div className="w-3/5 bg-gray-800 h-screen flex flex-col justify-center">
				<div className="flex flex-row justify-center"> {/* logo div */}
					<img src={ HireWolf } alt="HireWolf Logo" />
					<h1 className="text-6xl my-auto pl-3.5 text-logolet">HIREWOLF</h1>
				</div>
				<div className="w-4/5 mx-auto pt-8">
					<div className="my-auto"> {/* tagline div */}
						<h3 className="text-4xl py-8 font-black pl-16 text-logolet">Relevant tests for relevant jobs.</h3>
					</div>
					<div> {/* sub-tagline div */}
						<p className="mr-auto w-3/5 pl-16 text-sidebar">Our tests are designed to be domain-specific, which means no more spending weeks on algorithmic interviews.</p>
					</div>
				</div>
				
			</div>

			{/* right container */}
			<div className="flex flex-col justify-center w-2/5 items-center">
				<div className="flex flex-col justify-center items-center w-4/5">
					<h3 className="text-center text-2xl pb-10">Sign in to your account</h3>
					<div className="mb-3 pt-0 w-full">
						<input type="text" placeholder="Username" className="px-5 py-4 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-lg shadow outline-none focus:outline-none focus:ring focus:border-blue-300 w-full"/>
					</div>
					<div className="mb-3 pt-0 w-full">
						<input type="password" placeholder="Password" className="px-5 py-4 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-lg shadow outline-none focus:outline-none focus:ring focus:border-blue-300 w-full"/>
					</div>
					<div className="flex flex-row items-center justify-start w-full">
						<button className="px-10 py-3 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded inline">
							Sign In
						</button>
						<a href="#" className="inline ml-auto text-sm text-blue-500 hover:underline">Forgot password?</a>
					</div>
					<div className="pt-8">
						<p className="text-lg font-medium text-center pb-8">or</p>
						<GoogleLogin 
							clientId="861307263368-7q3plnmvq37aolnnvqu9gpiojf8c9r6f.apps.googleusercontent.com"
							buttonText="Sign in with Google"
							onSuccess={responseGoogle}
							onFailure={responseGoogle}
							cookiePolicy={'single_host_origin'}
							className="google-login-hook"
						/>
					</div>
					
				</div>
			</div>
		</div>
	);
}

export default App;
