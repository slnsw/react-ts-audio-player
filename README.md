# React Typescript Audio Player

* Built in Typescript
* Requires React 16.8+ due to use of hooks
* Not dependent on any particular stylesheet
* Currently built to use FontAwesome as source for icons,
  but intent is to make switchable

For usage, see [example.html](example.html). This uses the bundled version
generated using `npm run bundle` that works in a browser. For your Typescript
project, you should probably just include the library directly.

You'll be using something like the following:

```typescript
import AudioPlayer from '@slnsw/react-ts-media-player';
```

## What isn't supported yet

* Remote controls for the player
* Highlighting supplied transcripts
* A unified build method for local testing

## About the example content

The example content is sourced from our [Stories from our Migrant and Refugee Communities oral history & sound collection](https://oralhistories.sl.nsw.gov.au/) and consists of oral histories
from refugees and members of migrant communities who have come to Australia.
The interviews were conducted by Louise Whelan. Copyright on these recordings
is held by the State Library of New South Wales. For more information,
[see the catalogue record for the oral history interviews](https://search.sl.nsw.gov.au/permalink/f/15rjecp/ADLIB110372407).
