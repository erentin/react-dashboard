import React from 'react'
import "./widgetlg.css"

function Widgetlg() {
    return (
      <div className='widgetlg'>
          <h1>Son Satışlar</h1>
          <div className="latest-sales">
              <table width="90%">
                  <tr>
                    <th>Müşteri</th>
                    <th>Tarih</th>
                    <th>Adet</th>
                    <th>Durum</th>
                  </tr>
                  
                  <tr width="90%">
                    <td><img src="https://images.unsplash.com/photo-1656353538364-9c31defbdccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" /></td>
                    <td><p className='date-table'>11/05/2022</p></td>
                    <td><p className="amount-table">102</p></td>
                    <td><p className="status-table">Pending</p></td>
                  </tr>

                  <tr width="90%">
                    <td><img src="https://images.unsplash.com/photo-1656248394039-dceee71a24f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" /></td>
                    <td><p className='date-table'>11/05/2022</p></td>
                    <td><p className="amount-table">102</p></td>
                    <td><p className="status-table">Pending</p></td>
                  </tr>

                  <tr width="90%">
                    <td><img src="https://images.unsplash.com/photo-1651378499332-2d578930b9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80" alt="" /></td>
                    <td><p className='date-table'>11/05/2022</p></td>
                    <td><p className="amount-table">102</p></td>
                    <td><p className="status-table">Pending</p></td>
                  </tr>
                  
              </table>
          </div>
      </div>
    )
  }

export default Widgetlg