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
			<main className='flex flex-col items-center gap-15 px-5'>
				<section id='about'></section>
				<section id='projects' className='flex flex-col items-center'>
					<h2 className='text-4xl font-extrabold'>Projects</h2>
					<div className='w-[80%]'>
						<div className='flex flex-col items-center gap-4'>
							<div className='w-64 h-48 bg-black rounded-lg'></div>
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
