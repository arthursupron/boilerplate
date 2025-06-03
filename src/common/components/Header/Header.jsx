import { useState } from 'react';
import { Link } from 'react-router-dom';

import { burgerIcon, crossIcon } from '@/common/constants/icons';
import { IMAGES } from '@/common/constants/images';
import { useIsMobile } from '@/common/hooks/useIsMobile';
import { scrollOpportunity } from '@/common/utils/scrollOpportunity';

import AppstoreLogo from '../ui/AppstoreLogo';
import styles from './Header.module.css';

export const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useIsMobile({ setIsMobile: setIsMobile });

    const openMenu = () => {
        scrollOpportunity(true);
        setMenuOpen(true);
    };
    const closeMenu = () => {
        scrollOpportunity(false);
        setMenuOpen(false);
    };

    return (
        <>
            <header className={`${styles.header} ${menuOpen && isMobile ? styles.open : ''}`}>
                <div className={styles.container}>
                    <div className={styles.logo_link}>
                        <Link
                            to='#'
                            className={styles.logo_link}
                        >
                            <img
                                src={IMAGES.mainLogo.src}
                                alt={IMAGES.mainLogo.alt}
                                className={styles.logo_img}
                            ></img>
                        </Link>
                    </div>
                    <div className={styles.logo_link}>
                        {isMobile ? (
                            <>
                                {menuOpen ? (
                                    <>
                                        <button
                                            onClick={closeMenu}
                                            className={styles.close_btn}
                                        >
                                            {crossIcon}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={openMenu}
                                            className={styles.burger_btn}
                                        >
                                            {burgerIcon}
                                        </button>
                                    </>
                                )}
                            </>
                        ) : (
                            <AppstoreLogo size='default' />
                        )}
                    </div>
                    {isMobile && menuOpen && (
                        <div className={styles.menu_panel}>
                            <AppstoreLogo size='default' />
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};
