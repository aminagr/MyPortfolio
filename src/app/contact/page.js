
import ContactComp from '../../components/contact/Contact';
import ContactCard from '../../components/contact/ContactCard';
import ContactForm from '../../components/contact/ContactForm';
export default function Contact() {

  return (
<div>
  <br/>
  <h1 style={{ background: 'linear-gradient(to right, #E26D5C, #FFB6C1)', color: 'white', padding: '20px 0' }}>Contactez-moi</h1>

<br/>
     <ContactCard/>
     <h3 style={{ textAlign: 'center', color: '#555', fontFamily: '"Didact Gothic", sans-serif', fontSize: '25px' , paddingTop:'20px'}}>
    Envoyez-moi un message!
</h3>

    <ContactForm/>
    </div>
  );
  }
  