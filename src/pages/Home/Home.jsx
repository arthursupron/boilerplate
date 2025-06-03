import CommunitySection from '@/common/components/CommunitySection';
import FeedbackSection from '@/common/components/FeedbackSection';
import Footer from '@/common/components/Footer';
import Header from '@/common/components/Header';
import HeroSection from '@/common/components/HeroSection';
import HowItWorksSection from '@/common/components/HowItWorksSection';
import UseCaseSection from '@/common/components/UseCaseSection';

import styles from './Home.module.css';

const Home = () => (
    <div className={styles.container}>
        <Header />
        <main className={styles.main}>
            <HeroSection />
            <UseCaseSection />
            <HowItWorksSection />
            <FeedbackSection />
            <CommunitySection />
        </main>
        <Footer />
    </div>
);

export default Home;
