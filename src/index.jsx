import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './style.scss';
import {App} from './components/App';
import fakeTPAResponse from './fake-tpa-response';

function promisfy(fn) {
  return new Promise((resolve, reject) => fn((res) => res ? resolve(res) : reject({})));
}

Promise.all([
  promisfy(window.Wix.Styles.getSiteColors),
  promisfy(window.Wix.Styles.getSiteTextPresets),
  promisfy(window.Wix.Styles.getStyleParams)
]).then(([siteColors, siteTextPresets, styleParams]) => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
  const styleParams2 = JSON.parse(JSON.stringify(styleParams));

  styleParams2.colors.buttonBackgroundColor = {
    themeName: 'color-2',
    value: 'rgba(245,242,242,1)'
  };

  styleParams2.colors.bgColor = {
    themeName: 'color-9',
    value: 'rgba(100,100,100,1)'
  };

  ReactDOM.render(<App {...{siteColors, siteTextPresets, styleParams, styleParams2}}/>, root);
});


window.postMessage(JSON.stringify(fakeTPAResponse), '*');

