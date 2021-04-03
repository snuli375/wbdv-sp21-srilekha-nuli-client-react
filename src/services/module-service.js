
const courseUrl = courseId => `https://wbdv-generic-server.herokuapp.com/api/001860326/courses/${courseId}/modules`
const moduleUrl = moduleId => `https://wbdv-generic-server.herokuapp.com/api/001860326/modules/${moduleId}`

/**
 * creates a new module instance for the course whose ID is courseId
 * @param {*} courseId 
 * @param {*} module 
 */
export const createModule = (courseId, module) => {
    return fetch(courseUrl(courseId), {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(module)
    }).then(res => res.json())
}

/**
 * retrieves all modules for course whose ID is courseId
 * @param {*} courseId 
 */
export const findModulesForCourse = (courseId) => fetch(courseUrl(courseId), { method: 'GET' }).then(res => res.json())

/**
 * retrieves one module whose ID is moduleId (optional)
 * @param {*} moduleId 
 */
export const findModule = (moduleId) => fetch(moduleUrl(moduleId), { method: 'GET' }).then(res => res.json())

/**
 * updates one module whose ID is moduleId
 * @param {*} moduleId 
 * @param {*} module 
 */
export const updateModule = (moduleId, module) => {
    return fetch(moduleUrl(moduleId), {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(module)
    }).then(res => res.json())
}

/**
 * removes module whose ID is moduleId
 * @param {*} moduleId 
 */
export const deleteModule = (moduleId) => fetch(moduleUrl(moduleId), { method: 'DELETE' }).then(res => res.json())

const api = { createModule, findModulesForCourse, findModule, updateModule, deleteModule }
export default api