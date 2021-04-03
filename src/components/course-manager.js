import { useEffect, useState, useRef } from 'react';
import CourseTable from './course-table/course-table.js'
import CourseGrid from './course-grid/course-grid.js'
import courseService from '../services/course-service'
import { Route, useParams } from 'react-router-dom'

const CourseManager = () => {
    const [courses, setCourses] = useState([])
    const courseInput = useRef(null);
    const { layout } = useParams();

    useEffect(() => {
        courseService.findAllCourses()
            .then(courses => {
                setCourses(courses)
            })
    }, [])

    const deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
            .then(status => {
                setCourses(courses.filter(c => c._id !== course._id))
            })
    }

    const updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                setCourses(courses.map(c => c._id === course._id ? course : c))
            })
    }

    const addCourse = () => {
        if (courseInput.current) {
            const title = courseInput.current.value
            const newCourse = { title, owner: 'me' }
            courseService.createCourse(newCourse)
                .then(response => {
                    setCourses([...courses, response])
                })
        }

    }

    const props = {
        deleteCourse,
        updateCourse,
        courses
    }

    return (
        <div className="container">
            <nav className="d-flex justify-content-between align-items-baseline p-2">
                <i className="fa fa-bars fa-lg mr-4"></i>
                <h1 className="navbar-brand d-none d-sm-inline-block">Course Manager</h1>
                <input className="form-control mx-4" ref={courseInput} type="text" aria-label="Course Name" />
                <button className="btn btn-link" onClick={addCourse}>
                    <i className="fa fa-plus-circle fa-lg text-danger" ></i>
                </button>
            </nav>
            <Route path=":layout/" />
            {layout === "grid" ? <CourseGrid {...props} /> : <CourseTable {...props} />}
        </div>
    )
}

export default CourseManager