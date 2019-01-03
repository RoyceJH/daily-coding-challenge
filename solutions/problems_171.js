// #171
// You are given a list of data entries that represent entries and exits of groups of people into a building.An entry looks like this:
// { "timestamp": 1526579928, count: 3, "type": "enter" }
// This means 3 people entered the building.An exit looks like this:
// { "timestamp": 1526580382, count: 2, "type": "exit" }
// This means that 2 people exited the building.timestamp is in Unix time.
// Find the busiest period in the building, that is, the time with the most people in the building.Return it as a pair of(start, end) timestamps.You can assume the building always starts off and ends up empty, i.e.with 0 people inside.

const getBusiestTime = list => {
  // Assume list is in UNIX ascending order
  let numPeople = 0
  let busyStartTime
  let busyEndTime
  let greatestSeen = numPeople

  list.forEach(event => {
    const currentTime = event.timestamp
    if (!busyStartTime) busyStartTime = currentTime
    if (!busyEndTime) busyEndTime = currentTime

    if (event.type === 'enter') {
      numPeople += event.count
      if (numPeople > greatestSeen) {
        greatestSeen = numPeople
        busyStartTime = currentTime
      }
    } else {
        if (numPeople === greatestSeen) {
            busyEndTime = currentTime;
        }
      numPeople -= event.count
    }
  });

  return [busyStartTime, busyEndTime]
};
