import handleArrows from './handleKeyStrokes.js'

const userInput = document.getElementById('searchBar')
const resultDisplay = document.getElementById('typeahead-results')

const handleInput = (locations) => {
let selectedIndex = 0
console.log(selectedIndex)
  const onChange = event => {
    event.preventDefault()
    const searchValue = event.target.value

    const locationToShow = locations.filter(a =>
      a.state.toLowerCase().match(searchValue.toLowerCase())
    )

    const handleDataChange = data => {
      resultDisplay.innerHTML = ''
      data.map((place, index) => {
        let row = document.createElement('a')

        row.innerText = `
       ${place.state}
      `
        row.href = '#'
        row.addEventListener('click', () => {
          userInput.value = place.state
        })
        resultDisplay.appendChild(row)

        if (index === selectedIndex) {
          row.classList.add('selected')
        }
      })
    }
    handleDataChange(locationToShow)
  }
  handleArrows(locations, selectedIndex)
  userInput.addEventListener('input', onChange)
}

export default handleInput
