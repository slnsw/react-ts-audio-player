// @file
// Oral Histories subtitle menu.

import React from 'react';

type Props = {
  visible: boolean;
  id: string;
  subtitleTracks: any[];
  selected?: string;
  onSelect: Function;
};

const SubtitleMenu: React.FunctionalComponent<Props> = ({
  visible,
  id,
  subtitleTracks,
  selected,
  onSelect,
}) => {};

export default SubtitleMenu;

module.exports = class OhSubtitleMenu extends Component {
  constructor(props) {
    super(props);
  }

  button(lang, langLabel, selected) {
    return (
      <button
        lang={lang}
        data-state={selected ? 'active' : 'inactive'}
        onClick={this.onSelect.bind(this)}
      >
        {langLabel}
      </button>
    );
  }

  languageOptions() {
    let options = [
      <li key="_none_">
        {this.button(null, 'Off', this.props.selected === null)}
      </li>,
    ];
    let track, i;
    console.log(this.props.subtitleTracks);
    for (i = 0; i < this.props.subtitleTracks.length; i++) {
      track = this.props.subtitleTracks[i];
      options.push(
        <li key={`${track.language}-${i}`}>
          {this.button(
            track.language,
            track.label,
            track.language == this.props.selected,
          )}
        </li>,
      );
    }
    return options;
  }

  onSelect(e) {
    let lang = e.target.getAttribute('lang');
    this.props.onSelect(lang);
  }

  render(props, {}) {
    return (
      <ul
        class="video-wrapper__popup-menu subtitles-menu"
        id={props.id}
        hidden={props.visible !== true}
        aria-expanded={props.visible === true}
      >
        {this.languageOptions()}
      </ul>
    );
  }
};
