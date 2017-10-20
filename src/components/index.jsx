import React from 'react';
import ReactDOM from 'react-dom';
import Masker from './dialog.jsx';

class App extends React.Component{
    state={
        isShow:false
    }
    showTip=()=>{
        this.refs.masker.show()
    }
    successFn=()=>{
        console.log('点击了确定')
    }
    cancelFn=()=>{
        console.log('点击了取消')
    }
    render(){
        return <div>
            <header></header>
            <section>
                <button onClick={this.showTip}>点击提示</button>
                <Masker ref="masker" tip="提示信息" content="内容区" successFn={this.successFn} cancelFn={this.cancelFn}/>
            </section>
            <footer></footer>
        </div>
    }
}

export default App;