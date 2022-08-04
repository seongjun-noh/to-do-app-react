import React, {Component} from "react";
import "./App.css"

class App extends Component {
  state = {
    todoDatas : [
      {
        id: "1",
        title: "공부하기",
        completed: true,
      },
      {
        id: "2", 
        title: "청소하기",
        completed: false,
      },
    ],
    value : ""
  }

  btnStyle = {
    color: "#fff",
    botrder: "none",
    padding: "5px 9px",
    border:"none",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }

  onClickDeleteBtn = (id) => {
    let newTodoDatas = this.state.todoDatas.filter((data) => data.id !== id);
    this.setState({todoDatas : newTodoDatas})
  }

  onChangeInput = (e) => {
    this.setState({value : e.target.value})
  }

  onClickSubmitBtn = (e) => {
    e.preventDefault();
    
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    }

    this.setState({todoDatas : [...this.state.todoDatas, newTodo]})
    this.setState({value : ""})
  }

  render() {
    return (
      <div className="comtainer">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>
          {this.state.todoDatas.map((data) => (
            <div key={data.id} style={this.getStyle()}>
              <input type={"checkbox"} id={data.id}/>
              <label htmlFor={data.id}>{data.title}</label>
              <button onClick={() => this.onClickDeleteBtn(data.id)} style={this.btnStyle}>X</button>
            </div>
          ))}
          <form style={{ display: 'flex' }} onSubmit={(event) => this.onClickSubmitBtn(event)} >
            <input 
              type="text"
              name="value"
              style={{ flex:'10', padding: '5px' }}
              placeholder="해야 할 일을 입력하세요." 
              value={this.state.value}
              onChange={(event) => this.onChangeInput(event)}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: '1' }}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default App;