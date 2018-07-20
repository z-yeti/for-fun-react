import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

class About extends React.Component {
  render() {
    return (
      <div>
        <Head title="Home" />
        <Nav />

        <p>About</p>

        <style jsx>{``}</style>
      </div>
    );
  }
}
export default About;
