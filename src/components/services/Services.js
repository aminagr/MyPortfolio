"use client";
import React from 'react';
import ItemsServices from './ItemsServices'; 
import MiniServices from './MiniServices'; 
import styles from './Services.module.css'; 

const Services = () => {
    return (
        <div className={styles.servicesWrapper}>
           
           
            <ItemsServices />
     
        </div>
    );
};

export default Services;
