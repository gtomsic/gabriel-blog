'use client';
import Image from 'next/image';
import styles from './themeToggle.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
const ThemeToggele = () => {
   const { theme, toggle } = useContext(ThemeContext);
   return (
      <div
         className={styles.container}
         style={
            theme == 'dark'
               ? { background: 'white' }
               : { background: '#0f172a' }
         }
         onClick={toggle}
      >
         <Image src='/moon.png' alt='light' width={14} height={14} />
         <div
            className={styles.ball}
            style={
               theme == 'dark'
                  ? { left: 1, background: '#0f172a' }
                  : { right: 1, background: 'white' }
            }
         ></div>
         <Image src='/sun.png' alt='light' width={14} height={14} />
      </div>
   );
};
export default ThemeToggele;
