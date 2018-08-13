import * as ReactDOM from 'react-dom';
import './style.scss';
import {Main} from './components/Main';
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
  ReactDOM.render(<Main style={{siteColors, siteTextPresets, styleParams}}/>, root);
});


window.postMessage(JSON.stringify(fakeTPAResponse), '*');

