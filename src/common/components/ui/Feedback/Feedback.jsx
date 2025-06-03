import { memo } from 'react';

import { IMAGES } from '@/common/constants/images';

import styles from './Feedback.module.css';

export const Feedback = memo(function Feedback({ user, feedback, stars }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.user_inf}>
                    <div className={styles.user_img_container}>
                        <img
                            className={styles.user_img}
                            src={user.img.src}
                            alt={user.img.alt}
                        />
                    </div>
                    <div className={styles.user_text}>
                        <p className={styles.user_name}>{user.name}</p>
                        <p className={styles.user_nickname}>{user.nickname}</p>
                    </div>
                </div>
                <p className={styles.feedback}>{feedback}</p>
                <div className={styles.stars}>
                    {stars !== 5 ? (
                        ''
                    ) : (
                        <>
                            <div className={styles.stars_container}>
                                <img
                                    className={styles.stars_img}
                                    src={IMAGES.startsImg.src}
                                    alt={IMAGES.startsImg.alt}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
});
