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

// const page = (
//     <div>
//         <h1>My awesome website in React</h1>
//         <h3>Reasons I love React</h3>
//         <ol>
//             <li>It's composable</li>
//             <li>It's declarative</li>
//             <li>It's a hireable skill</li>
//             <li>It's actively maintained by skilled people</li>
//         </ol>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))



// const navBar = (
//     <nav>
//         <h1>Tambourine</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navBar, document.getElementById("root"));

// function CustomComponent(){
//     return (
//         <ol>
//             <li>It's a marketable skill</li>
//             <li>I can make useful and fun apps</li>
//             <li>I like learning new coding stuffs</li>
//         </ol>               
//     )   
// }

// ReactDOM.render(< CustomComponent />, document.getElementById("root"));
// function Page(){
//     return (
//     <div>
//       <img src="./react-logo.png" width="40px" />
//       <h1>Fun Facts About React</h1>
//       <ul>
//         <li>Was First Released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k stars on github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
    
//   )
// }  
//   ReactDOM.render(< Page /> , document.getElementById("root"))

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Content(){
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a marketable skill</li>
                <li>I can make useful and fun apps</li>
                <li>I like learning new coding stuffs</li>
            </ol> 
        </div> 
    )
}

function Footer(){
    return(
        <footer>
            <small>© 2021 Marconi development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <Page />, 
    document.getElementById("root"));
