import { CREATE_LESSON, DELETE_LESSON, FIND_LESSONS_FOR_MODULE, UPDATE_LESSON } from "../actions/lesson-actions";

const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case DELETE_LESSON:
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonToDelete._id)
            }
        case UPDATE_LESSON:
            return {
                ...state,
                lessons: state.lessons.map(lesson => lesson._id === action.updateLesson._id ? action.updateLesson : lesson)
            }
        case FIND_LESSONS_FOR_MODULE:
            return {
                ...state,
                lessons: action.lessons
            }
        default:
            return state
    }
}

export default lessonReducer