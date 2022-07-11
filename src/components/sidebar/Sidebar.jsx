import React, { Component } from 'react'
import "./sidebar.css"
import {Home,Analytics,AttachMoney,SupervisedUserCircle,ImportExport,Assessment,Email,ForwardToInbox,Message} from '@mui/icons-material';

export default class Sidebar extends Component {
  render() {
    return (
        <div className="sideBar">
             <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h2 className="sidebarHeader">Yönetim Paneli</h2>
                    <ul className="sidebarList">
                        <li className="sidebarClassItem">
                            <p><Home/></p>
                            <h7>Ana Sayfa</h7></li>
                        <li className="sidebarClassItem">
                            <p><Analytics/></p>
                            <h7>Analizler</h7></li>
                        <li className="sidebarClassItem">
                            <p><AttachMoney/></p>
                            <h7>Satışlar</h7></li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h2 className="sidebarHeader">Hızlı Menü</h2>
                    <ul className="sidebarList">
                        <li className="sidebarClassItem">
                            <p><SupervisedUserCircle/></p>
                            <h7>Kullanıcılar</h7></li>
                        <li className="sidebarClassItem">
                            <p><ImportExport/></p>
                            <h7>İthalat ve İhracat</h7></li>
                        <li className="sidebarClassItem">
                            <p><Assessment/></p>
                            <h7>Raporlar</h7></li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h2 className="sidebarHeader">Bildirimler</h2>
                    <ul className="sidebarList">
                        <li className="sidebarClassItem">
                            <p><Email/></p>
                            <h7>Posta Kutusu</h7></li>
                        <li className="sidebarClassItem">
                            <p><ForwardToInbox/></p>
                            <h7>Ticket</h7></li>
                        <li className="sidebarClassItem">
                            <p><Message/></p>
                            <h7>Mesajlar</h7></li>
                    </ul>
                </div>
             </div>
        </div>
    )
  }
}
