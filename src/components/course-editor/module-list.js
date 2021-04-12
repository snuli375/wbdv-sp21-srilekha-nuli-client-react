import EditableItem from '../editable-item.js'
import { connect } from "react-redux";
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import moduleActions from "../../actions/module-actions";

const MODULE_CLASSES = "p-2 border border-dark bg-light"

const ModuleList = ({ modules = [],
    createModule,
    updateModule,
    deleteModule,
    findModulesForCourse }) => {
    const { courseId, layout } = useParams();

    useEffect(() => {
        findModulesForCourse(courseId)
    }, [courseId, findModulesForCourse])

    return (
        <ul className="pl-0">
            {modules.map((m, i) => (<li key={i} className={MODULE_CLASSES}>
                <EditableItem
                    to={`/courses/${layout}/editor/${courseId}/modules/${m._id}`}
                    deleteContent={deleteModule}
                    updateContent={updateModule}
                    content={m} />
            </li>))}
            <li className={`text-center ${MODULE_CLASSES}`}>
                <div>
                    <i onClick={() => createModule(courseId)}
                        className="fa fa-plus fa-lg" aria-label="Add new module"></i>
                </div>

            </li>
        </ul>
    )
}

const stpm = (state) => ({
    modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({
    createModule: (courseId) => moduleActions.createModule(dispatch, courseId),
    updateModule: (newItem) => moduleActions.updateModule(dispatch, newItem),
    deleteModule: (moduleToDelete) => moduleActions.deleteModule(dispatch, moduleToDelete),
    findModulesForCourse: (courseId) => moduleActions.findModulesForCourse(dispatch, courseId)
})

export default connect(stpm, dtpm)(ModuleList)