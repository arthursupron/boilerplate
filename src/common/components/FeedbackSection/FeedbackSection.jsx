import { DATA } from '@/common/data/data';

import Feedback from '../ui/Feedback';
import styles from './FeedbackSection.module.css';

export const FeedbackSection = () => (
    <section className={styles.feedbacks_section}>
        <h1 className={styles.header}>Loved by +36k people around the world ❤️</h1>
        <div className={styles.feedbacks}>
            {DATA.feedbacks.map(({ id, userInf, feedback, stars }) => (
                <Feedback
                    key={id}
                    user={userInf}
                    feedback={feedback}
                    stars={stars}
                />
            ))}
        </div>
    </section>
);
