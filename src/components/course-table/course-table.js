import React from 'react'
import CourseRow from './course-row.js'
import { Link } from 'react-router-dom'

const CourseTable = ({ courses, deleteCourse, updateCourse }) => {
    return (<table className="table">
        <thead>
            <tr>
                <th>Title</th>
                <th className="d-none d-sm-table-cell">Owned by</th>
                <th className="d-none d-lg-table-cell">Last modified</th>
                <th >
                    <div className="d-flex justify-content-end">
                        <i className="fa fa-folder mr-2"></i>
                        <i className="fas fa-sort-alpha-up mr-2"></i>
                        <Link to="/courses/grid">
                            <i className="fa fa-th"></i>
                        </Link>
                    </div>

                </th>
            </tr>
        </thead>
        <tbody>
            {courses.map(c => (<CourseRow key={c._id} course={c} updateCourse={updateCourse} deleteCourse={deleteCourse} />))}
        </tbody>
    </table>)
}

export default CourseTable