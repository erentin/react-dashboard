  import React, { Component } from 'react'
  import FeaturedInfo from '../featuredInfo/FeaturedInfo'
  import "./home.css"
  import Chart from '../chart/Chart.jsx'
  import Widgetlg from '../widgetLg/Widgetlg'
  import Widgetsm from '../widgetSm/Widgetsm' 

  export default class Home extends Component {
    render() {
      return (
        <div className='home-contain'>
            <FeaturedInfo/>
            <Chart/>
            <div className="homeWidgets">
              <Widgetsm/>
              <Widgetlg/>
            </div>
        </div>
      )
    }
  }
  