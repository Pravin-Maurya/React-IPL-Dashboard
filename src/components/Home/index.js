import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    iplTeamData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeamData()
  }

  getIplTeamData = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const fetchedData = await response.json()

    const formattedData = fetchedData.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplTeamData: formattedData, isLoading: false})
  }

  renderTeamList = () => {
    const {iplTeamData} = this.state
    return (
      <ul className="teams-container">
        {iplTeamData.map(teamDetails => (
          <TeamCard teamDetails={teamDetails} key={teamDetails.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <div className="ipl-match-container">
          <div className="ipl-title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="title">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamList()}
        </div>
      </div>
    )
  }
}
export default Home
