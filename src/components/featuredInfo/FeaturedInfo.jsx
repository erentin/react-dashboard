import React, { Component } from 'react'
import "./featuredInfo.css"
import {ArrowUpward,ArrowDownward} from '@mui/icons-material';

export default class FeaturedInfo extends Component {
  render() {
    return (
      <div className='featuredinfo'>
        <div className="featuredinfo-wrapper">
            <div className="featuredinfo-block">
                <h3>Yurt İçi Satış</h3>
                <div className="fi-block-mid">
                    <h4>7,023,875₺</h4>
                    <p>+3,2 <span><ArrowUpward/></span></p>
                </div>
                <p>Son 1 Ay</p>
            </div>

            <div className="featuredinfo-block">
                <h3>Yurt Dışı Satış</h3>
                <div className="fi-block-mid">
                    <h4>$3,872,981</h4>
                    <p>-1,4 <span><ArrowDownward/></span></p>
                </div>
                <p>Son 1 Ay</p>
            </div>

            <div className="featuredinfo-block">
                <h3>Toplam Satış</h3>
                <div className="fi-block-mid">
                    <h4>59,465,020₺</h4>
                    <p>-11,4 <span><ArrowDownward/></span></p>
                </div>
                <p>Son 1 Ay</p>
            </div>
        </div>
      </div>
    )
  }
}
