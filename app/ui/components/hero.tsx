import React from 'react';
import Image from 'next/image';
import styles from '../styles/hero.module.css';

export default function hero({
  video,
  source,
  image,
  imageTitle,
}: {
  video?: boolean;
  image?: boolean;
  source: string;
  imageTitle?: string;
}) {

  return (
    <div className='w-full'>
      {video && (
        <div className={styles['heroContainer']}>
          <video autoPlay width='250' loop muted className={styles['hero']}>
            <source src={source} type='video/mp4' />
          </video>
        </div>
      )}
      {image && (
        <div className={styles['heroContainer']}>
          <Image
            className={styles['backgroundImg']}
            src={`/images/background/${source}.webp`}
            alt={source}
            fill
            priority
          />
          <h1 className={styles['title']}>{imageTitle}</h1>
        </div>
      )}
    </div>
  );
}
