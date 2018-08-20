import * as React from 'react';
import {Main} from './Main';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      main1: false,
      main2: true
    };
  }

  render() {
    const {siteColors, siteTextPresets, styleParams, styleParams2} = this.props;
    return <div>
      <Main style={{siteColors, siteTextPresets, styleParams}}
            isRTL={this.state.main1}
            onClick={() => this.setState({main1: !this.state.main1})}/>
      <Main style={{siteColors, siteTextPresets, styleParams: styleParams2}}
            styleID={'style-2'}
            onClick={() => this.setState({main2: !this.state.main2})}
            isRTL={this.state.main2}/>
    </div>;
  }
}
