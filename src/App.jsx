function App() {
	return (
		<>
			<header className='text-muted-foreground fixed top-5 right-[50%] translate-x-[50%] z-1000 flex justify-center rounded-4xl border border-black/7 bg-white/10 px-8 sm:px-[20%] py-5 shadow-2xs backdrop-blur-md'>
				<nav className='flex gap-5 justify-center'>
					<a href='#about'>About</a>
					<a href=''>Projects</a>
					<a href=''>Skills</a>
					<a href=''>Contact</a>
				</nav>
			</header>
			<main className='flex flex-col items-center gap-15 mt-28'>
				<section id='about' className='relative'>
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
							className='rounded-full h-24 w-24 border border-black bg-black'
							alt=''
						/>
						<div>
							<p>Hello World! I'm</p>
							<h1 className='text-3xl font-bold'>Sherwin Distor</h1>
							<p>Software Developer</p>
						</div>
					</div>
				</section>
				<section id='projects' className='flex flex-col items-center'>
					<h2 className='text-4xl font-extrabold'>Projects</h2>
					<div className='w-[80%]'>
						<div className='flex flex-col items-center gap-4'>
							<img className='w-64 h-48 bg-black rounded-lg' alt='' />
							<div>
								<h3 className='text-2xl font-bold'>Weather App</h3>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Ratione excepturi ullam odit, id tempora sunt quos adipisci
									sapiente animi vero tenetur repellat error repudiandae officia
									temporibus iure ut, distinctio aperiam.
								</p>
							</div>
							<div className='flex gap-4'>
								<a
									href=''
									className='border border-black/7 bg-white/10 rounded-full px-3 py-2'
								>
									GitHub
								</a>
								<a
									href=''
									className='border border-black/7 bg-white/10 rounded-full px-3 py-2'
								>
									Live Demo
								</a>
							</div>
						</div>
					</div>
				</section>
				<section id='skills'>
					<h2 className='text-4xl font-extrabold'>Skills</h2>
				</section>
				<section id='contact'>
					<h2 className='text-4xl font-extrabold'>Contact</h2>
				</section>
			</main>
			<footer className='text-center bg-white/10 py-2'>Made by Sherwin</footer>
		</>
	);
}

export default App;
