import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  
  createData('03:00', -80),
  createData('06:00', -60),
  createData('09:00', -40),
  createData('12:00', -20),
  createData('15:00', -10),
  createData('12:00', 0),
  createData('13:00', 20),
  createData('15:00', 40),
  createData('13:00', 60),
  createData('12:00', 80),
  createData('12:00', undefined),
];


const data1 = [
  
  createData('03:00', -40),
  createData('06:00', -30),
  createData('09:00', -80),
  createData('12:00', -20),
  createData('15:00', -20),
  createData('00:00', 0),
  createData('03:00', 20),
  createData('06:00', 40),
  createData('09:00', 60),
  createData('12:00', 80),
  createData('12:00', undefined),
];





export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      
      <ResponsiveContainer>
        <LineChart
          
          margin={{
            top: 24,
            right: 24,
            bottom: 0,
            left: 24,
          }}
          
        ><CartesianGrid stroke="#ccc" />
          
          <YAxis  stroke={theme.palette.text.secondary}>
           
          </YAxis>
          <Line  data={data} type="monotone" dataKey="amount" stroke="#5843BE" dot={true} />

          <Line  data={data1} type="monotone" dataKey="amount" stroke="#C30F70" dot={true} />
        </LineChart>
        
      </ResponsiveContainer>
    </React.Fragment>
  );
}
