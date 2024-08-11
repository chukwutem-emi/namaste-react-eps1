/**
 *  <div id="parent">
 *      <div id="child">
 *          <h1>i am h1 tag</h1>
 *          <h2>i am h2 tag</h2>
 *      </div>
 *  </div>
 * ReactElement(object) => HTML(Browser understand)
 */
const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, [React.createElement("h1", {},"i'm an h1 tag"), React.createElement("h2", {},"i'm an h2 tag"),])
);

console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);