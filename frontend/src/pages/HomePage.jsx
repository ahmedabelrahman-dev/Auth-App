import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Sparkles, LockKeyhole, MailCheck, ArrowRight } from "lucide-react";

const HomePage = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-3xl w-full bg-gray-900/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden'
		>
			<div className='grid md:grid-cols-[1.4fr,1fr] gap-0'>
				{/* Left: Hero copy */}
				<div className='p-8 md:p-10 flex flex-col justify-center'>
					<div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium w-fit mb-4'>
						<ShieldCheck className='w-4 h-4' />
						Secure Auth Starter
					</div>

					<h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4'>
						<span className='bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 text-transparent bg-clip-text'>
							Authentication made
						</span>
						<br />
						<span className='text-white'>simple & secure.</span>
					</h1>

					<p className='text-gray-300 text-sm md:text-base leading-relaxed mb-6'>
						Build modern auth flows with email verification, password strength checks,
						and a beautiful UI—without starting from scratch. Perfect for SaaS,
						dashboards, and side projects.
					</p>

					<div className='flex flex-wrap items-center gap-3 mb-8'>
						<Link
							to='/signup'
							className='inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold shadow-lg shadow-emerald-500/30 hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition'
						>
							Get Started
							<ArrowRight className='w-4 h-4 ml-2' />
						</Link>

						<Link
							to='/login'
							className='inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-emerald-400/40 text-emerald-200 text-sm font-semibold bg-white/5 hover:bg-white/10 transition'
						>
							Already have an account?
						</Link>
					</div>

					<div className='flex flex-wrap gap-4 text-xs text-gray-400'>
						<div className='flex items-center gap-2'>
							<div className='w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center'>
								<LockKeyhole className='w-3.5 h-3.5 text-emerald-300' />
							</div>
							<span>JWT & secure sessions</span>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center'>
								<MailCheck className='w-3.5 h-3.5 text-emerald-300' />
							</div>
							<span>Email verification flow</span>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center'>
								<Sparkles className='w-3.5 h-3.5 text-emerald-300' />
							</div>
							<span>Glassmorphism UI out of the box</span>
						</div>
					</div>
				</div>

				{/* Right: Highlight card */}
				<div className='bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-transparent border-l border-white/5 relative overflow-hidden'>
					<div className='absolute -top-10 -right-10 w-36 h-36 bg-emerald-500/30 rounded-full blur-3xl' />
					<div className='absolute bottom-0 left-0 w-40 h-40 bg-green-400/20 rounded-full blur-3xl' />

					<div className='relative p-8 h-full flex flex-col justify-between gap-6'>
						<div>
							<p className='text-[11px] uppercase tracking-[0.25em] text-emerald-200/80 mb-3'>
								Designed for modern apps
							</p>
							<p className='text-sm text-emerald-50 font-medium mb-4'>
								Plug this auth system into your next project and focus on your core
								features instead of rebuilding login flows.
							</p>
						</div>

						<div className='space-y-3 text-xs text-emerald-50/90'>
							<div className='flex items-center justify-between'>
								<span>Email verification status</span>
								<span className='px-2 py-0.5 rounded-full bg-emerald-500/30 text-[10px] font-semibold'>
									Built-in
								</span>
							</div>
							<div className='flex items-center justify-between'>
								<span>Password strength meter</span>
								<span className='px-2 py-0.5 rounded-full bg-emerald-500/20 text-[10px]'>
									UI included
								</span>
							</div>
							<div className='flex items-center justify-between'>
								<span>Responsive, mobile-first layout</span>
								<span className='px-2 py-0.5 rounded-full bg-emerald-500/10 text-[10px]'>
									Ready to ship
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default HomePage;

