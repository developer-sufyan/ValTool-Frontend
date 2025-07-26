import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faDollarSign, faChartLine, faBalanceScale, faUsers, faTasks, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Table, ProgressBar, Badge } from 'react-bootstrap';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, AreaChart, Area
} from 'recharts';

const COLORS = ['#4f8cff', '#00C49F', '#FFBB28', '#FF8042'];

const stats = [
  { label: 'Projects', value: 28, icon: faProjectDiagram, color: '#4f8cff' },
  { label: 'Revenue', value: '$12,400', icon: faDollarSign, color: '#00C49F' },
  { label: 'Active Users', value: 320, icon: faUsers, color: '#FFBB28' },
  { label: 'Completed Tasks', value: 1_240, icon: faTasks, color: '#FF8042' },
];

const chartData = [
  { name: 'Jan', revenue: 4000, users: 240, tasks: 120 },
  { name: 'Feb', revenue: 3000, users: 198, tasks: 110 },
  { name: 'Mar', revenue: 5000, users: 278, tasks: 150 },
  { name: 'Apr', revenue: 4780, users: 189, tasks: 170 },
  { name: 'May', revenue: 5890, users: 239, tasks: 200 },
  { name: 'Jun', revenue: 6390, users: 349, tasks: 210 },
  { name: 'Jul', revenue: 7490, users: 400, tasks: 250 },
];

const pieData = [
  { name: 'Enterprise', value: 400 },
  { name: 'Startup', value: 300 },
  { name: 'Freelancers', value: 200 },
  { name: 'Others', value: 100 },
];

const areaData = [
  { month: 'Jan', valuation: 1200 },
  { month: 'Feb', valuation: 1500 },
  { month: 'Mar', valuation: 1700 },
  { month: 'Apr', valuation: 1600 },
  { month: 'May', valuation: 1800 },
  { month: 'Jun', valuation: 2100 },
  { month: 'Jul', valuation: 2300 },
];

const users = [
  {
    id: 1,
    name: 'Alice Johnson',
    company: 'Alpha Inc.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    status: 'Active',
    progress: 80,
    revenue: '$2,400'
  },
  {
    id: 2,
    name: 'Bob Smith',
    company: 'Beta LLC',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    status: 'Pending',
    progress: 55,
    revenue: '$1,800'
  },
  {
    id: 3,
    name: 'Carol Lee',
    company: 'Gamma Solutions',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    status: 'Inactive',
    progress: 30,
    revenue: '$950'
  },
  {
    id: 4,
    name: 'David Kim',
    company: 'Delta Corp',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    status: 'Active',
    progress: 95,
    revenue: '$3,100'
  },
];

export default function Dashboard() {
  return (
    <div className="container py-4 fade-in" style={{ fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif" }}>
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold" style={{ color: '#051c38', letterSpacing: '1px' }}>Welcome back, Admin!</h2>
        <p className="text-muted mb-0">Here’s a quick overview of your dashboard insights.</p>
      </div>

      {/* Statistic Cards */}
      <div className="row g-4 mb-4">
        {stats.map((stat, i) => (
          <div className="col-6 col-md-3" key={i}>
            <div
              className="shadow rounded p-4 text-center h-100"
              style={{
                background: '#fff',
                border: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              <div className="mb-2">
                <FontAwesomeIcon icon={stat.icon} size="2x" style={{ color: stat.color }} />
              </div>
              <div className="fw-semibold text-muted" style={{ fontSize: '0.95rem' }}>{stat.label}</div>
              <div className="fw-bold" style={{ fontSize: '2rem', color: '#051c38' }}>{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="row g-4 mb-4">
        <div className="col-md-8">
          <div className="shadow rounded p-4 bg-white h-100">
            <h6 className="mb-3 fw-bold" style={{ color: '#051c38' }}>Revenue & Users Overview</h6>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#4f8cff" radius={[8, 8, 0, 0]} />
                <Bar dataKey="users" fill="#00C49F" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-md-4">
          <div className="shadow rounded p-4 bg-white h-100">
            <h6 className="mb-3 fw-bold" style={{ color: '#051c38' }}>User Segments</h6>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  fill="#4f8cff"
                  paddingAngle={3}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="shadow rounded p-4 bg-white h-100">
            <h6 className="mb-3 fw-bold" style={{ color: '#051c38' }}>Growth Trend</h6>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#4f8cff" strokeWidth={3} />
                <Line type="monotone" dataKey="users" stroke="#00C49F" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-md-6">
          <div className="shadow rounded p-4 bg-white h-100">
            <h6 className="mb-3 fw-bold" style={{ color: '#051c38' }}>Valuation Over Time</h6>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={areaData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="valuation" stroke="#FFBB28" fill="#FFBB28" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Modern Table */}
      <div className="row">
        <div className="col-12">
          <div className="shadow rounded p-4 bg-white animate">
            <h6 className="mb-3 fw-bold" style={{ color: '#051c38' }}>Team Performance</h6>
            <Table responsive hover className="mb-0" style={{ fontSize: '1rem', borderRadius: 12, overflow: 'hidden' }}>
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={user.id}>
                    <td>{idx + 1}</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img src={user.avatar} alt={user.name} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
                        <span>{user.name}</span>
                      </div>
                    </td>
                    <td>{user.company}</td>
                    <td>
                      <Badge bg={
                        user.status === 'Active' ? 'success' :
                        user.status === 'Pending' ? 'warning' : 'secondary'
                      }>
                        {user.status}
                      </Badge>
                    </td>
                    <td style={{ minWidth: 120 }}>
                      <ProgressBar now={user.progress} label={`${user.progress}%`} style={{ height: 16, fontWeight: 600 }} />
                    </td>
                    <td>{user.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

