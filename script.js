function updateCurrentDayAndTime() {
    const dayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    // Get the current date
    const currentDate = new Date();

    // Update the day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    dayOfTheWeekElement.textContent = currentDayOfWeek;


    // Update the current UTC time in milliseconds
    const currentUTCTime = currentDate.getTime();
    utcTimeElement.textContent = currentUTCTime;
}

// Call the function to update the data on page load
updateCurrentDayAndTime();

// Update the data every second to simulate real-time
setInterval(updateCurrentDayAndTime, 1000);