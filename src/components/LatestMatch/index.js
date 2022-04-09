import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h1 className="match-title">Latest Match</h1>
      <div className="latest-match-details-container">
        <div className="latest-match-details">
          <p className="team-name">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-venue">{venue}</p>
          <p className="latest-match-status">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-team-logo"
        />
        <div className="match-info-container">
          <div className="match-info-item">
            <p className="latest-match-details-label">First Innings</p>
            <p className="latest-match-details-value">{firstInnings}</p>
          </div>
          <div className="match-info-item">
            <p className="latest-match-details-label">Second Innings</p>
            <p className="latest-match-details-value">{secondInnings}</p>
          </div>
          <div className="match-info-item">
            <p className="latest-match-details-label">Man Of The Match</p>
            <p className="latest-match-details-value">{manOfTheMatch}</p>
          </div>
          <div className="match-info-item">
            <p className="latest-match-details-label">Umpires</p>
            <p className="latest-match-details-value">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
