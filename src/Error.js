import React from 'react';
import styles from "./error.module.scss";
import {Link} from "react-router-dom";


export default function Error() {
    return (
        <div className={styles.errorContainer}>


            <div className={styles.textCode}>
                <span className={styles.textCodeLeft}>4</span>
                <span className={styles.textCodeMiddle}>0</span>
                <span className={styles.textCodeRight} >4</span>
            </div>
            <div className={styles.text} >
                Page unfound
            </div>
            <div>
                <Link to={"../../"}>
                    <button className={styles.button404}>
                        Go to homepage =>
                    </button>
                </Link>
            </div>
        </div>
    );
}