// src/components/Admin/DashboardContent.jsx
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid
} from 'recharts';

const dataBar = [
  { name: 'Jan', value: 10000 },
  { name: 'Fév', value: 20000 },
  { name: 'Mar', value: 15000 },
  { name: 'Avr', value: 28000 },
  { name: 'Mai', value: 18000 },
];

const dataLine = [
  { name: 'Jan', value: 5 },
  { name: 'Fév', value: 8 },
  { name: 'Mar', value: 6 },
  { name: 'Avr', value: 11 },
  { name: 'Mai', value: 7 },
];

function DashboardContent() {
  return (
    <div>
      <h5>Graphe de la production</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataBar}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#0d6efd" />
        </BarChart>
      </ResponsiveContainer>

      <h5 className="mt-5">Évolution mensuelle</h5>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={dataLine}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#fd7e14" fill="#fd7e14" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardContent;
