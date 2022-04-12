import React from 'react'
import './Custom.css'
import styles from './User.module.css'

export default function Style() {

const h2={ 
    color:"green",
    fontSize:"36px"
}

    return (
        <div>
{/* Global practice */}
            <h1 className='header'>Style Global Practice</h1> 
            {/* inline practice  */}
            <h2 style={h2} >Style inline Practice</h2>
            {/* module css used because inline can not psudeo class and external have name issue */}
            <h3 className={styles.text} >I am form module css</h3>  
        </div>
    )
}
