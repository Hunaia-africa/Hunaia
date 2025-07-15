"use client"

import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './maintenance.module.css';

export default function Maintenance() {
  const [dots, setDots] = useState('...');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Under Maintenance</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>We are currently under maintenance{dots}</h1>
          <p className={styles.subtitle}>We will be back shortly. Thank you for your patience.</p>
          <div className={styles.spinner}></div>
        </div>
      </div>
    </>
  );
}