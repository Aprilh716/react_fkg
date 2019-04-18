import React,{Component} from 'react';
import {Header} from "./styledComponents";

export default class Message extends Component{
    render(){
        return(
            <div>
                <Header/>
                <h2>信息</h2>
            </div>
        )
    }
}