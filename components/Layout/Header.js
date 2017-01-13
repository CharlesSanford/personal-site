/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Charles Sanford</span>
          </div>
          <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
            <a href="#fixed-tab-1" className="mdl-layout__tab is-active">Tab 1</a>
            <a href="#fixed-tab-2" className="mdl-layout__tab">Tab 2</a>
            <a href="#fixed-tab-3" className="mdl-layout__tab">Tab 3</a>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
        </div>
        <main className="mdl-layout__content">
          <section className="mdl-layout__tab-panel is-active" id="fixed-tab-1">
            <div className="page-content">1111111111111111111</div>
          </section>
          <section className="mdl-layout__tab-panel" id="fixed-tab-2">
            <div className="page-content">2222222222222222</div>
          </section>
          <section className="mdl-layout__tab-panel" id="fixed-tab-3">
            <div className="page-content">3333333333333333</div>
          </section>
        </main>
      </div>
    );
  }

}

export default Header;
