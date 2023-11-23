"use client";
import React, { useEffect } from 'react';
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

  useEffect(() => {
    const video = document.getElementById('autoplay') as HTMLInputElement | null;
    if (video != null) {
      video?.play(); 
    }
  }, []);

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
