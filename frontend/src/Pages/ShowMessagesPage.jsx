import React, { useCallback, useEffect, useState } from "react";
import MessageComponent from "../Components/MessageComponent";
// import { temporaryMessages } from "../Utils/tempMessage";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { host } from "../Utils/APIHost";

const ShowMessagesPage = () => {
  const navigate = useNavigate();
  const [userAllMessages, setUserAllMessages] = useState([]);
  const secretCode = "yn";
  const loadAllMessages = useCallback(async () => {
    try {
      const response = await axios.get(`${host}/users/get-messages`);
      const data = response.data.data;
      const { success, message } = response.data;
      setUserAllMessages(data, success, message);
      toast.success("All Message Received!", { autoClose: 1000 });
    } catch (error) {
      toast.error("Something went wrong!", { autoClose: 2000 });
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const codeReply = window.prompt("What is Secret Code?");
    console.log(codeReply)
    if (codeReply !== secretCode) {
      toast.error("Wrong Secret code!", { autoClose: 1000 });
      navigate("/");
      return;
    } else {
      loadAllMessages();
    }
  }, []);

  return (
    <>
      <div className="show_message_container">
        {userAllMessages.map((messageContent, index) => {
          return (
            <React.Fragment key={index}>
              <MessageComponent messageContent={messageContent} />
            </React.Fragment>
          );
        })}
      </div>
      <ToastContainer />
    </>
  );
};

export default ShowMessagesPage;
