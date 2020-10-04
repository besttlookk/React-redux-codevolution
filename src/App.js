import React from 'react';
// import CakeContainer from './components/CakeContainer';
// import HooksCakeContainer from './components/HooksCakeContainer'
// import IceCreamContainer from './components/iceCreamContainer'
// import NewCakeContainer from './components/newCakeContainer'
// import ItemContainer from './components/itemContainer'

import UserContainer from './components/UserContainer'
import store from './redux/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store= {store}>
       <div >
         <UserContainer />
         {/* <ItemContainer cake/>
         <ItemContainer />
          <CakeContainer />
          < HooksCakeContainer />
          <IceCreamContainer />
          <NewCakeContainer /> */}
      </div>
    </Provider>
   
  );
}

export default App;
