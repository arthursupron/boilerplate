import { Link } from 'react-router-dom';

import { IMAGES } from '@/common/constants/images';
import { scrollToTop } from '@/common/utils/scrollToTop';

import styles from './Footer.module.css';

export const Footer = () => (
    <footer className={styles.footer}>
        <button
            className={styles.logo_link}
            onClick={scrollToTop}
        >
            <img
                src={IMAGES.mainLogo.src}
                alt={IMAGES.mainLogo.alt}
                className={styles.logo_img}
            ></img>
        </button>
        <div className={styles.links}>
            <div className={styles.links_block}>
                <h3 className={styles.header}>Download</h3>
                <ul className={styles.list_container}>
                    <li className={styles.li}>
                        <Link to='#'>For Iphone</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to='#'>For Android (Soon)</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.links_block}>
                <h3 className={styles.header}>Socials</h3>
                <ul className={styles.list_container}>
                    <li className={styles.li}>
                        <Link to='#'>TikTok</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to='#'>Instagram</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to='#'>Youtube</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to='#'>Twitter/X</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to='#'>LinkedIn</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to='#'>Discord</Link>
                    </li>
                </ul>
            </div>
        </div>
        <p className={styles.copyright}>© 2025 Clippit. All rights reserved.</p>
    </footer>
);
