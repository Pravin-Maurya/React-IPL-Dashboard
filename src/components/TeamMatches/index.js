import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    iplMatchData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplMatchData()
  }

  getIplMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const matchUrl = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(matchUrl)
    const matchData = await response.json()
    console.log(matchData)

    const updatedMatchedData = {
      latestMatchDetails: {
        id: matchData.latest_match_details.id,
        competingTeam: matchData.latest_match_details.competing_team,
        competingTeamLogo: matchData.latest_match_details.competing_team_logo,
        date: matchData.latest_match_details.date,
        firstInnings: matchData.latest_match_details.first_innings,
        manOfTheMatch: matchData.latest_match_details.man_of_the_match,
        matchStatus: matchData.latest_match_details.match_status,
        result: matchData.latest_match_details.result,
        secondInnings: matchData.latest_match_details.second_innings,
        umpires: matchData.latest_match_details.umpires,
        venue: matchData.latest_match_details.venue,
      },
      recentMatches: matchData.recent_matches.map(eachMatch => ({
        id: eachMatch.id,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        date: eachMatch.date,
        firstInnings: eachMatch.first_innings,
        manOfTheMatch: eachMatch.man_of_the_match,
        matchStatus: eachMatch.match_status,
        result: eachMatch.result,
        secondInnings: eachMatch.second_innings,
        umpires: eachMatch.umpires,
        venue: eachMatch.venue,
      })),
      teamBannerUrl: matchData.team_banner_url,
    }
    this.setState({iplMatchData: updatedMatchedData, isLoading: false})
  }

  renderMatchData = () => {
    const {iplMatchData} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = iplMatchData

    return (
      <div className="match-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="recent-match-container">
          {recentMatches.map(eachMatch => (
            <MatchCard eachMachDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-match-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderMatchData()}
      </div>
    )
  }
}
export default TeamMatches
