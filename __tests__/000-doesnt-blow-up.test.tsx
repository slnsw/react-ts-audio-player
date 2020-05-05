import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import AudioPlayer from '../src/AudioPlayer';
import FontAwesome5 from '../src/Configs/FontAwesome5';

afterEach(() => {
  cleanup();
});

describe('Base element', () => {
  it('Should render', () => {
    render(<AudioPlayer playlist={[]} id="test" config={FontAwesome5} />);
  });
});
