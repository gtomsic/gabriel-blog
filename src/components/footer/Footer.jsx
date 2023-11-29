import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => {
   return (
      <div className={styles.container}>
         <div className={styles.info}>
            <div className={styles.logo}>
               <Image src='/logo.png' alt='gabes blog' width={50} height={50} />
               <h1 className={styles.logoText}>GabesBlog</h1>
            </div>
            <p className={styles.description}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
               vero, rem, molestias mollitia perferendis blanditiis velit autem
               odit assumenda unde a vitae id, distinctio iste sequi suscipit
               quasi laborum. Voluptas?
            </p>
            <div className={styles.icons}>
               <Image src='/facebook.png' alt='' width={18} height={18} />
               <Image src='/instagram.png' alt='' width={18} height={18} />
               <Image src='/tiktok.png' alt='' width={18} height={18} />
               <Image src='/youtube.png' alt='' width={18} height={18} />
            </div>
         </div>
         <div className={styles.links}>
            <div className={styles.list}>
               <span className={styles.listTitle}>Links</span>
               <Link href='/'>Homepage</Link>
               <Link href='/blog'>Blog</Link>
               <Link href='/about'>About</Link>
               <Link href='/contact'>Homepage</Link>
            </div>
            <div className={styles.list}>
               <span className={styles.listTitle}>Tags</span>
               <Link href='/'>Style</Link>
               <Link href='/'>Fashion</Link>
               <Link href='/'>Coding</Link>
               <Link href='/'>Travel</Link>
               <Link href='/'>Culture</Link>
               <Link href='/'>Food</Link>
            </div>
            <div className={styles.list}>
               <span className={styles.listTitle}>Social</span>
               <Link href='/'>Facebook</Link>
               <Link href='/'>Instagram</Link>
               <Link href='/'>Tiktok</Link>
               <Link href='/'>Youtube</Link>
            </div>
         </div>
      </div>
   );
};
export default Footer;
