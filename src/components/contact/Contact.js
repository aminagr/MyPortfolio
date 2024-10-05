import styles from './Contact.module.css';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.title}>Contactez-moi</h1>
            <p className={styles.subtitle}>
                Si vous êtes intéressés par l’un de mes services, contactez-moi pour un devis personnalisé!
            </p>
          
            <ContactForm />
        </div>
    );
}
