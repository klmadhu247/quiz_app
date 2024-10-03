import React from "react";
import Quiz_Game from "./Quiz_Game";

import Click from "./click";
import HOC_Function from "./HOC/HocCounter";




function App() {

  const UpdatedClick = HOC_Function(Click);
  return (
    <div>
    {/* <Quiz_Game/> */}
    <UpdatedClick name='klm'/>

    </div>
  );
}

export default App;
