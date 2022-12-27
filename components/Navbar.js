import Logo from './Logo';
import  Link from 'next/link';
function Navbar() {
return (
<nav className="width-100-p fixed-top white navbar glass">
<div className="container">
<div className="navigation-bar padding">
<div className="nav-logo">
<Logo />
</div>
<div className="link-wrapper">
<Link href="/gettingstarted"><a className="nav-link">Docs</a></Link>
<Link href="/themes"><a className="nav-link">Themes</a></Link>
<a href="https://codeload.github.com/fun-css/funcss/zip/refs/heads/main" className="nav-link">Download v1.0</a>
<a href="https://github.com/fun-css"><img src="/icons/github.png" style={{height:'25px'}} className="icon nav-link show-medium-up" alt="github" /></a>

</div>   

</div>
</div>

</nav>
    );
}

export default Navbar;