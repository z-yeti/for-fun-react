import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Head from '../components/Head';

@inject('store')
@observer
class Page extends Component {
  componentDidMount() {
    this.props.store.checkAuthUser();
  }
  render() {
    const { children, title } = this.props;

    return (
      <div className="page-container">
        <Head title={title} />
        <React.Fragment>{children}</React.Fragment>
      </div>
    );
  }
}

export default Page;
