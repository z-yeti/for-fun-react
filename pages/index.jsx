import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { initStore } from '../store';
import Page from '../containers/Page';
import Yeti from '../components/Yeti';

class Index extends Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    initStore(isServer);
    return { isServer };
  }
  constructor(props) {
    super(props);
    this.store = initStore(props.isServer);
  }
  render() {
    return (
      <Provider store={this.store}>
        <Page title="A React JS Boilerplate">
          <Yeti />
        </Page>
      </Provider>
    );
  }
}
export default Index;
