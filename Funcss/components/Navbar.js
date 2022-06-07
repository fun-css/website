import Logo from './Logo';
import Image  from 'next/image';
import  Link from 'next/link';
function Navbar() {
return (
<nav className="width-100-p fixed-top white navbar card">
<div className="container">
<div className="navigation-bar">
<div className="nav-logo">
<Logo />
</div>
<div className="hide-medium-down">
<Link href="/gettingstarted"><a className="nav-link">Docs</a></Link>
<Link href="/themes"><a className="nav-link">Themes</a></Link>
<a href="https://codeload.github.com/fun-css/funcss/zip/refs/heads/main" className="text-black text-small">Download v1.0</a>
<a href="https://github.com/fun-css"><img src="/icons/github.png" style={{height:'25px'}} className="icon fit show-medium-up" alt="github" /></a>
</div>    
</div>
</div>

</nav>
    );
}

export default Navbar;