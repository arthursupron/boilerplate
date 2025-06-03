import { DATA } from '@/common/data/data';

import WorkExample from '../ui/WorkExample';
import styles from './HowItWorksSection.module.css';

export const HowItWorksSection = () => (
    <section className={styles.how_it_works_section}>
        <h1 className={styles.header}>Transform Your Learning</h1>
        <div className={styles.examples}>
            {DATA.howItWorks.map(({ id, img, header, description }) => (
                <WorkExample
                    key={id}
                    img={img}
                    header={header}
                    description={description}
                />
            ))}
        </div>
    </section>
);
