import React from 'react';
import ConnectedStore from './ConnectedStore.jsx';


function connect(store, ...propNames) {

  return (ViewComponent) => {
    class ConnectedViewComponent extends React.Component {

      render()
        {
          return (
            <ConnectedStore store={store} propNames={propNames}>
              { prop => <ViewComponent {...prop} {...this.props} /> }
            </ConnectedStore>
          );

        }
    }

    return ConnectedViewComponent;

  };


}

module.exports = connect;