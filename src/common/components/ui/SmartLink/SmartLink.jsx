import { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './SmartLink.module.css';

export const SmartLink = memo(function SmartLink({ src, alt, to }) {
    return (
        <>
            <Link
                className={styles.link}
                to={to}
            >
                <img
                    className={styles.link_img}
                    data-case={alt.split(' ')[0]}
                    src={src}
                    alt={alt}
                />
            </Link>
        </>
    );
});
