import React, { useState } from 'react'
import './Directory.styles.scss'

import { initialSections } from './initialSections'
import MenuItem from '../MenuItem'

const Directory = () => {
    const [ sections, setSections ] = useState( initialSections )

    return (
        <div className="directory-menu">
            {
                sections.map( ( { id, ...otherSectionProps } ) =>
                    <MenuItem key={ id } { ...otherSectionProps } /> )
            }
        </div>
    )
}

export default Directory