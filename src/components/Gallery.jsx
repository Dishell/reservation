import React from 'react'

const Gallery = () => {
    return (
        <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
            <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img className='w-full h-full object-cover' src='https://media.cntraveler.com/photos/53dad07e6dec627b14a04855/master/w_640%2Cc_limit/four-seasons-bali-at-jimbaran-bay-bali-jimbaran-indonesia-108728-2.jpg' alt='/' />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src='https://media.cntraveler.com/photos/54418ed558544c134c0683b8/master/w_640%2Cc_limit/rayavadee-krabi-thailand-rca-2014-1.jpg' alt='/' />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src='https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/master/w_640%2Cc_limit/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg' alt='/' />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src='https://media.cntraveler.com/photos/53da3d5cdcd5888e145a8d73/master/w_640%2Cc_limit/le-taha-a-island-resort-spa-aerial-3.jpg' alt='/' />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src='https://media.cntraveler.com/photos/54872fb9b6e03e8c2d0ca93a/master/w_640%2Cc_limit/victoria-hoi-an-vietnam.jpg' alt='/' />
                </div>
            </div>
        </div>
    )
}

export default Gallery;