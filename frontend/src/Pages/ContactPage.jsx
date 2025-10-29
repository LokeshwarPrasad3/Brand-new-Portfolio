import { useEffect } from 'react';
import MessageSendingForm from '../Components/MessageSendingForm';
import SocialMedia from '../Components/SocialMedia';

const ContactPage = () => {
  // change title when about page
  useEffect(() => {
    document.title = 'Contact Me • Lokeshwar Prasad Dewangan';
  }, []);

  return (
    <div className="contactus_container h-full flex justify-center items-center flex-col min-h-[calc(100svh-80px)]">
      <MessageSendingForm />
      <SocialMedia />
    </div>
  );
};

export default ContactPage;
