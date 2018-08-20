import * as React from 'react';
import {getProcessedCss} from 'tpa-style-webpack-plugin/runtime';
import s from './Main.scss';

export function withStyles(Component) {
  return (props) => {
    const a = performance.now();
    const options = Object.assign({isRTL: props.isRTL}, props.styleID ? {prefixSelector: `.${props.styleID}`} : {});

    const css = getProcessedCss(props.style, options);
    console.log(performance.now() - a);
    console.log(css);

    return <div className={props.styleID}>
      <style>{css}</style>
      <div className={s.root}>
        <Component {...props}/>
      </div>
    </div>;
  }
}
