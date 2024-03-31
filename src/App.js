import * as React from "react";

const {useState, useEffect} = React

function Header () {
  console.log('Header render');
  return <div className="header">header content</div>
}

function Footer () {
  console.log('Footer render');
  return <div className="footer">footer content</div>
}

function Count () {
  console.log('Count render');
  const [count, setCount] = useState(0)
  function onClick () {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('Count useEffect')
  }, [])
  return (
    <p className="count">
      <i>count:</i> 
      <b>
          {count}
      </b>
      <button onClick={onClick}>加一</button>
    </p>
  )
}

function App() {
  useEffect(() => {
    console.log('App useEffect')
  }, [])
  return (
    <div className="App">
      <Header />
      <Count />
      <Footer />
    </div>
  );
}

export default App;
