
import ContactComp from '../../components/contact/Contact';
import ContactCard from '../../components/contact/ContactCard';
import ContactForm from '../../components/contact/ContactForm';
export default function Contact() {

  return (
<div>
  <br/>
  <h1> Contactez-moi</h1>
<br/>
     <ContactCard/>
     <h3 style={{ textAlign: 'center', color: '#555', fontFamily: '"Didact Gothic", sans-serif', fontSize: '25px' , paddingTop:'20px'}}>
    Envoyez-moi un message!
</h3>

    <ContactForm/>
    </div>
  );
  }
  