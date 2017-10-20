import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    buttonStyle = {
        width: "50px",
        height: "36px",
        fontSize: "16px",
        margin: "0 3px",
        outline: "none",
        border: "0",
        borderRadius: "5px"
    }
    certainStyle = {
        background: "deepskyblue",
        color: "#fff",
        ...this.buttonStyle
    }
    cancelStyle = {
        background: "#ccc",
        color: "#fff",
        ...this.buttonStyle
    }
    render() {
        let type = this.props.type;
        let txt = this.props.txt ? this.props.txt : '确定';
        let btnHtml = '';
        switch (type) {
            case 'certain':
                btnHtml = <button className="certain" style={this.certainStyle} onClick={this.props.callback}>{txt}</button>;
                break;
            case 'cancel':
                btnHtml = <button className="cancel" style={this.cancelStyle} onClick={this.props.callback}>{txt}</button>;
                break;
        }
        return btnHtml
    }
}
class Title extends React.Component {
    style = {
        height: "36px",
        lineHeight: "36px",
        textAlign: "center",
        position: "relative",
        fontSize: "16px",
        borderBottom: "1px solid #ccc"
    }
    closeStyle = {
        fontSize: "22px", 
        position: "absolute", 
        right: "10px", 
        top: "0"
    }
    render() {
        return <div className="dialog-title" style={this.style}>
            <h3>{this.props.tip}</h3>
            <span style={this.closeStyle} onClick={this.props.close}>×</span>
        </div>
    }
}
class Dialog extends React.Component {
    style = {
        position: "fixed",
        width: "70%",
        maxWidth: "600px",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        background: "#fff",
        borderRadius: "8px",
    }
    render() {
        return <div className="dialog" style={this.style}>
            {this.props.children}
        </div>
    }
}
class Masker extends React.Component {
    state={
        style:{
            position: "absolute",
            top:"0",
            left:"0",
            background: "rgba(0,0,0,.5)",
            width: "100%",
            height: "100%",
            display:'none'
        }
    }
    
    show = () => {
        let style = {...this.state.style};
        style.display = 'block';
        this.setState({
            style:{...style}
        })
    }
    hide = () => {
        let style = {...this.state.style};
        style.display = 'none';
        this.setState({
            style:{...style}
        })
    }
    certainFn=()=>{
        this.hide()
        this.props.successFn()
    }
    cancelFn=()=>{
        this.hide()
        this.props.cancelFn()
    }
    render() {
        return <div className="masker" style={this.state.style}>
            <Dialog>
                <Title tip={this.props.tip} close={this.hide}></Title>
                <div className="dialog-content" style={{ height: "100px", borderBottom: "1px solid #ccc", padding: "5px" }}>
                    <p>{this.props.content}</p>
                </div>
                <div className="dialog-btns" style={{ lineHeight: "60px", textAlign: "center" }}>
                    <Button type="certain" callback={this.certainFn}/>
                    <Button type="cancel" callback={this.cancelFn} txt="取消" />
                </div>
            </Dialog>
        </div>
    }
}
export default Masker;