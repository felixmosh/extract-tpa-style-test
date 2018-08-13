import * as React from 'react';
import * as ReactDOM from 'react-dom';
import s from './style1.scss';
import './style2.scss';
import {getProcessedCss} from '../extract-tpa-style-webpack-plugin/runtime';
import fakeTPAResponse from './fake-tpa-response';

function promisfy(fn) {
  return new Promise((resolve, reject) => fn((res) => res ? resolve(res) : reject({})));
}

Promise.all([
  promisfy(window.Wix.Styles.getSiteColors),
  promisfy(window.Wix.Styles.getSiteTextPresets),
  promisfy(window.Wix.Styles.getStyleParams)
]).then(([siteColors, siteTextPresets, styleParams]) => {
  const css = getProcessedCss({siteColors, siteTextPresets, styleParams});
  const Main = () => <div>
    <style>{css}</style>
    This is a TEST!
    <div>
      <button className={s.button}>test button</button>
    </div>
  </div>;
  console.log(css);

  const root = document.createElement('div');
  document.body.appendChild(root);
  ReactDOM.render(<Main/>, root);
});


window.postMessage(JSON.stringify(fakeTPAResponse), '*');

