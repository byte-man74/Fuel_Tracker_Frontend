const process_station = (station) => {
    const images = [
        { name: "default", image: require('../images/BACKGROUNDS/default.jpeg') },
        { name: "NNPC", image: require('../images/BACKGROUNDS/NNPC Filling stations.jpg') },
        { name: "AMMASCO", image: require('../images/BACKGROUNDS/AMMASCO.jpeg') },
        { name: "A.Y. MAI KIFI OIL AND GAS LTD", image: require('../images/BACKGROUNDS/A.Y. MAI KIFI OIL AND GAS LTD.jpg') },
        { name: "AA RANO", image: require('../images/BACKGROUNDS/AA RANO_cover.jpg') },
    ];
  
    // Find the image object with a partial name match
    const matchedImage = images.find((img) => station.name.includes(img.name));
  
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
      id: station.id,
      name: station.name,
      price: station.price.amount,
      address: station.address, // Shorten this guy
      traffic: traffic_status, // Add a check here 
      image: activeImage.image,
      time_posted: station.time_posted,
      votes: station.votes
    };
  
    // Return the resulting data
    return data;
  };
  
  export default process_station