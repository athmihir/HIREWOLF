import '../index.css';
import HireWolf from '../img/wolfie.svg';
import Card from '../components/Card';

function Training() {
	return (
		<div className='App w-screen h-screen'>
			<header className='pr-4 flex w-full h-navh flex bg-darkblue'>
				<div className='flex items-center w-1/2 h-full'>
					<img className='ml-8 h-2/3 ' src={HireWolf} alt='logo' />
					<div className='ml-1 text-xl text-logolet font-josefin'>HIREWOLF</div>
				</div>
				<div className='flex justify-end items-center w-1/2 h-full'>
					<div className='ml-2 rounded-full flex-none bg-lightblue h-navbtn w-navbtn'></div>
					<div className='ml-2 rounded-full flex-none bg-lightblue h-navbtn w-navbtn'></div>
					<div className='mr-8 ml-2 rounded-full flex-none bg-lightblue h-navbtn w-navbtn'></div>
				</div>
			</header>
			<div class='bg-white shadow'>
				<div class='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
					<p class='text-sm  text-gray-700'>Practice {'>'} Frontend </p>
					<h1 class='text-3xl font-bold text-gray-900'>React.js</h1>
				</div>
			</div>

			<div className='container mx-auto my-4 justify-center grid grid-cols-3 gap-4 '>
				<div className='grid grid-cols-1 gap-4 col-span-2'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>

				<div className='grid grid-cols-1 p-4'>
					<p class='text-xl text-bold leading-3 text-gray-700'>
						React.js Tutorials
					</p>
					<iframe
						title='Net Ninja React'
						width='560'
						height='315'
						src='https://www.youtube.com/embed/j942wKiXFu8'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen></iframe>
				</div>
			</div>
		</div>
	);
}

export default Training;
