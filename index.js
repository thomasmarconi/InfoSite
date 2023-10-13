// ReactDOM.render(<h1>Hello, errybody!</h1>, document.getElementById("root"));
// ReactDOM.render(<h1>Hello, errybody!</h1>, document.querySelector("#root"));

// ReactDOM.render(<ul><li>hello</li><li>world</li></ul>, document.querySelector("#root"));

// this is how you had to do the above in vanilla js
// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// // <h1 class="header">

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

// /*
// {
//     type: "h1", 
//     key: null, 
//     ref: null, 
//     props: {
//         className: "header", 
//         children: "This is JSX"
//     }, 
//     _owner: null, 
//     _store: {}
// }
//  */

// // JSX
// ReactDOM.render(element, document.getElementById("root"))

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// console.log(page)

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

const navBar = (
    <nav>
        <h1>Tambourine</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navBar, document.getElementById("root"));