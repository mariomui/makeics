var fs = require('fs');
const makeics = (datesElement) =>{
    //"19701101T020000",
    //"19700308T020000",
    return {

        BEGIN:"VCALENDAR",
        VERSION:"2.0",
        PRODID:"-//www.marudot.com//iCal Event Maker",
        CALSCALE:"GREGORIAN",
        BEGIN:"VTIMEZONE",
        TZID:"America/Chicago",
        TZURL:"http:\/\/tzurl.org\/zoneinfo-outlook\/America\/Chicago",
        'X-LIC-LOCATION':"America/Chicago",
        BEGIN:"DAYLIGHT",
        TZOFFSETFROM:'-0600',
        TZOFFSETTO:'-0500',
        TZNAME:'CDT',
        DTSTART: datesElement,
        RRULE:"FREQ=YEARLY;BYMONTH=3;BYDAY=2SU",
        END:"DAYLIGHT",
        BEGIN:"STANDARD",
        TZOFFSETFROM:"-0500",
        TZOFFSETTO:"-0600",
        TZNAME:"CST",
        DTSTART: datesElement,
        RRULE:"FREQ=YEARLY;BYMONTH=11;BYDAY=1SU",
        END:"STANDARD",
        END:"VTIMEZONE",
    } 

}

let datesEntries = [];

let datesArray = [
    "Wednesday August 15th",
    "Thursday August 16th",
    "Friday August 17th",
    "Monday August 20th",
    "Tuesday August 21th",
    "Wednesday August 22th",
    "Thursday August 23th",
    "Monday August 27th",
    "Tuesday August 28th",
    "Wednesday  August 29th",
    "Thursday August 30th",
    "Tuesday September 4th",
    "Wednesday September 5th",
    "Thursday September 6th",
]

datesArray.forEach(function(datesElement) {
    // for (let i = 0; i < datesArray.length; i++) {

        datesEntries.push(makeics(datesElement));
    // }
});

let filepath = "make-event.ics";

// for (key in datesEntries) {
//         // file.writeln(datesEntries[i]);
        
modContent = JSON.stringify(datesEntries);
modContent = modContent.split(',').join('\n');
modContent = modContent.split('[{').join('');
modContent = modContent.split('}\n{').join('\n\n');
modContent = modContent.split('"').join('');

    fs.writeFile(filepath, modContent, (err) => {
            if (err) throw err;
        
            console.info("saved!");
        }); 
    

console.info(datesEntries);