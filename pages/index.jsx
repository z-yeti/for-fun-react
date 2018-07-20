import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

class Index extends React.Component {
  state = {
    backgroundImages: {}
  };
  getBackgroundImages = () => {};
  render() {
    return (
      <div>
        <Head title="Home" />
        <Nav />

        <p>Home</p>

        <style jsx>{``}</style>
      </div>
    );
  }
}
export default Index;
