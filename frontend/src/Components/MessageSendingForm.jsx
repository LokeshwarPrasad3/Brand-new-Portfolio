import { useState } from 'react';
import '../CSS/MessageSendingForm.css';
import { ToastContainer, toast } from 'react-toastify';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { host } from '../Utils/APIHost';
import axios from 'axios';
import ConfettiButton from './Animation/ConfettiBottom';

const MessageSendingForm = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const submitMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name.length > 5) {
      toast.error('Name must more than 5 characters!', { autoClose: 2000 });
      setLoading(false);
      return;
    }
    if (!email || !contactMessage) {
      toast.error('Fill all fields!', { autoClose: 2000 });
      setLoading(false);
      return;
    }
    console.log(
      `name : ${name} | email: ${email} | contactMessage : ${contactMessage}`
    );
    try {
      // post request to admin
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const postData = { name, email, message: contactMessage };
      const response = await axios.post(
        `${host}/users/save-message`,
        postData,
        config
      );
      const data = response.data;
      const { statusCode, success, message } = response.data;

      if (!success) {
        console.log('Not success');
        toast.error('Something went wrong!', { autoClose: 2000 });
        setLoading(false);
        return;
      }

      // console.log(`Data is : ${data.name}`);
      // console.log(`Data is : ${data.message}`);
      // console.log(`Data is : ${data.email}`);
      // console.log(`Data is : ${statusCode}`);
      // console.log(`Data is : ${statusCode}`);
      // console.log(`Data is : ${message}`);
      toast.success('Successfully Sent', { autoClose: 2000 });
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, [2000]);
      setName('');
      setEmail('');
      setContactMessage('');
      setLoading(false);
    } catch (error) {
      console.log(`Something went wrong ${error}`);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="message_send_container w-full flex justify-center my-4 mb-7 items-center font-karla flex-col gap-8">
        <div className="login-box ">
          <h2 className="text-xl">
            <ion-icon
              name="chatbubble-ellipses-outline"
              style={{ position: 'relative', top: '2px', paddingRight: '4px' }}
            ></ion-icon>
            Message Me
          </h2>
          <form>
            <div className="user-box">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                value={name}
                placeholder="Your Name"
              />
            </div>
            <div className="user-box">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                value={email}
                placeholder="Your Email"
              />
            </div>
            <div className="user-box">
              <textarea
                onChange={(e) => {
                  setContactMessage(e.target.value);
                }}
                id="message_box"
                placeholder="Message"
                value={contactMessage}
              ></textarea>
            </div>
            {loading ? (
              <Stack
                sx={{
                  color: 'grey.500',
                  position: 'relative',
                  top: '2rem',
                  left: '5rem',
                }}
                spacing={2}
                direction="row"
              >
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
              </Stack>
            ) : (
              <button onClick={submitMessage} className="w-32 h-11">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </button>
            )}
          </form>
        </div>
        <p className="text-white opacity-50 font-karla">
          You also receive acknowledgement
        </p>
      </div>
      <hr className="opacity-20" />
      <ToastContainer />
      <ConfettiButton showEffect={showConfetti} />
    </>
  );
};

export default MessageSendingForm;
