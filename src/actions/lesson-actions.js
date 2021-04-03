import lessonService from '../services/lesson-service.js'

export const CREATE_LESSON = "CREATE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"
export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE"

export const createLesson = (dispatch, courseId) => {
    lessonService.createLesson(courseId, { title: 'New Lesson' })
        .then(lesson => dispatch({ type: "CREATE_LESSON", lesson }))
}

export const updateLesson = (dispatch, newItem) => {
    lessonService.updateLesson(newItem._id, newItem)
        .then(status => dispatch({ type: "UPDATE_LESSON", updateLesson: newItem }))
}

export const deleteLesson = (dispatch, lessonToDelete) => {
    lessonService.deleteLesson(lessonToDelete._id)
        .then(status => dispatch({ type: "DELETE_LESSON", lessonToDelete }))
}

export const findLessonsForModule = (dispatch, courseId) => {
    lessonService.findLessonsForModule(courseId)
        .then(lessons => dispatch({
            type: "FIND_LESSONS_FOR_MODULE",
            lessons
        }))
}

const lessonActions = {
    createLesson, findLessonsForModule, updateLesson, deleteLesson
}

export default lessonActions