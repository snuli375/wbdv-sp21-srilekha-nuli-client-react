import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CourseManager from './components/course-manager.js'
import './App.css';
import CourseEditor from './components/course-editor/course-editor.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CourseManager}>
        </Route>
        <Route path="/editor" component={CourseEditor} />
        <Route>Wrong page!</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
