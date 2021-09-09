import React from 'react';
import '../css/home.css';
import { FaChevronCircleRight, FaPlusCircle } from "react-icons/fa";

class HomePage extends React.Component {

    render() {
        return <div>
            <header>Expense List</header>
            <div>
                <div className="chatparent">
                    <ChatRow></ChatRow>
                </div>
                <ChatDetailPage></ChatDetailPage>
            </div>

        </div>
    }
}

class ChatRow extends React.Component {
    constructor() {
        super();
        var _this = this;
        this.state = { chatdata: [{ name: "", id: "" }] };



        fetch('http://localhost:3000/sampledata/data.json')
            .then(response => {
                response.json().then((d) => {
                    _this.setState({ chatdata: d.topics });
                })

            })

    }

    render() {
        let listItems = this.state.chatdata.map((topics) =>
            <ChatElement chat_items={topics}></ChatElement>
        );


        return <div>{listItems}</div>
    }

}

class ChatElement extends React.Component {

    render() {
        return <div className="chatrow_item">

            <span className="chat_title"> {this.props.chat_items.name}</span>
            <span className="chat_right_icon"> <FaChevronCircleRight></FaChevronCircleRight></span>
            <div className="chat_description"> {this.props.chat_items.name}</div>

        </div>
    }
}

class ChatDetailPage extends React.Component {

    render() {
        return <div className="chat_detail">
            <div className="chatdatarow_parent"></div>
            <ChatDetailBottom />
        </div>
    }
}
class ChatDetailDataRow extends React.Component {

}
class ChatDetailBottom extends React.Component {
    render() {
        return (
            <div className="chatdetailbottom">
                <div className="h100per float-right" >
                <div className="ml3per">
                     <input className="w5per h30per" /> </div>
                <div className="ml2per">
                     <input className="w40per h30per" /> </div>                
                <div className="ml3per addnew_chatdet_row"><FaPlusCircle></FaPlusCircle></div>
                </div>
            </div>
                        )
    }
}

export default HomePage;