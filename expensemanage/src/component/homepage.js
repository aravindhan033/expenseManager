import { React, useState, useEffect } from 'react';
import '../css/home.css';
import {MdDashboard,MdHome,MdImage,MdTagFaces,MdChevronRight,MdSend} from "react-icons/md";

function HomePage() {



    return (<div>
        <div className="expense-chat-header">
            <div className="header-left">                
                <div className="header-title" >Expense manager</div>                
                <div className="header-dashboard"><MdDashboard></MdDashboard> </div>
                <div className="header-home">< MdHome></MdHome></div>
                <div></div>
            </div>
        </div>
        <div className="flex mt1per pl2vh">
            <div className="chatparent">            
            <AddNewExpenseType></AddNewExpenseType>
                <ChatRow></ChatRow>
                
            </div>
            <ChatDetailPage></ChatDetailPage>
        </div>

    </div>
    )
}
function AddNewExpenseType(){
    return <div className="addnewexpensetype">
        <div><span >Add</span><MdSend className="addnewexpensetype-icon" ></MdSend></div>
        
        
    </div>;
}

function ChatRow() {

    const [chatdata, setChatdata] = useState([{ description: "", title: "", id: "" }]);


    useEffect(() => {
        fetch('http://localhost:3000/sampledata/data.json')
            .then(response => {
                response.json().then((d) => {
                    setChatdata(d.topics);
                })

            })
    }, [])






    let listItems = chatdata.map((topics) =>
        <ChatElement key={topics.id} chat_items={topics}></ChatElement>
    );


    return (<div className="chatrow">{listItems}</div>);


}

function ChatElement(props) {


    return <div className="chatrow_item">

        <span className="chat_title"> {props.chat_items.title}</span>
        <span className="chat_right_icon"> <MdChevronRight></MdChevronRight></span>
        <div className="chat_description"> {props.chat_items.description}</div>

    </div>

}

function ChatDetailPage() {
    const [chatdata, setChatdata] = useState([{ description: "", title: "", id: "" }]);


    useEffect(() => {
        fetch('http://localhost:3000/sampledata/data.json')
            .then(response => {
                response.json().then((d) => {
                    setChatdata(d.topics);
                })

            })
    }, []);

    let chatItems=chatdata.map((expense_item)=>{
        return <ChatDetailDataRow key={expense_item.id} item_data={expense_item}></ChatDetailDataRow>
    });

    return <div className="chat_detail">
        <ChatDetailHeader headername="Swiggy" ></ChatDetailHeader>
        <div className="chatdatarow_parent">            
            {chatItems}
        </div>
        <ChatDetailBottom />
    </div>

}
function ChatDetailHeader(props){
    return <div className="expense-chatdetail-header">
        <div className="expense-chatdetail-header-img"><MdTagFaces></MdTagFaces></div>
        <div className="expense-chatdetail-header-container">
        <div className="expense-chatdetail-header-title">{props.headername}</div>
        <div className="expense-chatdetail-header-subtitle">3435</div>
        </div>
        
        </div>
}
function ChatDetailDataRow(props) {
    let classname=" expense-item ";
    if( Number(props.item_data.id)%2==0 ){
        classname+="my-expense-item "
    }
    return (
    <div className={classname}>
        <div className="expense-item-user"> Aravind</div>
        <div className="expense-item-amount">$ {props.item_data.price} </div>
        <ChatImageData item_data={props.item_data}></ChatImageData>
        <div className="expense-item-content">{props.item_data.description}</div>
        <div className="expense-item-time"> 12:34 pm</div>
    </div>);

}

function ChatImageData(props){
    if(props.item_data.image==null){
        return (<div></div>)
    }
    else{
        return (<div className="expense-item-image"><img loading="lazy" src={props.item_data.image}></img></div>)
    }
    return
}

function ChatDetailBottom() {

    return (
        <div className="chatdetailbottom">
            <div className="flex flex-flow-reverse h100per pt2vh"  >
                <div className="addnew_chatdet_row w10per" >
                    <button className="primary-button">Add</button>
                </div>
                <div className="w70per"><input placeholder="Reason..." className="h50per w90per" /> </div>
                <div className="w15per">
                <input placeholder="Amount..." className="h50per w50per amount-field" />
                    </div>
                <div className="w5per pt1vh">
                    <i className="chat-attach"><MdImage></MdImage></i>

                    
                </div>

            </div>
        </div>
    )

}

export default HomePage;