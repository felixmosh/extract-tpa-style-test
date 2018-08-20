import stylable from './Header.st.css';

export const Header = (props) => <p {...stylable('root', {}, props)}><span
  className={stylable.innerComp}>This is a TEST!</span></p>;
