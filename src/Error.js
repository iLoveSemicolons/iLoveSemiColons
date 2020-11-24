import React from 'react';
import styles from "./error.module.scss";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";


export default function Error() {
    return (


        <PageLayout>
            <MainLayout>

                <div className={styles.errorContainer}>
                    <Helmet>
                        <title>Page not found - 404 </title>
                        <meta name="robots" content="noIndex"/>
                    </Helmet>

                    <div className={styles.textCode}>
                        <span className={styles.textCodeLeft}>4</span>
                        <span className={styles.textCodeMiddle}>0</span>
                        <span className={styles.textCodeRight}>4</span>
                    </div>
                    <div className={styles.text}>
                        Page not found
                    </div>
                    <div>
                        <Link to={"../../"}>
                            <button className={styles.button404}>
                                Go to homepage =>
                            </button>
                        </Link>
                    </div>
                </div>
            </MainLayout>
        </PageLayout>
    );
}