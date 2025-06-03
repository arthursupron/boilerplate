import { useEffect } from 'react';

const MOBILE_SCREEN_SIZE = 1024;

export const useIsMobile = ({ setIsMobile }) => {
    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= MOBILE_SCREEN_SIZE);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);
};
