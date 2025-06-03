import { IMAGES } from '@/common/constants/images';

import AppstoreLogo from '../ui/AppstoreLogo';
import styles from './HeroSection.module.css';

export const HeroSection = () => (
    <section className={styles.hero}>
        <div className={styles.logo_img}>
            <img
                className={styles.logo_img}
                src={IMAGES.heroLogo.src}
                alt={IMAGES.heroLogo.alt}
            />
        </div>
        <div className={styles.hero_text}>
            <h1 className={styles.hero_header}>Turn anything into a podcast clip.</h1>
            <div className={styles.side_info}>
                <strong className={styles.side_info_header}>
                    The #1 app for auditory learners.
                </strong>
                <div className={styles.side_info_instruction}>
                    <h2>Add your notes, articles, PDFs, photos and </h2>
                    <h2>create clips in the style of your favorite podcasts</h2>
                </div>
            </div>
        </div>
        <div className={styles.hero_link}>
            <AppstoreLogo size='large' />
        </div>
        <div>
            <img
                className={styles.hero_img}
                src={IMAGES.heroImg.src}
                alt={IMAGES.heroImg.alt}
            />
        </div>
    </section>
);
