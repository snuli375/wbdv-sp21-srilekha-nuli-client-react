import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({ course, updateCourse, deleteCourse }) => {
    const [isEditable, setEditable] = useState(false);
    const [title, setTitle] = useState(course.title)
    const courseInput = useRef();

    const saveCourse = () => {
        const newCourse = { ...course, title }
        updateCourse(newCourse)
        setEditable(false)
    }

    return (
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card w-100 w-sm-50">
                <img src="https://cdn.pixabay.com/photo/2015/05/31/15/07/business-792113_960_720.jpg" className="card-img-top" alt="placeholder" />
                <div className="card-body">
                    <div className={isEditable ? undefined : "d-flex justify-content-between"}>
                        {isEditable ?
                            <input className="form-control d-inline-block" ref={courseInput}
                                onChange={(e) => setTitle(e.target.value)}
                                aria-label="Course Name" placeholder="Course Name" value={title}></input>
                            : <h5 className="card-title d-inline-block">{title}</h5>
                        }
                        {isEditable ?
                            <div class="d-flex">
                                <button className="btn btn-link" onClick={saveCourse}>
                                    <i className="fa fa-check text-success"></i>
                                </button>
                                <button className="btn btn-link" onClick={() => deleteCourse(course)}>
                                    <i className="fa fa-times text-danger"></i>
                                </button>
                            </div>
                            : <button className="btn btn-link" onClick={() => setEditable(true)}>
                                <i className="fa fa-edit"></i>
                            </button>
                        }
                    </div>
                    <p className="card-text">Last modified: {course.modified}</p>
                    <Link to="editor" className="btn btn-primary">{title}</Link>
                </div>
            </div>
        </div >
    )
}

export default CourseCard;