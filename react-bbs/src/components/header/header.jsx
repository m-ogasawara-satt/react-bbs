import './header.css';

const Header = props => {

    return (
      <header className="App-header">
        <h1>{props.header}</h1>
      </header>
    );
  };
  
export default Header;