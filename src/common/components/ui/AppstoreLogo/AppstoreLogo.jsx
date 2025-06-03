import { memo } from 'react';
import { Link } from 'react-router-dom';

import { IMAGES } from '@/common/constants/images';

import styles from './AppstoreLogo.module.css';

export const AppstoreLogo = memo(function AppstoreLogo({ size }) {
    return (
        <>
            <Link
                to='#'
                className={styles.appstore_link}
            >
                <img
                    src={IMAGES.appstoreLogo.src}
                    alt={IMAGES.appstoreLogo.alt}
                    className={styles.appstore_img}
                    style={{
                        width: size === 'default' ? '120px' : '200px',
                        height: size === 'default' ? '40px' : '60px',
                    }}
                />
            </Link>
        </>
    );
});
