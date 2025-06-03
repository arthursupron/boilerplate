import { memo } from 'react';

import styles from './WorkExample.module.css';

export const WorkExample = memo(function WorkExample({ img, header, description }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.img_container}>
                    <img
                        src={img.src}
                        alt={img.alt}
                        className={styles.img}
                    />
                </div>
                <div className={styles.text}>
                    <h2 className={styles.header}>{header}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </>
    );
});
