import { useState } from 'react';
import { useParams } from 'react-router-dom';
import HireWolf from '../img/wolfie.svg'

function Instructions() {

    let { testID } = useParams();

    const [tagline, setTagline] = useState('');
	const [subTagline, setSubtagline] = useState('');
	const [signedin, setSignin] = useState(false);

	return (
		<div className="flex flex-row">
			{/* left container */}
			<div className="w-3/5 bg-gray-900 h-screen flex flex-col justify-center">
				<div className="flex flex-row justify-center"> {/* logo div */}
					<img src={ HireWolf } alt="HireWolf Logo" />
					<h1 className="text-6xl my-auto pl-3.5 text-logolet">HIREWOLF</h1>
				</div>
				<div className="w-4/5 mx-auto pt-8 animate-fadeIn">
					<div className="my-auto"> {/* tagline div */}
						<h3 className="text-4xl py-8 font-black pl-16 text-logolet">Goldman Sachs Internship Drive 2021</h3>
					</div>
					<div> {/* sub-tagline div */}
						<p className="mr-auto w-3/5 pl-16 text-sidebar">28th February, 2021 | 5:00 PM to 7:00 PM</p>
					</div>
				</div>
				
			</div>

            {/* right container */}
            <div className="flex flex-col justify-center w-2/5 items-center">
		 		<div className="w-4/5">
		 			<h4 className="font-semibold text-3xl py-8 animate-fadeIn">Instructions</h4>
		 			<p className="py-3 animate-fadeIn">
		 				The duration of this test is <span className="font-semibold">120 minutes</span>.
		 			</p>
		 			<p className="py-3 animate-fadeIn">
		 				There are <span className="font-semibold">3</span> questions in this test and will be presented all at once. You may choose which order to solve them in.
		 			</p>
		 			<p className="py-3 pb-8 animate-fadeIn">
		 				Each question has <span className="font-semibold">10</span> points.
		 			</p>
		 			<button className="px-10 py-3 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded inline animate-fadeIn">
		 				Start Test
		 			</button>
		 		</div>
		 	</div>
        </div>
	);
}

export default Instructions;
