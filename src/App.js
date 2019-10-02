import React from 'react';
import './App.css';
import RatioBar from './RatioBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'A',
          value: 120,
          color: '#eb4d4b'
        },
        {
          name: 'B',
          value: 12,
          color: '#22a6b3'
        },
        {
          name: 'C',
          value: 46,
          color: '#6ab04c'
        },
        {
          name: 'D',
          value: 21,
          color: '#e056fd'
        }
      ],
      width: 500,
      showPercent: true
    }
  }
  handleChange = tags => (event) => {
    let index = this.state.data.findIndex(x=> x.name === event.target.id);
    let value = parseInt(event.target.value);

    if (index !== -1) {
      this.setState({
        data: [
          ...this.state.data.slice(0,index),
          Object.assign({}, this.state.data[index], {value}),
          ...this.state.data.slice(index+1)
        ]
      });
    }
  }
  handleCheck = () => {
    this.setState({
      showPercent: !this.state.showPercent
    });
  }
  render() {
    let NumberInputs = this.state.data.map(function (item, i) {
      return (
        <div key={i}>
          <label htmlFor={item.name}>{item.name}: </label>
          <input type="number" id={item.name} onChange={this.handleChange()} value={item.value}/>
        </div>
      );
    }, this);

    return (
      <div>
        <div className="demo-box">
          <div>
            <p>This component is used to display the ratio between different values. It could be used in dashboards to track the popularity of certain items in relation to others. For example, a website could track and display the devices that users are on when interacting with a site (eg. phone, tablet, computer) to see which one is most popular. The ratio bar could also be useful for tracking polls with more than 2 outcomes.</p>
            <p>This bar was inspired by looking at website polls, and thinking about how best to diplay results when there are more than 2 outcomes. The RatioBar takes in an array of data with each item's name, value, and color, the width of the bar, and a showPercent toggle, which switches between displaying percentages and actual values. There is a lot of data that is not just binary, and this component is useful for displaying and comparing that sort of data.</p>
            <p>I named the bar <italic>RatioBar</italic> because it is the same form as a loading bar, but displays the <italic>ratio</italic> of values between multiple items. <italic>width</italic> was a pretty simple name as it just takes in a number that is the width (in px) of the bar. <italic>showPercent</italic> was named as it shows the percentage if true is passed to it and false otherwise.</p>
          </div>
          <div>
            <label htmlFor="toggle">Toggle Percentage: </label>
            <input id="toggle" type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.showPercent} />
          </div>
          <div>
            <p>Data:</p>
            {NumberInputs}
          </div>
        </div>
        <RatioBar data={this.state.data} width={this.state.width} showPercent={this.state.showPercent} />
      </div>
    );
  }
}