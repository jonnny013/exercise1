const userInput = document.getElementById('searchBar')
const URL = 'http://localhost:3001'

const main = async () => {
  const getData = async () => {
    const result = await fetch(`${URL}/locations`)
    const data = await result.json()
    return data
  }
  const locations = await getData()
  if (!locations) {
    throw new Error('Location issue')
  }

  const onChange = event => {
    event.preventDefault()
    const searchValue = event.target.value
    const locationToShow = locations.filter(a =>
      a.state.toLowerCase().match(searchValue.toLowerCase())
    )
    console.log(locationToShow)
  }
  userInput.addEventListener('input', onChange)
}
main()