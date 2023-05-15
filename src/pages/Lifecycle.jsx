import React from 'react'

export const Lifecycle = () => {
  return (
    <div className="components-conteiner">
      <h1 className = "title">Lifecycle Methods</h1>
      <p>
      Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.
      </p>
      <h2>Mounting means putting elements into the DOM.</h2>
      <p>
      The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.<br/>
      The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.<br/>
      The render() method is required, and is the method that actually outputs the HTML to the DOM.<br/>
      The componentDidMount() method is called after the component is rendered.

This is where you run statements that requires that the component is already placed in the DOM.

      </p>
      <pre className="code-block">
      {`
      class Header extends React.Component {
        constructor(props) {
          super(props);
          this.state = {favoritecolor: "red"};
        }
        componentDidMount() {
          setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
          }, 1000)
        }
        render() {
          return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          );
        }
      }
      
      ReactDOM.render(<Header />, document.getElementById('root'));
      `}
      </pre>
      <h2>The next phase in the lifecycle is when a component is updated.</h2>
      <p>Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.<br/>
      In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

The default value is true.<br/>
The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.<br/>
In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.<br/>
The componentDidUpdate method is called after the component is updated in the DOM.
      </p>
      <pre className='code-block'>
        {`
        class Header extends React.Component {
          constructor(props) {
            super(props);
            this.state = {favoritecolor: "red"};
          }
          componentDidMount() {
            setTimeout(() => {
              this.setState({favoritecolor: "yellow"})
            }, 1000)
          }
          componentDidUpdate() {
            document.getElementById("mydiv").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
          }
          render() {
            return (
              <div>
              <h1>My Favorite Color is {this.state.favoritecolor}</h1>
              <div id="mydiv"></div>
              </div>
            );
          }
        }
        
        ReactDOM.render(<Header />, document.getElementById('root'));`}
      </pre>
      <h2>When a component is removed from the DOM it's the unmounting</h2>
      <p>The componentWillUnmount method is called when the component is about to be removed from the DOM.</p>
      <pre className='code-block'>{`
      class Container extends React.Component {
        constructor(props) {
          super(props);
          this.state = {show: true};
        }
        delHeader = () => {
          this.setState({show: false});
        }
        render() {
          let myheader;
          if (this.state.show) {
            myheader = <Child />;
          };
          return (
            <div>
            {myheader}
            <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
          );
        }
      }
      
      class Child extends React.Component {
        componentWillUnmount() {
          alert("The component named Header is about to be unmounted.");
        }
        render() {
          return (
            <h1>Hello World!</h1>
          );
        }
      }
      
      ReactDOM.render(<Container />, document.getElementById('root'));`}</pre>
      </div>
  )
}
