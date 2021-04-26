
const API_URL = "https://wbdv-s21-01-server-java-snuli.herokuapp.com/api"
const topicUrl = topicId => `${API_URL}/topics/${topicId}/widgets`
const widgetUrl = widgetId => `${API_URL}/widgets/${widgetId}`

/**
 * creates a new widget instance for the topic whose ID is topicId
 * @param {*} topicId 
 * @param {*} widget 
 */
export const createWidget = (topicId, widget) => {
    return fetch(topicUrl(topicId), {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(widget)
    }).then(res => res.json())
}

/**
 * retrieves all widgets for topic whose ID is topicId
 * @param {*} topicId 
 */
export const findWidgetsForTopic = (topicId) => fetch(topicUrl(topicId), { method: 'GET' }).then(res => res.json())

/**
 * retrieves one widget whose ID is widgetId (optional)
 * @param {*} widgetId 
 */
export const findWidget = (widgetId) => fetch(widgetUrl(widgetId), { method: 'GET' }).then(res => res.json())

/**
 * updates one widget whose ID is widgetId
 * @param {*} widgetId 
 * @param {*} widget 
 */
export const updateWidget = (widgetId, widget) => {
    return fetch(widgetUrl(widgetId), {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(widget)
    }).then(res => res.json())
}

/**
 * removes widget whose ID is widgetId
 * @param {*} widgetId 
 */
export const deleteWidget = (widgetId) => fetch(widgetUrl(widgetId), { method: 'DELETE' }).then(res => res.json())

const api = { createWidget, findWidgetsForTopic, findWidget, updateWidget, deleteWidget }
export default api