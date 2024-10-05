"use client";
import React from 'react';
import styles from './Services.module.css'; // Assurez-vous que le chemin est correct
import { FaShoppingCart, FaDesktop, FaCog, FaLanguage, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

const itemsServicesData = [
    {
        id: 1,
        icon: <FaShoppingCart />,
        title: 'Sites E-commerce',
        description: 'Boostez vos ventes en ligne avec une boutique performante et sécurisée, offrant une expérience d\'achat fluide à vos clients.',
    },
    {
        id: 2,
        icon: <FaDesktop />,
        title: 'Sites vitrines',
        description: 'Mettez en avant votre entreprise avec un site vitrine moderne et élégant qui présente vos services et vos informations clés de manière claire et attractive.',
    },
    {
        id: 3,
        icon: <FaCog />,
        title: 'Applications de gestion',
        description: 'Optimisez, automatisez et simplifiez la gestion de votre entreprise avec des applications sur mesure.',
    },
    {
        id: 4,
        icon: <FaLanguage />,
        title: 'Traduction',
        description: 'Touchez une audience internationale avec mes services de traduction précis et adaptés culturellement, garantissant un message clair et cohérent.',
    },
    {
        id: 5,
        icon: <FaFileAlt />,
        title: 'Rédaction',
        description: 'Faites la différence avec du contenu percutant et engageant. Je crée des textes sur mesure qui captivent votre audience et renforcent votre présence en ligne.',
    },
    {
        id: 6,
        icon: <FaCheckCircle />,
        title: 'Relecture et Correction',
        description: 'Assurez-vous d\'un contenu impeccable grâce à mon service de relecture et correction.',
    },
];

const ItemsServices = () => {
    return (
        <section className={styles.services}>
            <h2 className={styles.title}>Mes Services</h2>
            <div className={styles.servicesContainer}>
                {itemsServicesData.map(service => (
                    <div key={service.id} className={styles.serviceItem}>
                        <div className={styles.icon}>{service.icon}</div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ItemsServices;
