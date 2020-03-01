import React from "react";
import Wrapper from "./wrapper"
import Photo from "./Photo"
import Title from "./title"

function App() {
  return (<div>

    <Wrapper>

      <Photo src="/https://www.dailyesports.gg/wp-content/uploads/2019/04/Zed-800x400.jpg" />

      <Title style={{

        color: "red"

      }}>themeur</Title>

      <Title small>student</Title>


    </Wrapper>

  </div>)
}

export default App