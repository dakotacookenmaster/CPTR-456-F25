// import type { JSX } from "react"
import { Box } from "./components/Box"

function App() {
  // const elements: JSX.Element[] = []

  // for(let i = 0; i < 100; i++) {
  //   elements.push(<div>Hello, world!</div>)
  // }

  // return elements;
  // return [
  //   <div>Hello, world!</div>,
  //   <div>Hello, world!</div>
  // ]
  return [...new Array(100)].map((_, index) => {
    return <Box onClick={index % 2 === 0 ? () => alert("Hello, world!") : () => {}} width={`${index}px`} height={`${index}px`} />
  })
}

export default App
