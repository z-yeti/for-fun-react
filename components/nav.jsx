import Link from "next/link";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/photography">
          <a>Photography</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/media">
          <a>Media</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      nav {
        background-color: #2d3234;
        height: 125px;
      }
      nav ul {
        margin: 0;
        padding: 0;
        height: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }
      nav ul li {
      }
      nav ul li a {
        color: #dbdfe1;
        text-decoration: none;
        text-transform: uppercase;
        font-family: Lato;
      }
    `}</style>
  </nav>
);

export default Nav;
