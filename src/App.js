// nested routes
// https://www.youtube.com/watch?v=bj5SW7_FvVs&list=PLddLA9QpG2T2__tPfi6nwaL8Rf_wWQaz7&index=19

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Container, Grid } from "semantic-ui-react";

import Header from "./Header";

import Signin from "./pages/Signin";

import Posts from "./pages/Posts";

import NewPost from "./pages/NewPost";

import Post from "./pages/Post";

import Topics from "./components/Topics";

// App() function sets up domain address for the web application
// function App() {
//     // return "Hello! Social Platform!"
//     return (
//         <BrowserRouter>
//             <Header />
//             <Routes>
                
//                 {/* call function from Posts.js */}
//                 {/* <Route path="/" element="Homepage"> */}
//                 <Router>
//     );
// }Route path="/posts" element={<Posts/>}>
//                 </Route>

//                 {/* call function from Signin.js */}
//                 <Route path="/signin" element={<Signin />}>    
//                 </Route>

//                 {/* call function from NewPost.js */}
//                 <Route path="/new-post" element={<NewPost />}>    
//                 </Route>

//                 {/* function to direct to domain address of each post */}
//                 {/* <Route path="/posts/:postId" element="Hello, Post" exact> */}
//                 <Route path="/posts/:postId" element={<Post />} exact>
//                 </Route>

//             </Routes>
//         </Browser

function App() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/posts" element={<PostViewLayout />}>
            <Route path="/posts" element={<Posts />} exact />
            <Route path="/posts/:postId" element={<Post />} exact />
          </Route>
  
          <Route path="/my" element={<MyAccountLayout />}>
            <Route path="/my/posts" element="My posts" exact />
            <Route path="/my/collections" element="My collections" exact />
            <Route path="/my/settings" element="Member information" exact />
          </Route>

          <Route exact path="/signup" element={<Signin />} />
          <Route exact path="/new-post" element={<NewPost />} />
          <Route exact path="posts/:postId" element={<Post />} />

        </Routes>
      </BrowserRouter>
    );
  }
  
  const PostViewLayout = () => {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Topics />
            </Grid.Column>
            <Grid.Column width={10}>
              <Outlet />
            </Grid.Column>
            <Grid.Column width={3}>Space</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  };
  
  const MyAccountLayout = () => {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              {/* <Topics /> */}
              Member Center
            </Grid.Column>
            <Grid.Column width={10}>
              <Outlet />
            </Grid.Column>
            <Grid.Column width={3}>Space</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  };


export default App
