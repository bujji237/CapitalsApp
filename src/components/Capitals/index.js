import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    countryId: countryAndCapitalsList[0].id,
  }

  getChangedCountry = () => {
    const {countryId} = this.state
    const changedCountry = countryAndCapitalsList.filter(
      each => each.id === countryId,
    )
    return changedCountry
  }

  onChangeCapital = event => {
    const selectedCountryId = event.target.value
    console.log(selectedCountryId)
    this.setState({
      countryId: selectedCountryId,
    })
  }

  render() {
    const changedCountry = this.getChangedCountry()
    const {countryId} = this.state

    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="heading">Countries and Capitals</h1>
          <label className="label">
            <select
              name="countries"
              onChange={this.onChangeCapital}
              value={countryId}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            is capital of which country?
          </label>
          <p className="capital">{changedCountry[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
