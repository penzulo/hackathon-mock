import { Link, useRouterState } from '@tanstack/react-router';
import { T } from '../../lib/theme';

const NAV_LINKS = [
  { to: '/', label: 'Find Vendors' },
  { to: '/calculator', label: 'Cost Calculator' },
  { to: '/project', label: 'Project Management' },
];

export function Topbar() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  return (
    <div className="topbar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="logo">
          Servzo<span>.</span>
        </div>
      </Link>

      <nav className="nav">
        {NAV_LINKS.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{ textDecoration: 'none' }}
          >
            <button
              className={`nav-btn${pathname === to || (to !== '/' && pathname.startsWith(to)) ? ' active' : ''}`}
            >
              {label}
            </button>
          </Link>
        ))}
      </nav>

      <div className="topbar-right">
        <span className="topbar-name">Rahul M.</span>
        <div className="avatar">RM</div>
      </div>
    </div>
  );
}
