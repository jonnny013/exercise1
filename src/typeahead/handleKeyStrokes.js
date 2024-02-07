const userInput = document.getElementById('searchBar')

const handleArrows = (locations, selectedIndex) => {
  userInput.addEventListener('keydown', event => {
    const searchValue = userInput.value.toLowerCase()
    const locationToShow = locations.filter(a => a.state.toLowerCase().match(searchValue))

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault()
        selectedIndex = selectedIndex - 1
        break
      case 'ArrowDown':
        event.preventDefault()
        selectedIndex = selectedIndex + 1
        break
      case 'Enter':
        event.preventDefault()
        if (selectedIndex >= 0 && selectedIndex < locationToShow.length) {
          userInput.value = locationToShow[selectedIndex].state
        }
        selectedIndex = -1 
        break
      default:
        break
    }
  })
}

export default handleArrows