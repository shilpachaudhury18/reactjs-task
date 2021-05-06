class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [1,0,0,0,0,1,0,0,0,1],
      arr2: [0,1,2,3,4,5,6,7,7,8,9,10],
      value: -1,
      value2: -1
    }
  }
  secondevaluate () {
  let count = 0;
  let maxVal = 0;
  	this.state.arr.forEach(val => {
    	if(val == 1) count++;
      else {
        maxVal = Math.max(maxVal, count);
        count = 0;
      }
    })
    
    this.setState({
    value: maxVal
    })
  }
  
  thirdevaluate() {
  	let prev = -1;
    this.state.arr2.forEach(val => {
    	if(prev == val) {
      	this.setState({
    			value2: prev
    		})
        return;
      }
      else {
      	prev = val
      }
    })
  }
  
  render() {
    return (
      <div>
      <button onClick={() => this.secondevaluate()}>get 2nd Answer</button>
        <p>{this.state.value == -1 ? "" : this.state.value}</p>
        
        <button onClick={() => this.thirdevaluate()}>get 3rd Answer</button>
        <p>{this.state.value2 == -1 ? "" : this.state.value2}</p>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.querySelector("#app"))
