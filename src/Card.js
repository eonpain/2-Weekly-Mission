import React from 'react';

function calculateTimeDifference(createdAt) {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const timeDifferenceInMinutes = Math.floor((now - createdDate) / (1000 * 60));

  if (timeDifferenceInMinutes < 2) {
    return '1 minute ago';
  } else if (timeDifferenceInMinutes <= 59) {
    return `${timeDifferenceInMinutes} minutes ago`;
  } else if (timeDifferenceInMinutes < 60 * 24) {
    const hours = Math.floor(timeDifferenceInMinutes / 60);
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  } else if (timeDifferenceInMinutes < 60 * 24 * 30) {
    const days = Math.floor(timeDifferenceInMinutes / (60 * 24));
    return days === 1 ? '1 day ago' : `${days} days ago`;
  } else if (timeDifferenceInMinutes < 60 * 24 * 30 * 12) {
    const months = Math.floor(timeDifferenceInMinutes / (60 * 24 * 30));
    return months === 1 ? '1 month ago' : `${months} months ago`;
  } else if (timeDifferenceInMinutes < 60 * 24 * 30 * 12 * 11) {
    const years = Math.floor(timeDifferenceInMinutes / (60 * 24 * 30 * 12));
    return years === 1 ? '1 year ago' : `${years} years ago`;
  } else {
    const years = Math.floor(timeDifferenceInMinutes / (60 * 24 * 30 * 12));
    return `${years} years ago`;
  }
}

function Card({ createdAt, link }) {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div onClick={handleClick}>
     <p>{calculateTimeDifference(createdAt)}</p>
    </div>
  );
}

export default Card;
