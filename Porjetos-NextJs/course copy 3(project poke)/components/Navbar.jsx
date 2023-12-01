import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div>
        <Image src="/images/pokeball.png" width="30" height="30" alt="pokeball"/>
        <h1>PokeNext</h1>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Abount">Abount</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
