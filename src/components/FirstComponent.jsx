import React, { Fragment } from 'react';
import Graph from '../assets/images/bar-chart-bar-graph.svg';
import { ReactTyped } from "react-typed";
import { PieChart, Pie, Sector, Cell, Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area, Line, ComposedChart } from 'recharts';
import { ResponsiveContainer,
} from 'recharts';

const data = [
{
name: 'A',
uv: 1250,
pv: 1500,
amt: 1400,
},
{
name: 'B',
uv: 950,
pv: 1300,
amt: 1000,
},
{
name: 'C',
uv: 1300,
pv: 1450,
amt: 1350,
},
{
name: 'D',
uv: 1100,
pv: 1250,
amt: 1150,
},
{
name: 'E',
uv: 1400,
pv: 1600,
amt: 1500,
},
{
name: 'F',
uv: 1200,
pv: 1350,
amt: 1250,
},
];

export default function FirstComponent() {
return ( 

<Fragment> <div className="container-fluid FC-bg justify-content-center align-items-center d-flex content-center">
   <div className="container"> <div className="row">
     <div className="col-12 col-md-8 p-5 pt-sm-5 justify-content-center align-items-center"> 
      <h1 className='text-start text-white  fw-bold FC-heading' >
        Empowering capital market professionals to win{" "}
        <ReactTyped
        strings={["what’s next", "the future", "more"]}
        typeSpeed={40}
        backSpeed={40}
        loop
        /> 
      </h1>


      <p className='text-start fs-3 text-white'>
        The top provider of global financial data, research, and insights.
      </p>
      </div>
        <div className="col-12 col-md-4   mt-3 d-flex justify-content-center align-items-center">
          <ResponsiveContainer width="100%" height="80%">
          <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="amt" fill="#ffffff" stroke="#1d5080" />
              <Bar dataKey="pv" barSize={20} fill="#1d5080" />
              <Line type="monotone" dataKey="uv" stroke="#1d5080" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
</Fragment>

);
}
