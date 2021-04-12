import EditableItem from '../editable-item.js'
import { connect } from "react-redux";
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import topicActions from "../../actions/topic-actions";

const TopicTabs = ({ topics = [],
    createTopic,
    updateTopic,
    deleteTopic,
    findTopicsForLesson }) => {
    const { courseId, layout, moduleId, lessonId, topicId } = useParams();

    useEffect(() => {
        findTopicsForLesson(lessonId)
    }, [lessonId, findTopicsForLesson])

    return (
        <ul className="nav nav-pills">
            {topics.map((t, i) => (<li key={i} aria-current={t._id === topicId ? 'page' : undefined} className={`nav-item pr-4`}>
                <EditableItem
                    className={`nav-link ${t._id === topicId ? 'active' : ''}`}
                    linkStyles={t._id === topicId ? 'text-light' : undefined}
                    to={`/courses/${layout}/editor/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${t._id}`}
                    deleteContent={deleteTopic}
                    updateContent={updateTopic}
                    content={t} />
            </li>))}
            <li className={`text-center`}>
                <i onClick={() => createTopic(lessonId)}
                    className="fa fa-plus fa-lg" aria-label="Add new topic"></i>
            </li>
        </ul>
    )
}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    createTopic: (lessonId) => topicActions.createTopic(dispatch, lessonId),
    updateTopic: (newItem) => topicActions.updateTopic(dispatch, newItem),
    deleteTopic: (topicToDelete) => topicActions.deleteTopic(dispatch, topicToDelete),
    findTopicsForLesson: (lessonId) => topicActions.findTopicsForLesson(dispatch, lessonId)
})

export default connect(stpm, dtpm)(TopicTabs)