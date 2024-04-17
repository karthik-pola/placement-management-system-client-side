import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'EEE', TotalStudents: 185, placed: 93, amt: 2400 },
  { name: 'ECE', TotalStudents: 191, placed: 86, amt: 2210 },
  { name: 'MECH', TotalStudents: 250, placed: 134, amt: 2290 },
  { name: 'CSE', TotalStudents: 267, placed: 168, amt: 2000 },
  { name: 'AI&DS', TotalStudents: 69, placed: 42, amt: 2181 },
  { name: 'ECM', TotalStudents: 58, placed: 23, amt: 2500 },
  { name: 'CIVIL', TotalStudents: 177, placed: 80, amt: 2100 },
  { name: 'IT', TotalStudents: 67, placed: 32, amt: 2100 },
];

const BarGraph = () => {
  return (
    <BarChart
      width={750}
      height={400}
      data={data}
      margin={{
        top: 5, right: 60, left: 70, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <Tooltip />
      <Legend />
      <Bar dataKey="TotalStudents" fill="#8884d8" />
      <Bar dataKey="placed" fill="#82ca9d" />
    </BarChart>
  );
};

export default BarGraph;