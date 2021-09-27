import {MdDashboard,MdHome} from "react-icons/md";
 export function Pageheader(props){

    return <div className="expense-chat-header">
    <div className="header-left">                
        <div className="header-title" >{props.headername}</div>                
        <div className="header-dashboard"><MdDashboard></MdDashboard> </div>
        <div className="header-home">< MdHome></MdHome></div>
        <div></div>
    </div>
</div>
}

export function Datatable(props){
    let table_data=props.table_data;
    let th=table_data.header_columns.map((header)=>{
        return <th> {header}</th>
    })
    let tr= [];
    for(let i=0;i<table_data.table_column_data.length;i++){
        let td= [];
        for(let j=0;j<table_data.table_column_data[i].length;j++){
            td.push(<td>{table_data.table_column_data[i][j]}</td>)
        }
        tr.push(<tr>{td}</tr>);
    }    
    return <table className="simple-datatable">{th}{tr}</table>;
}

export default Pageheader;
    

