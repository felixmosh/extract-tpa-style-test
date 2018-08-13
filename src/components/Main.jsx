import * as React from 'react';
import s from './Main.scss';
import {getProcessedCss} from '../../extract-tpa-style-webpack-plugin/runtime';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRTL: false
    };
  }

  render() {
    const css = getProcessedCss(this.props.style, {isRTL: this.state.isRTL});
    console.log(css);
    return (
      <div>
        <style>{css}</style>
        This is a TEST!
        <div>
          <button className={s.button} onClick={() => this.setState({isRTL: !this.state.isRTL})}>test button</button>
        </div>
      </div>
    );
  }
}
