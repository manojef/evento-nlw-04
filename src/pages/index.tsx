import React from "react";
import Head from 'next/head';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from "../components/Profile";
import styles from '../styles/components/Home.module.css';
import { DesafioCompletado } from "../components/DesafioCompletado";
import { CountDown } from "../components/CountDown";

import head from 'next/head';
import { linkSync } from "fs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>  
      </Head>      
      <ExperienceBar/> 
      <section>
        <div>
          <Profile/>
          <DesafioCompletado/>
          <CountDown/>
        </div>
        <div>
        
        </div>      
      </section> 
    </div>
  )    
}
