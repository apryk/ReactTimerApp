var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  // componentDidUpdate - called every time component state is updated
  // called after either props or state gets updated
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer(); 
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUpdate: function(nextProps, nextState) {

  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount');
    clearInterval(this.timer);
    this.timer = undefined;
  },
  componentWillMount: function() {
    console.log('componentWllMount');
  },
  componentDidMount: function() {
    console.log('componentDidMount');
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0,
        //countdownStatus: newCount >= 0 ? 'started' : 'stopped'
      });
      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus) {
    console.log(`newStatus: ${newStatus}`);
    this.setState({countdownStatus: newStatus});
  },
  render: function() {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        // countdownStatus and onStatusChange are properties
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}></Controls>
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };
    return(
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});
module.exports = Countdown;
