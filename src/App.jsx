import ProjectCard from './components/ProjectCard';
import blogScreenshot from './assets/blog.png';
import githubLogo from './assets/github-mark-white.svg';
import headshot from './assets/headshot.JPG';
import linkedInLogo from './assets/icons8-linkedin.svg';
import memoryCardScreenshot from './assets/memory-card.png';
import cvScreenshot from './assets/odin-cv-application.png';

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
								src={headshot}
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
					<div className='w-[80%] max-w-[700px] flex flex-col gap-15'>
						<ProjectCard
							title='Blog'
							description='A full stack blog application build with Java (Spring Boot Framework) for implementing the REST API and React to design and add functionality to the front end. The database is Postgresql and uses the Java Persistence API for data access. Spring Security is used for single user sign-in to create categories, tags and posts which can either be saved as a draft or published. React Router is used to create protected routes and the user interface is styled with Tailwind CSS.'
							imgSrc={blogScreenshot}
							github='https://github.com/SherwinDistor/java_blog'
							demo='https://sherwins-blog.netlify.app/'
						/>

						<ProjectCard
							title='Resume Creator'
							description='The Resume Creator is a web application designed to help users generate
					professional resumes effortlessly. Built with React and styled using
					Tailwind CSS, this project provides an intuitive interface and
					seamless user experience. Vite is used as the build tool for quick
					development and optimized performance.'
							imgSrc={cvScreenshot}
							github='https://github.com/SherwinDistor/odin-cv-application'
							demo='https://odin-cv-application-sherwin.netlify.app/'
						/>

						<ProjectCard
							title='Memory Card Game'
							description='The Pokémon Card App is a dynamic React-based application that leverages the Pokémon API to provide users with an interactive card matching game. Built using React for the front-end, styled with Tailwind CSS, and deployed on Netlify.'
							imgSrc={memoryCardScreenshot}
							github='https://github.com/SherwinDistor/odin-memory-card'
							demo='https://odin-memory-card-pokemon-sherwin.netlify.app/'
						/>
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
									src={githubLogo}
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
									src={linkedInLogo}
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
