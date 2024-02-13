"use client"
import styled, {css} from "styled-components";
import React, { ReactEventHandler } from "react";

interface _ButtonProperties {
    isPrimary: boolean,
    additionStyle?: StyleSheet,
    onClick: any,
    message: string,
}

interface _Style { 
    width: number,
    height: number,
}
interface _State{
    style: _Style,
    visible: boolean;
    remainingPresses: number
}



class Button extends React.Component<_ButtonProperties, _State>{
    state: _State = {
        style: {
            width: 300,
            height: 200,
        },
        visible: true,
        remainingPresses: 9 
    }
    className: string = "";
    constructor(props: _ButtonProperties){
        super(props);
        this.className = this.props.isPrimary ? "bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        : "bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded"
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick();
        if (!this.props.isPrimary) {
            this.shrink();
            this.setState({
                remainingPresses: this.state.remainingPresses-1
            });
        }
    }
    shrink() {
        if (this.state.remainingPresses > 0){
            this.setState({style : {
                height:  this.state.style.height - 10, 
                width: this.state.style.width-10, 
            }});
        } else {
            this.setState({
                visible: false
            });
        }
    }
    render(): React.ReactNode {
        return(
            <div style={{visibility: this.state.visible ? "visible" : "hidden"}}>
                 <button onClick={this.handleClick} className={this.className} style={this.state.style}>{this.props.message}</button>
            </div>
        )
    }
}

export default Button;
