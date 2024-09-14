import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img src='https://www.surfertoday.com/images/stories/beach-sunset.jpg' alt='/' className='w-full h-full object-cover'/>
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col p-4'>
                    <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                    <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus urna felis, eget vulputate orci aliquam in. Vestibulum tincidunt, urna sit amet ultrices lobortis, nulla nulla convallis nisi, non posuere nibh ipsum semper felis. Nulla congue convallis mi ac finibus. Duis congue efficitur eleifend. Integer quis aliquet eros.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero;