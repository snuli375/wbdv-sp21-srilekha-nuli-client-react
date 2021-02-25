import React from 'react'
import CourseCard from './course-card.js'
import { Link } from 'react-router-dom'

const CourseGrid = ({ courses, updateCourse, deleteCourse }) => {
    return (
        <div>
            <div class="row mb-4 align-items-baseline">
                <div class="d-none d-sm-inline-block col-4">
                    <p>Recent Documents</p>
                </div>
                <div class="d-none d-sm-inline-block col-4">
                    <label for="wd-owner-dropdown" class="mr-2">Owned by</label>
                    <select id="wd-owner-dropdown" className="form-control w-auto d-inline-block">
                        <option>me</option>
                    </select>
                </div>
                <div class="col-12 col-sm-4 d-flex justify-content-end">
                    <i className="fa fa-folder mr-2"></i>
                    <i className="fas fa-sort-alpha-up mr-2"></i>
                    <Link to="/table">
                        <i className="fa fa-list"></i>
                    </Link>
                </div>

            </div>
            <div class="row">
                {courses.map(c => (<CourseCard course={c} key={c._id} updateCourse={updateCourse} deleteCourse={deleteCourse} />))}
            </div>
        </div>)
}

export default CourseGrid