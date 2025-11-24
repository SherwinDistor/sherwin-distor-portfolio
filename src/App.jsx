function App() {
	return (
		<>
			<header className='text-muted-foreground fixed top-5 right-[50%] translate-x-[50%] z-1000 flex justify-center rounded-4xl border border-black/7 bg-white/10 px-8 sm:px-[20%] py-5 shadow-2xs backdrop-blur-md'>
				<nav className='flex gap-5 justify-center'>
					<a href='#about'>About</a>
					<a href='#projects'>Projects</a>
					<a href='#contact'>Contact</a>
				</nav>
			</header>
			<main className='flex flex-col items-center mt-28 gap-20 overflow-hidden'>
				<section id='about'>
					<div className='relative'>
						<div className='grid grid-cols-5 grid-rows-5 w-screen h-100 mask-x-from-70% mask-x-to-90% mask-y-from-70% mask-y-to-90%'>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
						</div>
						<div className='absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] flex gap-5 flex-wrap items-center justify-center'>
							<img
								className='rounded-full h-40 w-40'
								alt='Sherwin Distor Headshot'
								src='/src/assets/headshot.JPG'
							/>
							<div>
								<p className='text-center sm:text-right'>Hello World👋 I'm</p>
								<h1 className='text-3xl font-bold text-center sm:text-right'>
									Sherwin Distor
								</h1>
								<p className='text-center sm:text-right'>Software Developer</p>
							</div>
						</div>
					</div>
					<div className='w-screen text-center flex justify-center'>
						<p className='w-[80%] sm:w-[60%] text-lg'>
							I'm a self-taught software developer with a background in digital
							marketing, having transitioned into tech after graduating from the
							University of Nebraska-Lincoln. I enjoy combining my interest in
							programming and marketing to give a unique perspective on creating
							intuitive web applications.
						</p>
					</div>
				</section>
				<section id='projects' className='flex flex-col items-center'>
					<h2 className='text-4xl font-extrabold mb-5'>Projects</h2>
					<div className='w-[80%] max-w-[700px]'>
						<div className='flex flex-col items-center gap-4 mb-20'>
							<img
								className='h-48 rounded-lg'
								src='/src/assets/odin-cv-application.png'
								alt='Resume Creator Application'
							/>
							<div>
								<h3 className='text-2xl font-bold'>CV Creator</h3>
								<p>
									The CV Creator is a web application designed to help users
									generate professional resumes effortlessly. Built with React
									and styled using Tailwind CSS, this project provides an
									intuitive interface and seamless user experience. Vite is used
									as the build tool for quick development and optimized
									performance.
								</p>
							</div>
							<div className='flex gap-4'>
								<a
									href='https://github.com/SherwinDistor/odin-cv-application'
									target='_blank'
									className='border border-black/7 bg-white/10 rounded-full px-3 py-2'
								>
									GitHub
								</a>
								<a
									href='https://odin-cv-application-sherwin.netlify.app/'
									target='_blank'
									className='border border-black/7 bg-white/10 rounded-full px-3 py-2'
								>
									Live Demo
								</a>
							</div>
						</div>
						<div className='flex flex-col items-center gap-4'>
							<img
								className='h-48 rounded-lg'
								src='/src/assets/memory-card.png'
								alt='Pokemon Memory Card Game'
							/>
							<div>
								<h3 className='text-2xl font-bold'>Pokemon Memory Card Game</h3>
								<p>
									The CV Creator is a web application designed to help users
									generate professional resumes effortlessly. Built with React
									and styled using Tailwind CSS, this project provides an
									intuitive interface and seamless user experience. Vite is used
									as the build tool for quick development and optimized
									performance.
								</p>
							</div>
							<div className='flex gap-4'>
								<a
									href='https://github.com/SherwinDistor/odin-memory-card'
									target='_blank'
									className='border border-black/7 bg-white/10 rounded-full px-3 py-2'
								>
									GitHub
								</a>
								<a
									href='https://odin-memory-card-pokemon-sherwin.netlify.app/'
									target='_blank'
									className='border border-black/7 bg-white/10 rounded-full px-3 py-2'
								>
									Live Demo
								</a>
							</div>
						</div>
					</div>
				</section>
				<section id='contact' className='mb-10 flex flex-col items-center'>
					<h2 className='text-4xl font-extrabold'>Contact</h2>
					<h3 className='text-xl mb-5'>Let's get in touch!</h3>
					<div>
						<a href='mailto:sherwindistor@gmail.com'>sherwindistor@gmail.com</a>
						<div className='flex justify-center gap-3 mt-3'>
							<a
								href='https://github.com/SherwinDistor'
								target='_blank'
								alt='GitHub'
								className=''
							>
								<img
									src='/src/assets/github-mark-white.svg'
									alt='GitHub'
									className='w-10 border rounded-md border-black/7 bg-white/10 p-1 shadow-2xs backdrop-blur-md'
								/>
							</a>
							<a
								href='https://www.linkedin.com/in/sherwindistor/'
								target='_blank'
								alt='LinkedIn'
							>
								<img
									src='/src/assets/icons8-linkedin.svg'
									alt='LinkedIn'
									className='w-10 border rounded-md border-black/7 bg-white/10 p-1 shadow-2xs backdrop-blur-md'
								/>
							</a>
						</div>
					</div>
				</section>
			</main>
			<footer className='text-center bg-white/10 py-2'>Made by Sherwin</footer>
		</>
	);
}

export default App;
