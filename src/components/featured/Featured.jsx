import Image from 'next/image';
import styles from './featured.module.css';

const Featured = () => {
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>
            <b>Hey, Gabriel is here!</b>{' '}
            <span>Discover my stories and shared ideas.</span>
         </h1>
         <div className={styles.post}>
            <div className={styles.imgContainer}>
               <Image src='/p1.jpeg' alt='Fetured' fill />
            </div>
            <div className={styles.textContainer}>
               <h1 className={styles.postTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur, vero, et odio minima.
               </h1>
               <p className={styles.postDescription}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  quos nulla ex eius excepturi molestiae quam tenetur ducimus
                  optio. Nam quasi odio placeat cumque impedit excepturi sed
                  unde exercitationem ad!
               </p>
               <button className={styles.button}>Read More</button>
            </div>
         </div>
      </div>
   );
};
export default Featured;
