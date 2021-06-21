---
date: "2019-11-06"
title: "Google Calendar API Sucks"
tags: ["google calendar", "api", "rant"]
category: "Web"
demo: "https://github.com/ndom91/next-maintenance"
cover:
  imageFile: "gcalapi/cover.png"
---

\<rant>

I've been building a little enterprise app at work to deal with network maintenances and it has a good deal of Google Calendar integration.

Please tell me if this makes sense to you..

When creating an event you get an event object back with all the details, which looks like this:

```
{
  "kind": "calendar#event",
  "etag": "\"3146056453636000\"",
  "id": "durpeh8quqetb8iunbrhlukg24",
  "status": "confirmed",
  "htmlLink": "https://www.google.com/calendar/event?eid=ZHVycGVoOHF1cWV0YjhpdW5icmhsdWtnMjQgbmV3dGVsY28uZGVfaGtwOThhbWJidmN0Y245NjZnamozYzdkbG9AZw",
  "created": "2019-11-06T08:17:06.000Z",
  "updated": "2019-11-06T08:17:06.818Z",
  "summary": "NT-580 - Maintenance Retn CID 010925",
  "description": " Maintenance for <b>Retn</b> on deren CID: \"<b>WL-900951-1.DE.FKT.NTL-UA.KIV.NTL-10G</b>\".<br><br> Affected Newtelco CIDs: <b>010925</b><br><br>Source: <a href=\"https://maintenance.newtelco.dev/maintenance?id=580\">NT-580</a>",
  "creator": {
    "email": "fwaleska@newtelco.de",
    "displayName": "Felix Waleska"
  },
  "organizer": {
    "email": "newtelco.de_hkp98ambbvctcn966gjj3c7dlo@group.calendar.google.com",
    "displayName": "Newtelco Maintenance",
    "self": true
  },
  "start": {
    "dateTime": "2019-11-15T00:00:00+01:00",
    "timeZone": "Europe/Berlin"
  },
  "end": {
    "dateTime": "2019-11-15T05:00:00+01:00",
    "timeZone": "Europe/Berlin"
  },
  "iCalUID": "durpeh8quqetb8iunbrhlukg24@google.com",
  "sequence": 0,
  "attendees": [
    {
      "email": "service@newtelco.de",
      "displayName": "Service",
      "responseStatus": "needsAction"
    }
  ],
  "reminders": {
    "useDefault": true
  }
}
```

Which ID do you think is the actual eventID?

The one called `id` ? ...wrong.

The one called `iCalUID` ? ...wrong.

In fact, its the ID which is appended as a parameter to the URL in the field `htmlLink`.

You have to parse this URL manually and extract the `eid` parameter just to save the Calendar ID.

Without it you obviously cannot manipulate the calendar entry later on.

Come on Google - I thought you were better than this.

\</rant>
