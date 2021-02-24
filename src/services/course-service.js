/**
 * provides an API to create, retrieve, update and delete course instances as shown below
 */

const URL = "https://wbdv-generic-server.herokuapp.com/api/001860326/courses"

/**
 * creates a new course instance and adds it to the collection of courses
 * @param course: the course to be added to the course collection
 */
export const createCourse = course => {
    return fetch(URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ ...course, modified: Date.now() })
    }).then(res => res.json())
}

/**
 * retrieves all course instances as an array of courses
 */
export const findAllCourses = () => fetch(URL, { method: 'GET' }).then(res => res.json())

/**
 * retrieves a course instance that matches the id parameter
 * @param id: the id to match to a course instance
 */
export const findCourseById = id => fetch(`${URL}/${id}`, { method: 'GET' }).then(res => res.json())

/**
 * updates the course instance whose id matches the id parameter.
 * updates the instance with values in course parameter
 * @param id: the id associated with the course instance to be updated
 * @param course: the values used to update the course instance
 */
export const updateCourse = (id, course) => {
    return fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ ...course, modified: Date.now() })
    }).then(res => res.json())
}

/**
 * deletes course instance whose id matches the id parameter
 * @param id: the id associated with the course instance to be deleted
 */
export const deleteCourse = id => fetch(`${URL}/${id}`, { method: 'DELETE' }).then(res => res.json())

const api = {
    createCourse,
    deleteCourse,
    updateCourse,
    findAllCourses,
    findCourseById
}

export default api