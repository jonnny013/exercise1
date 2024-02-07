const userInput = document.getElementById('searchBar')
const tableBody = document.getElementById('tableBody')
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
    const table = data => {
      tableBody.innerHTML = ''
      data.map(place => {
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${place.state}</td>
        <td>${place.capital}</td>
      `
        tableBody.appendChild(row)
      })
    }
    table(locationToShow)
  }
  userInput.addEventListener('input', onChange)
}
main()
