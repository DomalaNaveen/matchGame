import './index.css'

const TabList = props => {
  const {tabDetails, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeClassName = isActive ? 'active' : ''

  return (
    <li>
      <button className={`tab-button ${activeClassName}`} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabList
