import React from 'react'
import "./widgetsm.css"
import {Visibility} from '@mui/icons-material';
// import PropTypes from 'prop-types'

function Widgetsm() {
  return (
    <div className='widgetsm'>
        <div className="widgetsm-block">
            <h3 className="members-title">Kullanıcılar</h3>
            <div className="member-list">
                <div className="member-item">
                    <img src="https://images.unsplash.com/photo-1514543250559-83867827ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80" alt="" />
                    <div className="member-name">
                        <h6>Eren Tın</h6>
                        <p>Software Engineer</p>
                    </div>
                    <div className="buttonDiv">
                        <p className='iconke'><Visibility/></p>
                        
                        <button className='button-display'>Display</button>
                    </div>
                </div>
                <div className="member-item">
                    <img src="https://images.unsplash.com/photo-1514543250559-83867827ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80" alt="" />
                    <div className="member-name">
                        <h6>Eren Tın</h6>
                        <p>Software Engineer</p>
                    </div>
                    <div className="buttonDiv">
                        <p className='iconke'><Visibility/></p>
                        
                        <button className='button-display'>Display</button>
                    </div>
                </div>
                <div className="member-item">
                    <img src="https://images.unsplash.com/photo-1514543250559-83867827ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80" alt="" />
                    <div className="member-name">
                        <h6>Eren Tın</h6>
                        <p>Software Engineer</p>
                    </div>
                    <div className="buttonDiv">
                        <p className='iconke'><Visibility/></p>
                        
                        <button className='button-display'>Display</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Widgetsm
