const userInput = document.getElementById('searchBar')
const resultDisplay = document.getElementById('typeahead-results')

const handleInput = locations => {
  let selectedIndex = -1
  let locationToShow

  const handleDataChange = data => {
    resultDisplay.innerHTML = ''
    data.map((place, index) => {
      let row = document.createElement('a')

      row.innerText = place.state
      row.href = '#'
      row.addEventListener('click', () => {
        userInput.value = place.state
        selectedIndex = index
        locationToShow = locationToShow.filter(
          a => a.state === locationToShow[selectedIndex].state
        )
        handleDataChange(locationToShow)
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
      (item) => item.state.toLowerCase().match(searchValue.toLowerCase()) 
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
          userInput.value = locationToShow[selectedIndex].state
          locationToShow = locationToShow.filter(
            a => a.state === locationToShow[selectedIndex].state
          )
          handleDataChange(locationToShow)
        }
        selectedIndex = -1
        break
      default:
        break
    }
  })
}

export default handleInput
