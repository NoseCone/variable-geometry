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

export const compSlug = derived(comp, ($comp) => {
    return $comp.from + " to " + $comp.to + ", " + $comp.location;
});

export const nominals = writable(
    {
        "free": "5.000 km",
        "time": "1.500000 h",
        "launch": 0.96,
        "distance": "50.0 km",
        "goal": 0.1
      })