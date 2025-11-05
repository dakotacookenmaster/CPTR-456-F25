import { useEffect, useState } from "react"


function App() {
  const [person, setPerson] = useState<null | any>(null)

  async function sleep(duration: number) {
    return new Promise(resolve => setTimeout(() => resolve(true), duration))
  }

  useEffect(() => {

    (async () => {
      try {
        const rawData = await fetch("https://swapi.dev/api/people/1")
        const data = await rawData.json()
        await sleep(1000)
        setPerson(data)
      } catch (error) {
        console.error(error)
      }
    })()

  }, [])

  if (person) {
    return <div>
      <p>{person.name}</p>
    </div>
  }

  return <p>Loading...</p>
}

export default App
