import { useParams } from 'react-router-dom'
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import ModuleList from './module-list'
import LessonTabs from './lesson-tabs'
import TopicPills from './topic-pills'
import WidgetList from '../widgets/widget-list'
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const reducer = combineReducers({ moduleReducer, lessonReducer, topicReducer, widgetReducer })

const store = createStore(reducer)

const CourseEditor = () => {
    const { moduleId, lessonId, topicId } = useParams()

    return (
        <Provider store={store}>
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm justify-content-between px-0">
                    <div className="navbar-brand col-3 font-weight-bold text-center">
                        <i onClick={() => null} className="fa fa-chevron-left mr-4"></i>
                        <div className="d-inline-block">
                            Course Name
        </div>
                    </div>
                    <ul className="navbar-nav col-9 justify-content-between">
                        <li className="nav-item">
                            <button className="btn btn-dark nav-link px-4 ml-2" href="#">
                                Build
            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-dark nav-link px-4 ml-2 active" href="#">
                                Pages
            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-dark nav-link px-4 ml-2" href="#">
                                Theme
            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-dark nav-link px-4 ml-2" href="#">
                                Store
            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-dark nav-link px-4 ml-2" href="#">
                                Apps
            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-dark nav-link px-4 ml-2" href="#">
                                Settings
            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-dark nav-link px-4 ml-2" href="#">
                                <i className="fa fa-plus"></i>
                            </button></li>
                    </ul>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="min-vh-100 col-3 bg-dark">
                            <ModuleList />
                        </div>
                        <div className="col-9 pr-4">
                            {moduleId && <div className="mb-3 d-flex mt-2">
                                <LessonTabs />
                            </div>}
                            {lessonId && <div className="mb-3 d-flex mt-2">
                                <TopicPills />
                            </div>}
                            {topicId && <div className="mb-3 d-flex mt-2">
                                <WidgetList />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default CourseEditor