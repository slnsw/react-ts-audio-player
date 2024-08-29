# React Typescript Audio Player

* Built in Typescript
* Requires React 16.8+ due to use of hooks
* Not dependent on any particular stylesheet
* Currently built to use FontAwesome as source for icons,
  but intent is to make switchable

For usage, see [example.html](example.html). This uses the bundled version
generated using `npm run web-bundle` that works in a browser. For your Typescript
project, you should probably just include the library directly.

You'll be using something like the following:

```tsx
import AudioPlayer from '@slnsw/react-ts-media-player';
```

For distribution, run `npm run build`.

## Remotes

If you want to implement remote controls, wrap the React root in `PlayerRemoteProvider` to provide a context for components inside.

You can use `usePlayerRemote` to get state and dispatch, and `usePlayerRemoteById` to get state, but they won't work unless wrapped in `PlayerRemoteProvider` at the top level.

### App-level

```tsx
import AudioPlayer from `@slnsw/react-ts-media-player`

const { PlayerRemoteProvider } = AudioPlayer.PlayerRemote;

const App = () => {
    // Define AppInner somewhere.

    return (
        <PlayerRemoteProvider>
            <AppInner />
        </PlayerRemoteProvider>
    );
};

export default App;
```

### Remote component (keyed to player ID)

```tsx
import AudioPlayer from `@slnsw/react-ts-media-player`

const { usePlayerRemoteById } = AudioPlayer.PlayerRemote;

const Remote = () => {
    const { dispatch } = usePlayerRemoteById('audio-player');
    return (
        <button type="button" onClick={() => dispatch({ type: 'play' })}>
            Play
        </button>
    );
};

export default Remote;
```

## What isn't supported yet

* Highlighting supplied transcripts
* A unified build method for local testing

## About the example content

The example content is sourced from our [Stories from our Migrant and Refugee Communities oral history & sound collection](https://oralhistories.sl.nsw.gov.au/) and consists of oral histories
from refugees and members of migrant communities who have come to Australia.
The interviews were conducted by Louise Whelan. Copyright on these recordings
is held by the State Library of New South Wales. For more information,
[see the catalogue record for the oral history interviews](https://search.sl.nsw.gov.au/permalink/f/15rjecp/ADLIB110372407).
