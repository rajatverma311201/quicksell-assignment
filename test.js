function findRunwaysRequired(arrival, departure, planes) {
    const events = [];

    // Create events array with arrival and departure times
    for (let i = 0; i < arrival.length; i++) {
        events.push({ time: arrival[i], type: "arrival" });
        events.push({ time: departure[i], type: "departure" });
    }

    // Sort the events based on time
    events.sort((a, b) => a.time - b.time);

    let runwaysRequired = 0;
    let maxRunwaysRequired = 0;

    for (const event of events) {
        if (event.type === "arrival") {
            runwaysRequired++;
            maxRunwaysRequired = Math.max(maxRunwaysRequired, runwaysRequired);
        } else if (event.type === "departure") {
            runwaysRequired--;
        }
    }

    // Calculate the number of runways required.
    const runways = Math.ceil(maxRunwaysRequired / planes);

    return runways;
}

// Example usage:
const arrival = [2200, 2300];
const departure = [200, 300];
const planes = 2;
const runwaysRequired = findRunwaysRequired(arrival, departure, planes);
console.log("Number of runways required:", runwaysRequired); // Output: 2
