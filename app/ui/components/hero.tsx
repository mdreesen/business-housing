// "use client";
import React from 'react';
import Image from 'next/image';
import styles from '../styles/hero.module.css';
import { atRule } from 'postcss';

export default function hero({
  video,
  source,
  image,
  imageTitle,
  altTitle,
}: {
  video?: boolean;
  image?: boolean;
  source: string;
  imageTitle?: string;
  altTitle?: string | undefined;
}) {

  // useEffect(() => {
  //   const video: HTMLElement | null = document.getElementById("autoplay");
  //   if (video != null) video?.play();
  // }, []);

  return (
    <div className='w-full'>
      {video && (
        <div className={styles['heroContainer']}>
          <video autoPlay loop muted playsInline width='250' className={styles['hero']} id="autoplay">
            <source src={source} type='video/webm' />
          </video>
        </div>
      )}
      {image && (
        <div className={styles['heroContainer']}>
          <Image
            className={styles['backgroundImg']}
            src={source}
            alt={altTitle ?? ''}
            fill
            priority
          />
          <h1 className={styles['title']}>{imageTitle}</h1>
        </div>
      )}
    </div>
  );
};

