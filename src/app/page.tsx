'use client'
import Image from 'next/image'
import toast from 'react-hot-toast'
export default function Home() {
	return (
		<div>
			<section className='relative w-full h-screen overflow-hidden'>
				{/* Відео */}
				<video
					src='\video_248741029.mp4'
					autoPlay
					loop
					muted
					playsInline
					className='absolute top-0 left-0 w-full h-full object-cover z-0'
				></video>

				{/* Напівпрозора затемнююча підкладка */}
				<div className='absolute inset-0 bg-[#0000009c] z-10'></div>

				{/* Текст посередині */}
				<div className='absolute inset-0 flex items-center justify-center z-20'>
					<div className='text-center text-white px-6'>
						<h1 className='text-5xl md:text-9xl font-bold mb-4'>
							Рюкзак для міста
						</h1>
						<p className='text-lg md:text-5xl'>
							Функціональність. Стиль. Надійність.
						</p>
					</div>
				</div>
			</section>

			<div>
				<div className='flex items-center justify-between'>
					<div className='text-center'>
						<p className='text-7xl font-bold'>
							9 з 9 бобрів рекомендують цей рюкзак
						</p>
						<p className='text-5xl text-gray-400 mt-1'>
							Такий носить навіть Стетхем
						</p>
					</div>
					<div>
						<Image
							src='/photos/download1.png'
							alt='Рюкзак'
							width={1200}
							height={900}
							className='h-screen'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
