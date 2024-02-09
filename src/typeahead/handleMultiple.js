const userInput = document.getElementById('searchBarMulti')
const resultDisplay = document.getElementById('typeahead-results-multi')
const inputHolder = document.getElementById('holder')



const addNew = (text) => {
  const bubble = document.createElement('div')
  bubble.classList.add('innerInput')
  bubble.innerText = text
  const closeButton = document.createElement('a')
  closeButton.classList.add('close')
  closeButton.innerText = 'x'
  closeButton.addEventListener('click', (event) => {
    event.preventDefault()
    event.target.parentNode.remove()
  })
  bubble.appendChild(closeButton)
  inputHolder.prepend(bubble)
}

const handleMultipleInput = locations => {
  let selectedIndex = -1

  let locationToShow

  const handleDataChange = data => {
    resultDisplay.innerHTML = ''
    data.map((place, index) => {
      let row = document.createElement('a')

      row.innerText = place.state
      row.href = '#'
      row.addEventListener('click', () => {
        userInput.value = ''
        addNew(place.state)
        handleDataChange('')
      })
      resultDisplay.appendChild(row)
      if (index === selectedIndex) {
        row.classList.add('selected')
      }
    })
  }

  const onChange = event => {
    event.preventDefault()
    selectedIndex = -1
    const searchValue = event.target.value

    locationToShow = locations.filter(
      (a) => a.state.toLowerCase().match(searchValue.toLowerCase())
    )
    handleDataChange(locationToShow.filter((item, index) => index < 8))
  }
  userInput.addEventListener('input', onChange)
  userInput.addEventListener('keydown', event => {
    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault()
        selectedIndex = Math.max(selectedIndex - 1, 0)
        handleDataChange(locationToShow)
        break
      case 'ArrowDown':
        event.preventDefault()
        selectedIndex = Math.min(selectedIndex + 1, locationToShow.length - 1)
        handleDataChange(locationToShow)
        break
      case 'Enter':
        event.preventDefault()
        if (selectedIndex >= 0 && selectedIndex < locationToShow.length) {
          userInput.value = ''
          addNew(locationToShow[selectedIndex].state)
          handleDataChange('')
        }
        selectedIndex = -1
        break
      default:
        break
    }
  })
}

export default handleMultipleInput
