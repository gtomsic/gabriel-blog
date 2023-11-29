import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
   return (
      <div className={styles.container}>
         <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} />
         </div>
         <div className={styles.textContainer}>
            <div className={styles.detail}>
               <span className={styles.date}>10.02.2023 - </span>
               <span className={styles.category}>CULTURE</span>
            </div>
            <Link href='/'>
               <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            </Link>
            <p className={styles.description}>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Aperiam, temporibus ducimus! Ipsa mollitia, voluptatum dicta
               soluta recusandae vero ipsam nostrum voluptate non modi, totam
               voluptatibus at unde obcaecati odio ad.
            </p>
            <Link href='/' className={styles.link}>
               Read More
            </Link>
         </div>
      </div>
   );
};
export default Card;
