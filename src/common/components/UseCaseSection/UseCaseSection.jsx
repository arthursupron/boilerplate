import { DATA } from '@/common/data/data';

import styles from './UseCaseSection.module.css';

export const UseCaseSection = () => (
    <section className={styles.use_case_section}>
        <h1 className={styles.header}>Trusted by +36k students & professionals</h1>
        <div className={styles.use_cases}>
            {DATA.useCases.map(({ id, src, alt }) => (
                <div
                    key={id}
                    className={styles.img_container}
                >
                    <img
                        className={styles.img}
                        src={src}
                        alt={alt}
                    />
                </div>
            ))}
        </div>
    </section>
);
