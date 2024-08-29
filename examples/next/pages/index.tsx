import * as React from 'react';

import AudioPlayer, { defaultConfigs, usePlayerRemoteById } from '../../../dist';

const config = Object.assign(defaultConfigs.FontAwesome5, {
  useHoursInTimestamps: true,
  useTooltip: true
});

const TestRemote = ({ id }) => {
  const { dispatch } = usePlayerRemoteById(id);

  return (
    <div>
      <h2>Remote</h2>
      <button type="button" onClick={() => dispatch({ type: 'play_pause' })}>
        Play/pause
      </button>
      <button type="button" onClick={() => dispatch({ type: 'play' })}>
        Play
      </button>
      <button type="button" onClick={() => dispatch({ type: 'pause' })}>
        Pause
      </button>
      <button type="button" onClick={() => dispatch({ type: 'reset' })}>
        Rewind
      </button>
      <button type="button" onClick={() => dispatch({ type: 'backward' })}>
        Backward
      </button>
      <button type="button" onClick={() => dispatch({ type: 'forward' })}>
        Forward
      </button>
      <input
        type="number"
        placeholder="Seconds eg. 15"
        defaultValue=""
        onChange={(e) => dispatch({ type: 'timestamp_update', timestamp: e.currentTarget.value })}
      />
    </div>
  );
};

const Page = () => {
  return (
    <>
      <h1>Hello!</h1>
      <TestRemote id="audio-player" />
      <AudioPlayer
        id="audio-player"
        playlist={[
          {
            index: 0,
            label:
              'Interview with Rim Jezan by Louise Whelan, 30th May 2004',
            audioUrl:
              'https://s3.ap-southeast-2.amazonaws.com/slnsw.oral-histories/production/s3fs-public/2019-01/t102.m4a',
            transcriptUrl:
              'https://s3.ap-southeast-2.amazonaws.com/slnsw.oral-histories/production/s3fs-public/2019-02/rj_correctedcues_final.vtt',
          },
          {
            index: 1,
            label:
              'Interview with Theophile Elongo by Louise Whelan, 22nd June 2013',
            audioUrl:
              'https://s3.ap-southeast-2.amazonaws.com/slnsw.oral-histories/production/s3fs-public/2019-01/theo_elongat22_0.m4a',
            transcriptUrl:
              'https://s3.ap-southeast-2.amazonaws.com/slnsw.oral-histories/production/s3fs-public/2019-02/te_transcript.vtt',
          },
          {
            index: 2,
            label:
              'Interview with Deng Adut (1/3) by Louise Whelan, 4th March 2014',
            audioUrl:
              'https://s3.ap-southeast-2.amazonaws.com/slnsw.oral-histories/production/s3fs-public/2019-02/t75.m4a',
            transcriptUrl: null,
          },
          {
            index: 3,
            label:
              'Interview with Deng Adut (2/3) by Louise Whelan, 4th March 2014',
            audioUrl:
              'https://s3.ap-southeast-2.amazonaws.com/slnsw.oral-histories/production/s3fs-public/2019-02/t77.m4a',
            transcriptUrl: null,
          },
          {
            index: 4,
            label:
              'Interview with Deng Adut (3/3) by Louise Whelan, 4th March 2014',
            audioUrl:
              'https://s3.ap-southeast-2.amazonaws.com/slnsw.oral-histories/production/s3fs-public/2019-02/t79.m4a',
            transcriptUrl: null,
          },
        ]}
        onEndNextFile={false}
        crossOrigin="anonymous"
        singleTrack={false}
        config={config}
        useRangeOnScrubBar
        useProgressOnScrubBar
        debug
      />
    </>
  );
};

export default Page;
