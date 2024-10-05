import React from 'react';
import styles from './bio.module.css';

const Bio = () => {
    return (
        <div className={styles.bioContainer}>
            <div className={styles.textSection}>
                <h1 className={styles.title}>Je suis Amina</h1>
                <h2 className={styles.subtitle}>Développeuse web & traductrice</h2>
                <p className={styles.paragraph}>
                    Je suis Amina, ingénieur en Technologies de l’information. Je suis titulaire d’une licence en systèmes informatiques et d’un master en technologies de l’information.
                </p>
                <p className={styles.paragraph}>
                    En tant que développeuse web full stack, je crée des sites web qui allient esthétique et fonctionnalité. Que ce soit pour des sites vitrines, des applications de gestion ou des plateformes e-commerce, je m’engage à produire des solutions innovantes et sur mesure.
                </p>
                <p className={styles.paragraph}>
                    En parallèle de mon expertise en développement web, je suis également passionnée par la traduction et la rédaction. J’offre des services de rédaction de tout type de contenu, de relecture et de traduction, je suis capable de naviguer avec précision entre les langues pour capturer le sens et la nuance de chaque texte. Cliquez ici pour découvrir les langues que je parle.
                </p>
            </div>
            <div className={styles.imageSection}>
                <img src="/images/aminadev2.png" alt="Amina" className={styles.image} />
            </div>
        </div>
    );
};

export default Bio;
