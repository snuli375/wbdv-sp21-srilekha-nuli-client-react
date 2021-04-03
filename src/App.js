import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CourseManager from './components/course-manager.js'
import './App.css';
import CourseEditor from './components/course-editor/course-editor.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/courses/:layout/editor/:courseId" component={CourseEditor} />
        <Route path="/courses/:layout" component={CourseManager} />
        <Route>Wrong page!</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
