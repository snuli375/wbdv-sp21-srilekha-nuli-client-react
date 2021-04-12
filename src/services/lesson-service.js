
const moduleUrl = moduleId => `https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/modules/${moduleId}/lessons`
const lessonUrl = lessonId => `https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/lessons/${lessonId}`

/**
 * creates a new lesson instance for the module whose ID is moduleId
 * @param {*} moduleId 
 * @param {*} lesson 
 * @returns 
 */
export const createLesson = (moduleId, lesson) => {
    return fetch(moduleUrl(moduleId), {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(lesson)
    }).then(res => res.json())
}

/**
 * retrieves all lessons for course whose ID is moduleId
 * @param {*} moduleId 
 * @returns 
 */
export const findLessonsForModule = (moduleId) => fetch(moduleUrl(moduleId), { method: 'GET' }).then(res => res.json())

/**
 * retrieves one lesson whose ID is lessonId(optional)
 * @param {*} lessonId 
 * @returns 
 */
export const findLesson = (lessonId) => fetch(lessonUrl(lessonId), { method: 'GET' }).then(res => res.json())

/**
 * updates one lesson whose ID is lessonId
 * @param {*} lessonId 
 * @param {*} lesson 
 * @returns 
 */
export const updateLesson = (lessonId, lesson) => {
    return fetch(lessonUrl(lessonId), {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(lesson)
    }).then(res => res.json())
}

/**
 * removes lesson whose ID is lessonId
 * @param {*} lessonId 
 * @returns 
 */
export const deleteLesson = (lessonId) => fetch(lessonUrl(lessonId), { method: 'DELETE' }).then(res => res.json())

const api = { createLesson, findLessonsForModule, findLesson, updateLesson, deleteLesson }
export default api