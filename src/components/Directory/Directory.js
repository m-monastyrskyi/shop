import React from 'react'
import './Directory.styles.scss'

import MenuItem from '../MenuItem'
import { useSelector } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

const Directory = () => {
    const sections = useSelector(selectDirectorySections)

    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherSectionProps }) =>
                    <MenuItem key={id} {...otherSectionProps} />)
            }
        </div>
    )
}

export default Directory