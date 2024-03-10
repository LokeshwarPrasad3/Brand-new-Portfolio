import { useCallback, useEffect, useState } from "react";
import { showMyData } from "../Utils/GetVisitedUserInfo";
import axios from "axios";
import { host } from "../Utils/APIHost";
import Cookies from "js-cookie";

const VisitedUser = () => {
  const [visitedUsers, setVisitedUsers] = useState("-");

  const getVisiters = useCallback(async () => {
    const response = await axios.get(`${host}/visitor/get-visitors`);
    const data = response.data;
    // console.log(data.data);
    const totalVisit = data.data[0].totalVisitors + 1;
    setVisitedUsers(totalVisit);
  }, []);

  const postVisiterDetails = useCallback(async () => {
    const IpData = await showMyData();
    const {
      ipVersion,
      ipAddress,
      latitude,
      longitude,
      countryName,
      countryCode,
      timeZone,
      zipCode,
      cityName,
      regionName,
      continent,
    } = IpData;

    // check that not be empty
    if (
      !ipVersion ||
      !ipAddress ||
      !latitude ||
      !longitude ||
      !countryName ||
      !countryCode ||
      !timeZone ||
      !zipCode ||
      !cityName ||
      !regionName ||
      !continent
    ) {
      // Respond with a 400 Bad Request status and an error message
      console.log("Empty values");
      return;
    }

    // console.log(IpData);
    // Post request to your server and await the JSON response
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${host}/visitor/save-visitor`,
      {
        isVisited: true,
        ipAddress,
        countryName,
        zipCode,
        cityName,
        regionName,
        continent,
      },
      config
    );
    const data = response.data;
    // console.log(data);
  }, []);

  useEffect(() => {
    // cookie already exist
    const cookie = Cookies.get("uniqueVisiter");
    if (!cookie) {
      Cookies.set("uniqueVisiter", true, { expires: 3 });
      postVisiterDetails();
    }
    getVisiters();
  }, []);

  return (
    <>
      <div className="visited_user_container text-gray-400 flex justify-center items-center text-md font-overpass mt-10">
        <p className="">VISITED USER :&nbsp;</p>
        <b>{visitedUsers}</b>
      </div>
    </>
  );
};

export default VisitedUser;
