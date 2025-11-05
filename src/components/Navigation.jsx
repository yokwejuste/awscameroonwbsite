export default function Navigation({ activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-menu">
          <li>
            <button
              className={`nav-link ${activeTab === 'clubs' ? 'active' : ''}`}
              onClick={() => setActiveTab('clubs')}
            >
              Cloud Clubs
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeTab === 'groups' ? 'active' : ''}`}
              onClick={() => setActiveTab('groups')}
            >
              User Groups
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
