import React from "react";
import {getWell} from '../api/api'
import '../converter/style.css'

class Converter extends React.Component{
constructor(props){
    super(props);
    this.state={
        numberUAH:0,
        numberUSD:0,
        buy:'',
        sale:'',
    }
}
componentDidMount(){
    getWell().then(data=> {
        this.setState({
            buy: data[0].buy,
            sale: data[0].sale
        })
    })

}
    newInput=(event)=>{
        const{buy, sale} = this.state;
        const {target: {name,value}} = event;
        if(isNaN(Number(value))|| Number(value) < 0 ){
        } else{
            if(name === 'numberUAH'){
                this.setState({
                    numberUAH: value,
                    numberUSD: value / buy
                })
            } else {
                this.setState({
                    numberUSD:value,
                    numberUAH: value * sale
                })
            }
        }
    }

render(){
    return(
        <>
         <div className="wrapper">
                <h2>Converter</h2>
        <label/>UAH
        <input
        value={this.state.numberUAH}
        onChange={this.newInput}
        name='numberUAH'
         type='text'></input>
        
        <label/>USD
        <input 
        value={this.state.numberUSD}
        onChange={this.newInput}
        name='numberUSD'
        type='text'></input>
        </div>
        </>
    )
}
}
export default Converter