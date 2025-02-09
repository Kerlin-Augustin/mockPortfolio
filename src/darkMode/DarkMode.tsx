import "./DarkMode.css"

function DarkMode () {
  return (
    <>
      <div>
        <span>🌞</span>
        <label className="toggle-theme-wrapper" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
        </label>
        <span>🌚</span>
      </div>
    </>
  )
}

export default DarkMode