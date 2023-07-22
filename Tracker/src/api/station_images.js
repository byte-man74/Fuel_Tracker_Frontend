const process_station = (station) => {
    const images = [
        { name: "default", image: require('../images/BACKGROUNDS/default.jpeg') },
        { name: "NNPC", image: require('../images/BACKGROUNDS/NNPC Filling stations.jpg') },
        { name: "AMMASCO", image: require('../images/BACKGROUNDS/AMMASCO.jpeg') },
        { name: "A.Y. MAI KIFI OIL AND GAS LTD", image: require('../images/BACKGROUNDS/A.Y. MAI KIFI OIL AND GAS LTD.jpg') },
        { name: "AA RANO", image: require('../images/BACKGROUNDS/AA RANO_cover.jpg') },
    ];
  
    const dateTime = new Date(station.price.last_updated);

    // Create a formatter using the Intl.DateTimeFormat API
    const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
    });
    const humanReadableDateTime = formatter.format(dateTime);

    //? Find the image object with a partial name match
    const matchedImage = images.find((img) => station.station.name.includes(img.name));
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
    const activeImage = matchedImage ? matchedImage.image : images[0];

  
    const data = {
      id: station.station.id,
      name: station.station.name,
      price: station.price.amount,
      address: address, // Shorten this guy
      traffic: traffic_status, // Add a check here 
      image: activeImage.image,
      time_posted: humanReadableDateTime,
      votes: station.price.votes
    };
    // Return the resulting data
    return data;

  };
  
  export default process_station