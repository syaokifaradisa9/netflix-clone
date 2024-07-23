import React from 'react'
import { Children } from 'react'

export const EachUtils = ({ of, render }) => {
    return <>
        {Children.toArray(of.map((item, index) => render(item, index)))}
    </>
}
export default EachUtils