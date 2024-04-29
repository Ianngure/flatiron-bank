function Header({ name, logo }) {
    return (
        <header>
            <img src={ logo } alt="logo" />
            <h1>{ name }</h1>
        </header>
    );
}

export default Header;