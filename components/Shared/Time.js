function formatDateString(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    return `${year}-${month}-${day}`;
  }
  function calculateElapsedTime(dateString) {
    const currentDate = new Date();
    const targetDate = new Date(dateString);
  
    const timeDifference = currentDate - targetDate;
    const elapsedMinutes = Math.floor(timeDifference / (1000 * 60));
  
    return elapsedMinutes;
  }

  export { formatDateString, calculateElapsedTime }