const process_station = (station) => {
    const images = [
        { name: "default", image: require('../images/BACKGROUNDS/default.jpeg') },
        { name: "NNPC", image: require('../images/BACKGROUNDS/NNPC.jpg') },
        { name: "AMMASCO", image: require('../images/BACKGROUNDS/AMMASCO.jpeg') },
        { name: "A.Y. MAI KIFI OIL AND GAS LTD", image: require('../images/BACKGROUNDS/A.Y. MAI KIFI OIL AND GAS LTD.jpg') },
        { name: "A.A", image: require('../images/BACKGROUNDS/aarano.jpg') },
        { name: "OANDO", image: require('../images/BACKGROUNDS/OANDO.jpg') },
        { name: "NIPCO", image: require('../images/BACKGROUNDS/NIPCO.jpg') },
        { name: "ETERNA", image: require('../images/BACKGROUNDS/ETERNA.jpeg') },
        { name: "MOBIL", image: require('../images/BACKGROUNDS/MOBIL.jpg') },
        { name: "TOTAL", image: require('../images/BACKGROUNDS/TOTAL.png') },
        { name: "AP", image: require('../images/BACKGROUNDS/AP_ARDOVA.jpg') },
        { name: "CONOIL", image: require('../images/BACKGROUNDS/CONOIL.jpg') },
    ];
  
    const timeSinceWithTime = (date) => {
        const seconds = Math.floor((new Date() - date) / 1000);
        const intervals = [
          { label: "year", value: 31536000 },
          { label: "month", value: 2592000 },
          { label: "day", value: 86400 },
          { label: "hour", value: 3600 },
          { label: "minute", value: 60 },
        ];
      
        for (let i = 0; i < intervals.length; i++) {
          const { label, value } = intervals[i];
          const count = Math.floor(seconds / value);
          if (count >= 1) {
            const time = new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return count === 1
              ? `updated a ${label} ago ${time}`
              : ` ${count} ${label}s ago... ${time}`;
          }
        }
      
        return "Last updated just now";
      };
      
      const dateTime = new Date(station.price.last_updated);
      const humanReadableDateTime = timeSinceWithTime(dateTime);
      

    //? Find the image object with a partial name match
    const matchedImage = images.find((img) => station.station.name.toUpperCase().includes(img.name.toUpperCase()));



    const maxAddressLength = 20;
    const shortenedAddress = station.station.address.substring(0, maxAddressLength);

    // Add "..." at the end of the address if it was shortened
    const address = station.station.address.length > maxAddressLength
        ? shortenedAddress + "..."
        : shortenedAddress;


    const get_traffic_rating = (traffic) => {
        const { terrible, average, good } = traffic;
      
        if (terrible > average && terrible > good) {
          return 1; // Terrible has the highest value
        } else if (average > terrible && average > good) {
          return 2; // Average has the highest value
        } else if (good > terrible && good > average) {
          return 3; // Good has the highest value
        } else {
          return 3;
        }
      };
      
 
    const traffic_status = get_traffic_rating(station.traffic)
    const activeImage = matchedImage ? matchedImage.image : images[0].image;
  
    const data = {
      id: station.station.id,
      name: station.station.name,
      price: station.price.amount,
      latitude: station.position.latitude,
      longitude: station.position.longitude,
      address: address, // Shorten this guy
      traffic: traffic_status, // Add a check here 
      image: activeImage,
      time_posted: humanReadableDateTime,
      votes: station.price.votes
    };
    // Return the resulting data
    return data;

  };
  
  export default process_station