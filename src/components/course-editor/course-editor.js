import { useHistory } from 'react-router-dom'
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import ModuleList from './module-list'
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const reducer = combineReducers({ moduleReducer, lessonReducer })

const store = createStore(reducer)

const CourseEditor = () => {
    const history = useHistory()

    return (
        <Provider store={store}>
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm justify-content-between px-0">
                    <div className="navbar-brand col-3 font-weight-bold text-center">
                        <i onClick={history.goBack} className="fa fa-chevron-left mr-4"></i>
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
                            <div className="mb-3 d-flex mt-2">
                                <button className="font-weight-bold py-2 px-3 border-0 btn-secondary mr-2 text-light">
                                    Topic 1
                </button>
                                <button className="font-weight-bold py-2 px-3 border-0 btn-dark mr-2 text-light">
                                    Topic 2
                </button>
                                <button className="font-weight-bold py-2 px-3 border-0 btn-secondary mr-2 text-light">
                                    Topic 3
                </button>
                                <button className="font-weight-bold py-2 px-3 border-0 btn-secondary mr-2 text-light">
                                    Topic 4
                </button>
                                <button className="py-2 px-3 border-0 btn-secondary mr-2 text-light">
                                    <i className="fa fa-plus text-light"></i>
                                </button>
                            </div>
                            <div className="mb-3 d-flex align-items-baseline justify-content-end">
                                <button className="btn btn-success btn-sm">Save</button>
                                <label className="mx-2">Preview</label>
                                <i className="fa fa-2x fa-toggle-off align-self-center"></i>
                            </div>
                            <div className="mb-3 ml-1 border rounded py-2 px-3">
                                <form className="mb-3">
                                    <h4 className="pull-left">Heading widget</h4>
                                    <div className="d-flex justify-content-end align-items-center">
                                        <button className="btn btn-warning m-1">
                                            <i className="fa fa-arrow-down"></i>
                                        </button>
                                        <button className="btn btn-warning m-1">
                                            <i className="fa fa-arrow-up"></i>
                                        </button>
                                        <select aria-label="Widget type" className="form-control d-inline w-auto"
                                            id="widget-input m-1">
                                            <option>Heading</option>
                                            <option>Paragraph</option>
                                            <option>Link</option>
                                        </select>
                                        <button className="btn btn-danger m-1">
                                            <i className="fa fa-close"></i>
                                        </button>
                                    </div>
                                    <input className="form-control mb-2" id="widget-text" aria-label="Heading text"
                                        placeholder="Heading text" />
                                    <select className="form-control mb-2" id="heading-type" aria-label="Heading type">
                                        <option>Heading 1</option>
                                        <option>Heading 2</option>
                                        <option>Heading 3</option>
                                        <option>Heading 4</option>
                                        <option>Heading 5</option>
                                        <option>Heading 6</option>
                                    </select>
                                    <input className="form-control" id="widget-name" aria-label="Widget name"
                                        placeholder="Widget name" />
                                </form>
                                <h4>Preview</h4>
                                <div>
                                    <h1>Heading text</h1>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-danger pull-right">
                                    <i className="fa fa-plus-circle"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default CourseEditor