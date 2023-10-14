const simulateApiCall = (setRefreshing) => {
    setRefreshing(true);
  
    // Simulate an API call or data fetching
    setTimeout(() => {
      // After fetching data, set refreshing to false
      setRefreshing(false);
    }, 2000); // Adjust the delay as needed
  };
  
  export default simulateApiCall;
  