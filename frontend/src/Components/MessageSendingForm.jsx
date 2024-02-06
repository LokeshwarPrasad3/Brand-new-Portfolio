import { useState } from "react";
import "../CSS/MessageSendingForm.css";
import { ToastContainer, toast } from "react-toastify";
import { host } from "../Utils/APIHost";
import axios from "axios"

const MessageSendingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitMessage = (e) => {
    e.preventDefault();
    if (!name.length > 5) {
      toast.error("Name must more than 5 characters!", { autoClose: 3000 });
      return;
    }
    if (!email || !message) {
      toast.error("Fill all fields!", { autoClose: 3000 });
      return;
    }
    console.log(`name : ${name} | email: ${email} | message : ${message}`)

    // post request to admin
    // const config = {
    //   headers: {
    //     "Accept" : "application/json"
    //   }
    // }
    // const postData = { name, email, message };
    // const { data } = axios.post(`${host}/endpoint`, postData, config)

    toast.success("Successfully Sent", { autoClose: 3000 });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="message_send_container w-full flex justify-center my-4 mb-14 items-center font-overpass">
        <div className="login-box ">
          <h2 className="text-xl">
            <ion-icon
              name="chatbubble-ellipses-outline"
              style={{ position: "relative", top: "2px", paddingRight: "4px" }}
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
                  setMessage(e.target.value);
                }}
                id="message_box"
                placeholder="Message"
                value={message}
              ></textarea>
            </div>
            <button onClick={submitMessage}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr className="opacity-20" />
      <ToastContainer />
    </>
  );
};

export default MessageSendingForm;
