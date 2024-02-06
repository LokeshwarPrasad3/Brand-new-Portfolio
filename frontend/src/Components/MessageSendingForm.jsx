import "../CSS/MessageSendingForm.css";
import { ToastContainer, toast } from "react-toastify";

const MessageSendingForm = () => {
  const submitMessage = (e) => {
    e.preventDefault();
    toast.success("Successfully Sent", { autoClose: 3000 });
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
              Message
              Me
          </h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" placeholder="Your Name" />
              {/* <label className="text-xl" >Your Name</label> */}
            </div>
            <div className="user-box">
              <input type="text" name="" required="" placeholder="Your Email" />
              {/* <label className="text-xl" >Email</label> */}
            </div>
            <div className="user-box">
              <input type="text" name="" required="" placeholder="Message" />
              {/* <label className="text-xl" >Message</label> */}
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
