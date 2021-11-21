import { writable, derived } from 'svelte/store'

export const comp = writable(
  {
    "civilId": "",
    "earthMath": "",
    "discipline": "",
    "location": "",
    "to": "",
    "compName": "",
    "from": "",
    "utcOffset": {
      "timeZoneMinutes": 600
    },
    "earth": {
      "sphere": {
        "radius": "6371000.0 m"
      }
    },
    "give": {
      "giveDistance": null,
      "giveFraction": 0.005
    },
    "scoreBack": "900.000 s"
  })

export const compSlug = derived(comp, $c => {
  return $c.from + " to " + $c.to + ", " + $c.location;
});

export const nominals = writable(
  {
    "free": "5.000 km",
    "time": "1.500000 h",
    "launch": 0.96,
    "distance": "50.0 km",
    "goal": 0.1
  })

export const tasks = writable([])
export const taskLengths = writable([])

export const tasksWithZones = derived([tasks, taskLengths], ($xs, set) => {
  const lens = $xs.map(x => x.length);
  const minLen = Math.min(...lens);
  var [tasks, taskLengths] = $xs;
  let ys = tasks.slice(0, minLen).map((t, i) => {
    return {
      taskName: t.taskName,
      zoneNames: t.zones.raw.map(z => z.zoneName).join("-"),
      cancelled: t.cancelled ? "CANCELLED" : "",
      stopped: t.stopped ? "STOPPED" : "",
      distance: taskLengths[i]
    }
  })

  set(ys);
})

export const pilotsStatus = writable([])