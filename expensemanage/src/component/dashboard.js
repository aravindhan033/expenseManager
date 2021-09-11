import Pageheader from "./common"
import {Datatable} from "./common"
import { useState, useEffect } from 'react';
import "../css/dashboard.css"
function Dashboard(){
    return <div >
        <Pageheader headername="Dashboard"></Pageheader>
        <div className="dashborard-root">
            <div className="dashborard-parent">
                <DashboardItems title="This month top spend" ></DashboardItems>
                <DashboardItems title="This month high spend " ></DashboardItems>
                <DashboardItems title="" ></DashboardItems>
                <DashboardItems title="" ></DashboardItems>
                <DashboardItems title="" ></DashboardItems>
                <DashboardItems title="" ></DashboardItems>
                <DashboardItems title="" ></DashboardItems>

            </div>
        </div>
    </div>
}

function DashboardItems(props){
    const [dashboard_table_data, setdashboard_table_data] = useState({header_columns:["Category","Amount"],table_column_data:[["Swiggy",2],["Amazon",2]]})
    return <div className="dashboard-item">
        <div className="dashboard-item-title">{props.title}</div>
<div className="p7per">
        <Datatable table_data={ dashboard_table_data}></Datatable>
        </div>
    </div>
}


export default Dashboard;