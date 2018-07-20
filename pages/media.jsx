import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

class Media extends React.Component {
  render() {
    return (
      <div>
        <Head title="Home" />
        <Nav />

        <p>Media</p>

        <style jsx>{``}</style>
      </div>
    );
  }
}
export default Media;
