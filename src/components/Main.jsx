import * as React from 'react';
import s from './Main.scss';
import {getProcessedCss} from 'tpa-style-webpack-plugin/runtime';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRTL: false
    };
  }

  render() {
    const a = performance.now();
    const options = Object.assign({isRTL: this.state.isRTL}, this.props.prefix ? {prefixSelector: `.${this.props.prefix}`} : {});

    const css = getProcessedCss(this.props.style, options);
    console.log(performance.now() - a);
    console.log(css);
    return (
      <div className={this.props.prefix}>
        <style>{css}</style>
        <div className={s.root}>
          <p>This is a TEST!</p>
          <button className={s.button} onClick={() => this.setState({isRTL: !this.state.isRTL})}>test button</button>
        </div>
      </div>
    );
  }
}
