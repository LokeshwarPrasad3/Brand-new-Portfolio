import { useEffect } from 'react';
import MessageSendingForm from '../Components/MessageSendingForm';
import SocialMedia from '../Components/SocialMedia';

const ContactPage = () => {
  // change title when about page
  useEffect(() => {
    document.title = 'Contact Me • Lokeshwar Prasad Dewangan';
  }, []);

  return (
    <>
      <MessageSendingForm />
      <SocialMedia />
    </>
  );
};

export default ContactPage;
