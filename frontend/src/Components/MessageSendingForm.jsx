import "../CSS/MessageSendingForm.css";
  import { ToastContainer, toast } from "react-toastify";

const MessageSendingForm = () => {

  const submitMessage = () => {
    toast.success("Successfully Sent", {autoClose: 3000})
  }

  return (
    <>
      <div class="login-box">
        <h2 className="text-2xl" >Send Me Message</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" placeholder="Your Name" />
            {/* <label className="text-xl" >Your Name</label> */}
          </div>
          <div class="user-box">
            <input type="text" name="" required="" placeholder="Your Email" />
            {/* <label className="text-xl" >Email</label> */}
          </div>
          <div class="user-box">
            <input type="text" name="" required="" placeholder="Message" />
            {/* <label className="text-xl" >Message</label> */}
          </div>
          <button onClick={submitMessage} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
      <ToastContainer/>
    </>
  );
};

export default MessageSendingForm;
