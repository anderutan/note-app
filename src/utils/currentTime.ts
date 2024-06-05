function formatCurrentTime() {
  const date = new Date();

  // Options for the date part
  const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };

  // Format the date part
  const formattedDate = date.toLocaleDateString('en-GB', dateOptions);

  // Get the hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes();

  // Determine AM or PM
  const ampm = hours >= 12 ? 'pm' : 'am';

  // Convert 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format minutes with leading zero if needed
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  // Combine time part
  const formattedTime = `${hours}.${formattedMinutes}${ampm}`;

  // Return date and time parts as properties
  return {
    date: formattedDate,
    time: formattedTime,
  };
}

export const currentTime = formatCurrentTime();
