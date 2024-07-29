import { useCallback, useEffect, useState } from "react";
// import { showMyData } from "../Utils/GetVisitedUserInfo";
import axios from "axios";
import { host } from "../Utils/APIHost";
import Cookies from "js-cookie";

const VisitedUser = () => {
  const [visitedUsers, setVisitedUsers] = useState("-");

  // get current visitors
  const getVisitersCount = useCallback(async () => {
    const { data } = await axios.get(`${host}/visitor/get-visitors-count`);
    // console.log("data", data);
    const countVisitors = data.data;
    setVisitedUsers(countVisitors);
  }, []);

  const increaseVisitorCount = useCallback(async () => {
    // Post request to your server and await the JSON response
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${host}/visitor/increasement-visitor`,
      {
        isVisited: true,
      },
      config
    );
    const data = response.data;
    console.log(data);
  }, []);

  useEffect(() => {
    // cookie already exist
    const cookie = Cookies.get("uniqueVisiter");
    if (!cookie) {
      Cookies.set("uniqueVisiter", true, { expires: 3 });
      increaseVisitorCount();
    }
    getVisitersCount();
  }, []);

  return (
    <>
      <div className="visited_user_container text-gray-400 flex justify-center items-center text-md font-overpass mt-10">
        <p className="">VISITED USERS :&nbsp;</p>
        <b>{visitedUsers}</b>
      </div>
    </>
  );
};

export default VisitedUser;
