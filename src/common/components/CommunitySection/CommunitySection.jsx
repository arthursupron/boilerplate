import { DATA } from '@/common/data/data';

import AppstoreLogo from '../ui/AppstoreLogo';
import SmartLink from '../ui/SmartLink';
import styles from './CommunitySection.module.css';

export const CommunitySection = () => (
    <section className={styles.community_section}>
        <h1 className={styles.header}>Join our community</h1>
        <AppstoreLogo size='default' />
        <div className={styles.community_links}>
            {DATA.communityLinks.map(({ id, img, to }) => (
                <SmartLink
                    key={id}
                    src={img.src}
                    alt={img.alt}
                    to={to}
                />
            ))}
        </div>
    </section>
);
