import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  resultClass = () => {
    const {eachMachDetails} = this.props
    const {matchStatus} = eachMachDetails
    if (matchStatus === 'Won') {
      return 'Won'
    }
    return 'Lost'
  }

  render() {
    const {eachMachDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      matchStatus,
      result,
    } = eachMachDetails

    const resultColor = this.resultClass()

    return (
      <li className="match-details-container">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="team-logo"
        />
        <p className="team-name">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={`match-status ${resultColor}`}>{matchStatus}</p>
      </li>
    )
  }
}
export default MatchCard
