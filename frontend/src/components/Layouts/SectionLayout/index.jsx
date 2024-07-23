import React from 'react'

const SectionLayout = ({ children }) => {
    return (
        <section className='relative bg-black text-white w-full'>
            <div className='grid sm:grid-cols-2 justify-center items-center p-8 gap-8 text-center sm:text-left'>
                {children}
            </div>
            <div
                className='bg-stone-900 w-full absolute top-0 left-0 h-2'>
            </div>
        </section>
    )
}

export default SectionLayout