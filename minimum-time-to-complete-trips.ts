// Task 2187. Minimum Time to Complete Trips
// You are given an array time where time[i] denotes the time taken by the ith bus to complete one trip.
// Each bus can make multiple trips successively; that is, the next trip can start immediately after completing the current trip. Also, each bus operates independently; that is, the trips of one bus do not influence the trips of any other bus.
// You are also given an integer totalTrips, which denotes the number of trips all buses should make in total. Return the minimum time required for all buses to complete at least totalTrips trips.

// Algo: binary search
// set right boundary is totalTrips multiplied by the maximum time required by one bus, 
// thus this time is long enough for buses to finish totalTrips, 
// so we set the right boundary 
// as right = max(times) * totalTrips.

function minimumTime(time: number[], totalTrips: number): number {
  // t is in [1, 10 ** 14]
  let left = 1;
  let right = 10 ** 14;

  while (left <= right) {
    // using binary search to guess a t
    let mid = left + Math.floor((right - left) / 2);
    // how many trips we could finish
    let total = 0;
    for (var t of time) {
      total += Math.floor(mid / t);
    }
    // not enough, guess a larger t in next round
    if (total < totalTrips) {
      left = mid + 1;
    } else {
      // to find the smallest t
      right = mid -1;
    }
  }

  return left;
}

// We set the right boundary of the searching space as m⋅k
// so bin search costs O(log(m⋅k))
// In each step, we iterate the entire array - O(n)
// Time: O(n⋅log(m⋅k))
// Space O(1)
