import React from 'react'
import SectionLayout from '../../Layouts/SectionLayout'
import EachUtils from '../../../utils/EachUtils'
import { LIST_CONTENT_1_EN, LIST_CONTENT_1_ID } from '../../../constants/listContent'
import { ENJOY_TV_IMAGE, ENJOY_TV_VIDEO } from '../../../constants/listAsset'
import { useAtom } from 'jotai'
import { languageAtom } from '../../../jotai/atoms'

const SectionEnjoy = () => {
    const [language,] = useAtom(languageAtom)

    return (
        <SectionLayout>
            <EachUtils
                of={language == "en" ? LIST_CONTENT_1_EN : LIST_CONTENT_1_ID}
                render={(item, index) => (
                    <div key={index} className='px-8'>
                        <h2 className='font-black text-4xl'>
                            {item.title}
                        </h2>
                        <p className='text-xl mt-4'>
                            {item.desc}
                        </p>
                    </div>
                )}
            />
            <div className='relative max-w-xl mx-auto'>
                <img
                    src={ENJOY_TV_IMAGE}
                    className='relative z-10' />

                <div className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-[73%]'>
                    <video
                        src={ENJOY_TV_VIDEO}
                        type='video/mp4'
                        autoPlay muted loop>
                    </video>
                </div>
            </div>
        </SectionLayout>
    )
}

export default SectionEnjoy