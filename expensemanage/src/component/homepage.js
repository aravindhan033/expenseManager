import { React, useState, useEffect } from 'react';
import '../css/home.css';
import Pageheader from "./common"
import {AddCatergroyItem,GetAllCategory,GetCategoryExpense,AddCatergroyExpenseItem} from "../js/home"
import { useSelector,useDispatch } from 'react-redux'
import {MdImage,MdTagFaces,MdChevronRight,MdSend} from "react-icons/md";

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

    let chatdata=useSelector(state => state.category.category_item); 
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
    const dispatch = useDispatch();
    function openDetailPage(){                
        GetCategoryExpense(0,props.chat_items.id).then((data)=>{            
            dispatch({ type: 'categoryExpense/addAll', payload: {categoryDetails:{id:props.chat_items.id,name:props.chat_items.category_name},categoryExpenseItem:data} })   
        });
    }

    return <div onClick={openDetailPage} className="chatrow_item">
        <span className="chat_title"> {props.chat_items.category_name}</span>
        <span className="chat_right_icon"> <MdChevronRight></MdChevronRight></span>        
    </div>

}

function ChatDetailPage() {
    let chatdata=useSelector(state=>state.categoryExpense);
    
    let chatItems=chatdata.categoryExpenseItem.map((expense_item)=>{
        return <ChatDetailDataRow key={expense_item.id} item_data={expense_item}></ChatDetailDataRow>
    });

    if(chatdata.categoryDetails.id!=null){
        return <div className="chat_detail">
        <ChatDetailHeader item_data={chatdata.categoryDetails} ></ChatDetailHeader>
        <div className="chatdatarow_parent">            
            {chatItems}
        </div>
        <ChatDetailBottom category_id={chatdata.categoryDetails.id}/>
        </div>
    }
    else{
        return <div className="chat_detail"></div>
    }

}
function ChatDetailHeader(props){
    return <div className="expense-chatdetail-header">
        <div className="expense-chatdetail-header-img"><MdTagFaces></MdTagFaces></div>
        <div className="expense-chatdetail-header-container">
        <div className="expense-chatdetail-header-title">{props.item_data.name}</div>
        <div className="expense-chatdetail-header-subtitle">{props.item_data.id}</div>
        </div>
        
        </div>
}
function ChatDetailDataRow(props) {
    let classname=" expense-item ";
    if( localStorage.getItem("userid")==props.item_data.expense_addedby_id ){
        classname+="my-expense-item "
    }
    return (
    <div className={classname}>
        <div className="expense-item-user"> {props.item_data.expense_addedby_name}</div>
        <div className="expense-item-amount">$ {props.item_data.expense_amount} </div>
        <ChatImageData item_data={props.item_data.user_pic}></ChatImageData>
        <div className="expense-item-content">{props.item_data.expense_reason}</div>
        <div className="expense-item-time"> {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(props.item_data.expense_added_time)}</div>
    </div>);

}

function ChatImageData(props){
    if(props.item_data==null){
        return (<div></div>)
    }
    else{
        return (<div className="expense-item-image"><img loading="lazy" src={props.item_data.image}></img></div>)
    }
    return
}

function ChatDetailBottom(props) {

    const dispatch =useDispatch();
    function checkCreateCategoryExpenseItem(){
        let item_reason=document.getElementById("expense_item_reason").value
        let item_amount=document.getElementById("expense_item_amount").value
        if(item_reason!=null && item_reason.trim()!="" && item_amount!=null && item_amount.trim()!=""){
            AddCatergroyExpenseItem({amount:item_amount,category_id :props.category_id,reason:item_reason}).then((result)=>{                
                dispatch({ type: 'categoryExpense/add', payload: result })   
            });
        }        
    }

    return (
        <div className="chatdetailbottom">
            <div className="flex flex-flow-reverse h100per pt2vh"  >
                <div className="addnew_chatdet_row w10per" >
                    <button onClick={checkCreateCategoryExpenseItem} className="primary-button">Add</button>
                </div>
                <div className="w70per"><input id="expense_item_reason" placeholder="Reason..." className="h50per w90per" /> </div>
                <div className="w15per">
                <input id="expense_item_amount" placeholder="Amount..." className="h50per w50per amount-field" />
                    </div>
                <div className="w5per pt1vh">
                    <i className="chat-attach"><MdImage></MdImage></i>

                    
                </div>

            </div>
        </div>
    )

}

export default HomePage;