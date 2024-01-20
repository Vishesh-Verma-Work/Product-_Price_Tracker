import React from 'react'

const categoryItems = [
    {id: 1, title: "LAPTOPS", image: "../src/assets/cate1.jpeg"},
    {id: 2, title: " MOBILE PHONE",image: "../src/assets/cate2.jpeg"},
    {id: 3, title: "SHOES",  image: "../src/assets/cate3.jpeg"},
    
]

const Catagories = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16'>
        <div className='text-center'>
            <p className='subtitle'>Customer Favorites</p>
            <h2 className='title'>Popular Services</h2>
        </div>

        {/* category cards */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
            {
                categoryItems.map((item, i) => (
                    <div key={i} className='shadow-lg-black rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10'>
                        <div className='w-full mx-auto flex items-center justify-center'><img src={item.image} alt="" className='bg-[#ffffff] p- rounded-md h:2rem w:1.5' /></div>
                        <div className='mt-5 space-y-1'>
                            <h5 className='text-[#0a0a0a] font-smbold'>{item.title}</h5>
                            <p className='text-secondary text-sm'>{item.despriction}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Catagories