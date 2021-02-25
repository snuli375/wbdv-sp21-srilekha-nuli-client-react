import { useHistory } from 'react-router-dom'

const CourseEditor = () => {
    const history = useHistory()

    return (
        <div>
            <nav class="navbar navbar-dark bg-dark navbar-expand-sm justify-content-between px-0">
                <div class="navbar-brand col-3 font-weight-bold text-center">
                    <i onClick={history.goBack} class="fa fa-chevron-left mr-4"></i>
                    <div class="d-inline-block">
                        Course Name
        </div>
                </div>
                <ul class="navbar-nav col-9 justify-content-between">
                    <li class="nav-item">
                        <button class="btn btn-dark nav-link px-4 ml-2" href="#">
                            Build
            </button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-dark nav-link px-4 ml-2 active" href="#">
                            Pages
            </button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-dark nav-link px-4 ml-2" href="#">
                            Theme
            </button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-dark nav-link px-4 ml-2" href="#">
                            Store
            </button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-dark nav-link px-4 ml-2" href="#">
                            Apps
            </button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-dark nav-link px-4 ml-2" href="#">
                            Settings
            </button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-dark nav-link px-4 ml-2" href="#">
                            <i class="fa fa-plus"></i>
                        </button></li>
                </ul>
            </nav>
            <div class="container-fluid">
                <div class="row">
                    <div class="min-vh-100 col-3 bg-dark">
                        <button class="btn rounded btn-block text-left btn-secondary text-light p-2 mb-2">
                            <span>Module 1 - jQuery</span>
                            <i class="fa fa-close pull-right align-bottom"></i>
                        </button>
                        <button class="btn rounded btn-block text-left btn-primary text-light p-2 mb-2">
                            <span>Module 2 - React</span>
                            <i class="fa fa-close pull-right align-bottom"></i>
                        </button>
                        <button class="btn rounded btn-block text-left btn-secondary text-light p-2 mb-2">
                            <span>Module 3 - Redux</span>
                            <i class="fa fa-close pull-right align-bottom"></i>
                        </button>
                        <button class="btn rounded btn-block text-left btn-secondary text-light p-2 mb-2">
                            <span>Module 4 - Native</span>
                            <i class="fa fa-close pull-right align-bottom"></i>
                        </button>
                        <button class="btn rounded btn-block text-left btn-secondary text-light p-2 mb-2">
                            <span>Module 5 - Angular</span>
                            <i class="fa fa-close pull-right align-bottom"></i>
                        </button>
                        <button class="btn rounded btn-block text-left btn-secondary text-light p-2 mb-2">
                            <span>Module 6 - Node</span>
                            <i class="fa fa-close pull-right align-bottom"></i>
                        </button>
                        <button class="btn rounded btn-block text-left btn-secondary text-light p-2 mb-2">
                            <span>Module 7 - Mongo</span>
                            <i class="fa fa-close pull-right align-bottom"></i>
                        </button>
                        <div>
                            <button class=" btn btn-dark pull-right">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-9 pr-4">
                        <div class="mb-3 d-flex mt-2">
                            <button class="font-weight-bold py-2 px-3 border-0 btn-secondary mr-2 text-light">
                                Topic 1
                </button>
                            <button class="font-weight-bold py-2 px-3 border-0 btn-dark mr-2 text-light">
                                Topic 2
                </button>
                            <button class="font-weight-bold py-2 px-3 border-0 btn-secondary mr-2 text-light">
                                Topic 3
                </button>
                            <button class="font-weight-bold py-2 px-3 border-0 btn-secondary mr-2 text-light">
                                Topic 4
                </button>
                            <button class="py-2 px-3 border-0 btn-secondary mr-2 text-light">
                                <i class="fa fa-plus text-light"></i>
                            </button>
                        </div>
                        <div class="mb-3 d-flex align-items-baseline justify-content-end">
                            <button class="btn btn-success btn-sm">Save</button>
                            <label class="mx-2">Preview</label>
                            <i class="fa fa-2x fa-toggle-off align-self-center"></i>
                        </div>
                        <div class="mb-3 ml-1 border rounded py-2 px-3">
                            <form class="mb-3">
                                <h4 class="pull-left">Heading widget</h4>
                                <div class="d-flex justify-content-end align-items-center">
                                    <button class="btn btn-warning m-1">
                                        <i class="fa fa-arrow-down"></i>
                                    </button>
                                    <button class="btn btn-warning m-1">
                                        <i class="fa fa-arrow-up"></i>
                                    </button>
                                    <select aria-label="Widget type" class="form-control d-inline w-auto"
                                        id="widget-input m-1">
                                        <option>Heading</option>
                                        <option>Paragraph</option>
                                        <option>Link</option>
                                    </select>
                                    <button class="btn btn-danger m-1">
                                        <i class="fa fa-close"></i>
                                    </button>
                                </div>
                                <input class="form-control mb-2" id="widget-text" aria-label="Heading text"
                                    placeholder="Heading text" />
                                <select class="form-control mb-2" id="heading-type" aria-label="Heading type">
                                    <option>Heading 1</option>
                                    <option>Heading 2</option>
                                    <option>Heading 3</option>
                                    <option>Heading 4</option>
                                    <option>Heading 5</option>
                                    <option>Heading 6</option>
                                </select>
                                <input class="form-control" id="widget-name" aria-label="Widget name"
                                    placeholder="Widget name" />
                            </form>
                            <h4>Preview</h4>
                            <div>
                                <h1>Heading text</h1>
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-danger pull-right">
                                <i class="fa fa-plus-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseEditor