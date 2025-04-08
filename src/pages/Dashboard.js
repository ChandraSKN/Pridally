import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Table } from 'react-bootstrap';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid, Legend
} from 'recharts';
import './Dashboard.css';

const patientStats = [
  { name: 'Inpatients', value: 150 },
  { name: 'Outpatients', value: 300 },
  { name: 'Critical Care', value: 25 },
];

const appointmentData = [
  { day: 'Mon', appointments: 50 },
  { day: 'Tue', appointments: 80 },
  { day: 'Wed', appointments: 70 },
  { day: 'Thu', appointments: 90 },
  { day: 'Fri', appointments: 60 },
  { day: 'Sat', appointments: 30 },
  { day: 'Sun', appointments: 20 },
];

const COLORS = ['#4a90e2', '#50e3c2', '#f5a623'];

function Dashboard() {
  return (
    <Container fluid className="dashboard-container py-4">
      <h2 className="dashboard-title">Patient Management Dashboard</h2>

      <Row className="mt-4">
        <Col md={8}>
          <Card className="dashboard-card shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Weekly Appointments Overview</Card.Title>
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={appointmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="appointments" stroke="#4a90e2" strokeWidth={3} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>

          <Card className="dashboard-card shadow-sm">
            <Card.Body>
              <Card.Title>Recent Patients Activity</Card.Title>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Patient Name</th>
                    <th>Condition</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>Fever</td>
                    <td><span className="status-badge in-treatment">In Treatment</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>Checkup</td>
                    <td><span className="status-badge discharged">Discharged</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Emily Davis</td>
                    <td>Covid-19</td>
                    <td><span className="status-badge critical">Critical</span></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="dashboard-card shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Patient Categories</Card.Title>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={patientStats} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                    {patientStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>

          <Card className="dashboard-card shadow-sm">
            <Card.Body>
              <Card.Title>Overall Capacity</Card.Title>
              <p>Hospital Bed Capacity</p>
              <ProgressBar now={75} label="75%" variant="success" className="mb-3" />
              <p>ICU Bed Occupancy</p>
              <ProgressBar now={90} label="90%" variant="danger" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
