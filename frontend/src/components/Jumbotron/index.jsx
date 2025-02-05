import React from 'react'
import { JUMBOTRON_IMAGE } from "../../constants/listAsset"
import EachUtils from '../../utils/EachUtils'
import { useAtom } from 'jotai'
import { languageAtom } from '../../jotai/atoms'
import { LIST_JUMBOTRON_EN, LIST_JUMBOTRON_ID } from '../../constants/listJumbotron';
import InputMembership from '../Modules/InputMembership'

const Jumbotron = () => {
    const [language,] = useAtom(languageAtom)

    return (
        <div className='mb-24 px-8'>
            <img
                src={JUMBOTRON_IMAGE}
                alt='Netflix-bg'
                className='absolute top-0 left-0 object-cover h-[700px] w-full opacity-60'
            />
            <EachUtils
                of={language == "id" ? LIST_JUMBOTRON_ID : LIST_JUMBOTRON_EN}
                render={(item, index) => (
                    <div className='relative flex flex-col justify-center items-center mt-44 gap-4 text-center px-4'>
                        <h1
                            className='font-black text-white text-4xl'>
                            {item.title}
                        </h1>
                        <p className='text-white text-xl'>
                            {item.desc}
                        </p>
                        <InputMembership />
                    </div>
                )}
            />

        </div>
    )
}

export default Jumbotron