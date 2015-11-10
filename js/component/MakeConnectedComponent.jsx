import React from 'react';
import ConnectedStore from './ConnectedStore.jsx'


function MakeConnectedComponent(ViewComponent,store,...propNames) {


  class ConnectedViewComponent extends React.Component {
    render() {
      return (
        <ConnectedStore store={store} propNames={propNames}>
          { prop => <ViewComponent {...prop}/> }
        </ConnectedStore>
      );
    }
  }

  return ConnectedViewComponent;
}

module.exports = MakeConnectedComponent;