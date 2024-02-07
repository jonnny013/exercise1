import handleInput from './typeahead/handleInput.js'
import handleMultipleInput from './typeahead/handleMultiple.js'
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
  handleInput(locations)
  handleMultipleInput(locations)
}
main()
