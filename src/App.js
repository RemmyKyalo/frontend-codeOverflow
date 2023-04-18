import Navbar from "./components/Nav";
import SplashPage from "./components/Splash";

function App() {
  return (
    <>
      <Navbar />
      <div id="page-content">
        <Switch>
        <Route exact path="/">
              <SplashPage />
        </Route>
        
        <Route exact path="/questions/:questionId">
     <LeftSidebar />
     <QuestionShow/>
 </Route>

      </Switch>
      </div>
    </>
  );
}

export default App;
