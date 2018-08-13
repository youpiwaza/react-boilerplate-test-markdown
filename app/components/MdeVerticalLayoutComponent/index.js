import * as React from 'react';
import * as Showdown from 'showdown';
import ReactMde, { ReactMdeTypes } from 'react-mde';

interface State {
  mdeState: ReactMdeTypes.MdeState;
}

export default class MdeVerticalLayoutComponent extends React.Component<
  {},
  State,
> {
  converter: Showdown.Converter;

  constructor(props) {
    super(props);
    this.state = {
      mdeState: {
        markdown: '**Hello world!**',
      },
    };
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true,
    });
  }

  handleValueChange = (mdeState: ReactMdeTypes.MdeState) => {
    this.setState({ mdeState });
  };

  render() {
    return (
      <ReactMde
        layout="vertical"
        onChange={this.handleValueChange}
        editorState={this.state.mdeState}
        generateMarkdownPreview={markdown =>
          Promise.resolve(this.converter.makeHtml(markdown))
        }
      />
    );
  }
}
