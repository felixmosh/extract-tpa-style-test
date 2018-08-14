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
  const secondStyle = JSON.parse(JSON.stringify(styleParams));

  secondStyle.colors.buttonBackgroundColor = {
    themeName: 'color-2',
    value: 'rgba(245,242,242,1)'
  };

  secondStyle.colors.bgColor = {
    themeName: 'color-9',
    value: 'rgba(100,100,100,1)'
  };

  ReactDOM.render(<div>
    <Main style={{siteColors, siteTextPresets, styleParams}}/>
    <Main style={{siteColors, siteTextPresets, styleParams: secondStyle}} prefix={'style-2'}/>
  </div>, root);
});


window.postMessage(JSON.stringify(fakeTPAResponse), '*');

