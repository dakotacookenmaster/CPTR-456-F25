import './App.css'

function Box() {
  return <div style={{
    backgroundColor: "green",
    width: "200px",
    height: "200px",
  }}></div>
}

function App() {
  const myValue = 5

  return (
    <>
      <Box />
    </>
  )
}

export default App
