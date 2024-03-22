import './header.css';

const Header = props => {

    return (
      // 命名規則を決める
      <header className="App-header">
        <h1>{props.header}</h1>
      </header>
    );
  };
  
export default Header;