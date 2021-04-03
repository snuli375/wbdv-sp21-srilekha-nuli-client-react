import topicService from '../services/topic-service.js'

export const CREATE_TOPIC = "CREATE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"

export const createTopic = (dispatch, courseId) => {
    topicService.createTopic(courseId, { title: 'New Topic' })
        .then(topic => dispatch({ type: "CREATE_TOPIC", topic }))
}

export const updateTopic = (dispatch, newItem) => {
    topicService.updateTopic(newItem._id, newItem)
        .then(status => dispatch({ type: "UPDATE_TOPIC", updateTopic: newItem }))
}

export const deleteTopic = (dispatch, topicToDelete) => {
    topicService.deleteTopic(topicToDelete._id)
        .then(status => dispatch({ type: "DELETE_TOPIC", topicToDelete }))
}

export const findTopicsForLesson = (dispatch, courseId) => {
    topicService.findTopicsForCourse(courseId)
        .then(topics => dispatch({
            type: "FIND_TOPICS_FOR_LESSON",
            topics
        }))
}

const topicActions = {
    createTopic, findTopicsForLesson, updateTopic, deleteTopic
}

export default topicActions