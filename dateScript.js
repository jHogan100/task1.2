const currentTime = new Date();
//gets the current local time for us to use in the functions
function timeFunctions() {
    const localTime = currentTime;
    const optionsWeek ={weekday: 'long'};
    const optionsUTC = {timeZone: 'UTC', hour12: false};
    //declared options for our toLocaleString()

    const UTCvLocalTime =currentTime.getTimezoneOffset();
    const UTCTime = currentTime.toLocaleString('en-US', optionsUTC); //using our options here
    const weekTime = currentTime.toLocaleString('en-US', optionsWeek);
    const ISOTime = currentTime.toISOString();
    //declaring all modified time constants.
    
    const outputHTML = 
    `<p>current local time: ${localTime}</p>
    <p> UTC Time: ${UTCTime}<br>
    time vs UTC: ${UTCvLocalTime} hours</p>
    <p> day of the week: ${weekTime}</p>
    <p> ISO time: ${ISOTime}</p>`;
    outputArea.innerHTML = outputHTML;
}