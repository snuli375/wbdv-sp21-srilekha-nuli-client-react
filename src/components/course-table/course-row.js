import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const CourseRow = ({ course, updateCourse, deleteCourse }) => {
    const [isEditable, setEditable] = useState(false);
    const [title, setTitle] = useState(course.title);
    const courseInput = useRef();

    const saveCourse = () => {
        const newCourse = { ...course, title }
        updateCourse(newCourse)
        setEditable(false)
    }

    return (<tr>
        <td className="d-flex align-items-baseline">
            <i className="fa fa-file mr-2 text-primary"></i>
            {isEditable ?
                <input className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    ref={courseInput} aria-label="Course Name" value={title}></input>
                : <Link to={`/editor/${course._id}`}>{title}</Link>}
        </td>
        <td className="d-none d-sm-table-cell">{course.owner}</td>
        <td className="d-none d-lg-table-cell">{course.modified}</td>
        <td>
            {isEditable ?
                <div className="d-flex justify-content-end">
                    <button className="btn btn-link" onClick={saveCourse}>
                        <i className="fa fa-check text-success"></i>
                    </button>
                    <button className="btn btn-link" onClick={() => deleteCourse(course)}>
                        <i className="fa fa-times text-danger"></i>
                    </button>
                </div>
                : <div className="d-flex justify-content-end">
                    <button className="btn btn-link" onClick={() => setEditable(true)}>
                        <i className="fa fa-edit"></i>
                    </button>
                </div>
            }
        </td>
    </tr>)
}

export default CourseRow