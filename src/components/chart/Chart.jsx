import React, { Component } from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart() {

    const data = [
        {
          name: 'Ocak',
          SATIŞ: 5000,
          pv: 2400,
          amt: 2400,
          av: "10.000₺"
        },
        {
          name: 'Şubat',
          SATIŞ: 3000,
          pv: 1398,
          amt: 2210,
          av: "20.000₺"
        },
        {
          name: 'Mart',
          SATIŞ: 2000,
          pv: 9800,
          amt: 2290,
          av: "30.000₺"
        },
        {
          name: 'Nisan',
          SATIŞ: 2780,
          pv: 3908,
          amt: 2000,
          av: "40.000₺"
        },
        {
          name: 'Mayıs',
          SATIŞ: 2000,
          pv: 9800,
          amt: 2290,
          av: "30.000₺"
        },
        {
          name: 'Haziran',
          SATIŞ: 1700,
          pv: 9800,
          amt: 2290,
          av: "30.000₺"
        },
        {
          name: 'Temmuz',
          SATIŞ: 3200,
          pv: 9800,
          amt: 2290,
          av: "30.000₺"
        },
        {
          name: 'Ağustos',
          SATIŞ: 4400,
          pv: 9800,
          amt: 2290,
          av: "30.000₺"
        }
      ]

    return (
      <div className='chart'>
        <h3 className="chart-title">Satış Analizleri</h3>
        <ResponsiveContainer width="100%" aspect={4 /1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#cf152d'/>
                <YAxis stroke='#cf152d'/>
                <Line type="monotone" dataKey="SATIŞ" stroke="black"/>
                <Tooltip/>
                <CartesianGrid stroke='#cf152d' strokeDasharray="1 1"/>
                
            </LineChart>
        </ResponsiveContainer>
      </div>
     )
}

export default Chart
