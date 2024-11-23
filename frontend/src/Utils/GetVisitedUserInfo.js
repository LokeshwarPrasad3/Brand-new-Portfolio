export const getMyIp = async () => {
  try {
    const res = await fetch('https://ipinfo.io/json');
    const data = await res.json(); // Make sure to await the JSON response
    return data.ip;
  } catch (error) {
    console.error('Error getting IP address:', error); // Log the error
    return false;
  }
};

// Function to show the user's data
export const showMyData = async () => {
  try {
    const myCurrentIp = await getMyIp(); // Get the user's IP address

    // Make a request to a custom API with the IP address
    const apiUrl = `https://freeipapi.com/api/json/${myCurrentIp}`;
    const res = await fetch(apiUrl);
    const IpData = await res.json(); // Make sure to await the JSON response

    return IpData;
  } catch (error) {
    console.error('Error catch :', error); // Log any errors that occur during data retrieval or rendering
  }
};
