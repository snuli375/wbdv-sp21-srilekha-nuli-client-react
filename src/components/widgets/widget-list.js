import { connect } from "react-redux";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import widgetActions from "../../actions/widget-actions";
import HeadingWidget from './heading-widget'
import ParagraphWidget from './paragraph-widget'

const WidgetList = ({ widgets = [],
    createWidget,
    updateWidget,
    deleteWidget,
    findWidgetsForTopic }) => {
    const { topicId } = useParams();

    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId, findWidgetsForTopic])

    const [editingWidget, setEditingWidget] = useState({})

    const completeEdits = (wid) => {
        updateWidget(editingWidget)
        setEditingWidget({})
    }

    return (
        <div>
            <h2>Widget List</h2>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus float-right pl-4 fa-2x"></i>
            <ul className="list-group">
                {
                    widgets.map(_widget => {

                        const isEditing = _widget.id === editingWidget.id;
                        const widgetToRender = isEditing ? editingWidget : _widget
                        return (<li key={_widget.id} className="list-group-item">
                            {_widget.id}
                            {
                                isEditing &&
                                <span>
                                    <i onClick={() => deleteWidget(_widget)} className="fas fa-trash float-right"></i>
                                    <i onClick={() => completeEdits(_widget.id)} className="fas fa-check float-right"></i>
                                </span>
                            }
                            {
                                !isEditing &&
                                <i onClick={() => setEditingWidget(_widget)} className="fas fa-cog float-right"></i>
                            }
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    setEditingWidget={setEditingWidget}
                                    editing={isEditing}
                                    widget={widgetToRender} />
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    setEditingWidget={setEditingWidget}
                                    editing={isEditing}
                                    widget={widgetToRender} />
                            }
                            {/* 
                                _widget.type === "LIST" &&
                                <ListWidget
                                    setEditingWidget={setEditingWidget}
                                    editing={isEditing}
                                    widget={widgetToRender} />
                            }
                            {
                                _widget.type === "IMAGE" &&
                                <ImageWidget
                                    setEditingWidget={setEditingWidget}
                                    editing={isEditing}
                                    widget={widgetToRender} />
                            } */}
                        </li>)
                    }
                    )

                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    createWidget: (topicId) => widgetActions.createWidget(dispatch, topicId),
    updateWidget: (newItem) => widgetActions.updateWidget(dispatch, newItem),
    deleteWidget: (widgetToDelete) => widgetActions.deleteWidget(dispatch, widgetToDelete),
    findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId)
})

export default connect(stpm, dtpm)(WidgetList)