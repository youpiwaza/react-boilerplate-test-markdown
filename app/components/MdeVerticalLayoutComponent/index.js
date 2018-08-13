import * as React from 'react';
import * as Showdown from 'showdown';
import ReactMde, { ReactMdeTypes } from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';

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
        markdown: `**Hello world!**

enfing **huehue**

_Italique_

![hey](https://vignette.wikia.nocookie.net/bob-leponge/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20161220183800&path-prefix=fr)

## Test titre2

test quotes : 'hey'

test double quotes : "hoy"

~~qsdqsdqdqd~~

[Click](https://www.google.fr/)

> Dat quote

- lite a puce 1
- 2
- 3

1. hey
2. hoy
3. wehs

- [ ] Checklist
- [x] Checked
- [ ] Unchecked`,
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
    console.log('mdeState', mdeState);
    console.log('mdeState.markdown', mdeState.markdown);
    console.log('mdeState.html', mdeState.html);
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
