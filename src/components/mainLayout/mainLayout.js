import React from 'react'
import styles from './mainLayout.module.scss'

export default function MainLayout({children}) {
    return (
        <div className={styles.mainLayout}>
            {children}
        </div>
    );
}