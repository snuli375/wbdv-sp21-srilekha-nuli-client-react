import EditableItem from '../editable-item.js'
import { connect } from "react-redux";
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import lessonActions from "../../actions/lesson-actions";

const LessonTabs = ({ lessons = [],
    createLesson,
    updateLesson,
    deleteLesson,
    findLessonsForModule }) => {
    const { courseId, layout, moduleId, lessonId } = useParams();

    useEffect(() => {
        findLessonsForModule(moduleId)
    }, [moduleId, findLessonsForModule])

    return (
        <ul className="nav nav-tabs">
            {lessons.map((l, i) => (<li key={i} aria-current={l._id === lessonId ? 'page' : undefined} className={`nav-item pr-4`}>
                <EditableItem
                    className={`nav-link ${l._id === lessonId ? 'active' : ''}`}
                    to={`/courses/${layout}/editor/${courseId}/modules/${moduleId}/lessons/${l._id}`}
                    deleteContent={deleteLesson}
                    updateContent={updateLesson}
                    content={l} />
            </li>))}
            <li className={`text-center`}>
                <i onClick={() => createLesson(moduleId)}
                    className="fa fa-plus fa-lg" aria-label="Add new lesson"></i>
            </li>
        </ul>
    )
}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
    createLesson: (moduleId) => lessonActions.createLesson(dispatch, moduleId),
    updateLesson: (newItem) => lessonActions.updateLesson(dispatch, newItem),
    deleteLesson: (lessonToDelete) => lessonActions.deleteLesson(dispatch, lessonToDelete),
    findLessonsForModule: (moduleId) => lessonActions.findLessonsForModule(dispatch, moduleId)
})

export default connect(stpm, dtpm)(LessonTabs)