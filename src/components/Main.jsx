import * as React from 'react';
import {Header} from './Header';
import s from './Main.scss';
import {withStyles} from './withStyles';
import stylable from './Main.st.css';

export const Main = withStyles((props) => <div {...stylable('root', {}, props)}>
  <Header className={stylable.mappedHeader}/>
  <button className={s.button} onClick={props.onClick}>test button</button>
</div>);
