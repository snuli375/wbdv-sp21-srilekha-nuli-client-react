
const lessonUrl = lessonId => `https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/lessons/${lessonId}/topics`
const topicUrl = topicId => `https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/topics/${topicId}`

/**
 * creates a new topic instance for the lesson whose ID is lessonId
 * @param {*} lessonId 
 * @param {*} topic 
 * @returns 
 */
export const createTopic = (lessonId, topic) => {
    return fetch(lessonUrl(lessonId), {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    }).then(res => res.json())
}

/**
 * retrieves all topics for course whose ID is lessonId
 * @param {*} lessonId 
 * @returns 
 */
export const findTopicsForLesson = (lessonId) => fetch(lessonUrl(lessonId), { method: 'GET' }).then(res => res.json())

/**
 * retrieves one topic whose ID is topicId(optional)
 * @param {*} topicId 
 * @returns 
 */
export const findTopic = (topicId) => fetch(topicUrl(topicId), { method: 'GET' }).then(res => res.json())

/**
 * updates one topic whose ID is topicId
 * @param {*} topicId 
 * @param {*} topic 
 * @returns 
 */
export const updateTopic = (topicId, topic) => {
    return fetch(topicId(topicUrl), {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    }).then(res => res.json())
}

/**
 * removes topic whose ID is topicId
 * @param {*} topicId 
 * @returns 
 */
export const deleteTopic = (topicId) => (lessonId) => fetch(topicUrl(topicId), { method: 'DELETE' }).then(res => res.json())

const api = { createTopic, findTopicsForLesson, findTopic, updateTopic, deleteTopic }
export default api