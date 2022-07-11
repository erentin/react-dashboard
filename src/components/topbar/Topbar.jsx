import React, { Component } from 'react'
import "./topbar.css"
import {NotificationsNone,Language,Settings} from '@mui/icons-material';

export default class Topbar extends Component {
  render() {
    return (
      <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topbarLeft">
                <img src="https://b4b.motorasin.com/Content/images/logo.png"  height="50px" alt="" />
                <img src="https://www.motorasin.com/uploads/aboutcontent/84ac08ed-b186-4285-8f46-fc854df1b511.png" height="100px" alt="" />
            </div>
            <div className="topbarRight">
                <div className="topbarIcons">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIcons">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIcons">
                    <Settings/>
                    <span className="topIconBadge">2</span>
                </div>
                <img src="https://images.unsplash.com/photo-1514543250559-83867827ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80" alt="" />
            </div>
        </div>
      </div>
    )
  }
}
