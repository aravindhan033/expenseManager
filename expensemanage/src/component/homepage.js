import { React, useState, useEffect } from 'react';
import '../css/home.css';
import Pageheader from "./common"
import {AddCatergroyItem,GetAllCategory} from "../js/home"
import { useSelector,useDispatch } from 'react-redux'
import {MdDashboard,MdHome,MdImage,MdTagFaces,MdChevronRight,MdSend} from "react-icons/md";

function HomePage() {
    return (<div>
        <Pageheader headername="Expense manager"></Pageheader>
        <div className="flex mt1per pl2vh">        
            <div>
            <AddCatergroy></AddCatergroy>
            <div className="chatparent">                                        
                <ChatRow></ChatRow>                
            </div>
            </div>
            

            <ChatDetailPage></ChatDetailPage>
        </div>

    </div>
    )
}
function AddCatergroy(){
    const dispatch = useDispatch();

    function checkCreateCategory(){
        let category_name=document.getElementById("category_name").value
        if(category_name!=null && category_name.trim()!=""){
            AddCatergroyItem({"category_name":category_name}).then((result)=>{
                
                dispatch({ type: 'category/add', payload: {id:result.id,"category_name":category_name} })   
            });
        }        
    }

    return <div className="add-category">
        <span ><input placeholder="Add category..." id="category_name"></input></span>
        <span className="ml5per"> <button onClick={checkCreateCategory} className="primary-button h80per">Add Category</button></span>
    </div>
}

function AddNewExpenseType(){
    return <div className="addnewexpensetype">
        <div><span >Add</span><MdSend className="addnewexpensetype-icon" ></MdSend></div>
        
    </div>;
}

function ChatRow() {

    let chatdata=useSelector(state => state.category); 
    const dispatch = useDispatch();
   
    useEffect(() => {
        if(chatdata.length==0){
            GetAllCategory().then((data)=>{
                dispatch({ type: 'category/addAll', payload: data })   
            })
        }
    }, []);

    let listItems = chatdata.reverse().map((topics) =>
        <ChatElement key={topics.id} chat_items={topics}></ChatElement>
    );


    return (<div className="chatrow">{listItems}</div>);


}

function ChatElement(props) {

    

    return <div className="chatrow_item">
        <span className="chat_title"> {props.chat_items.category_name}</span>
        <span className="chat_right_icon"> <MdChevronRight></MdChevronRight></span>        
    </div>

}

function ChatDetailPage() {
    let chatdata=useSelector(state=>state.categoryExpense);
    const dispatch = useDispatch();
   
    useEffect(() => {
        if(chatdata.length==0){
            GetCategoryExpense().then((data)=>{
                dispatch({ type: 'categoryExpense/addAll', payload: data })   
            })
        }
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