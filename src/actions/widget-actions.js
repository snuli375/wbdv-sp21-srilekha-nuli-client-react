import widgetService from '../services/widget-service.js'

export const CREATE_WIDGET = "CREATE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"

export const createWidget = (dispatch, topicId) => {
    widgetService.createWidget(topicId, {
        text: "New Widget",
        type: "HEADING",
        size: 1,
    })
        .then(widget => dispatch({ type: "CREATE_WIDGET", widget }))
}

export const updateWidget = (dispatch, newItem) => {
    console.log(newItem)
    widgetService.updateWidget(newItem.id, newItem)
        .then(status => dispatch({ type: "UPDATE_WIDGET", updateWidget: newItem }))
}

export const deleteWidget = (dispatch, widgetToDelete) => {
    widgetService.deleteWidget(widgetToDelete.id)
        .then(status => dispatch({ type: "DELETE_WIDGET", widgetToDelete }))
}

export const findWidgetsForTopic = (dispatch, topicId) => {
    widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type: "FIND_WIDGETS_FOR_TOPIC",
            widgets
        }))
}

const widgetActions = {
    createWidget, findWidgetsForTopic, updateWidget, deleteWidget
}

export default widgetActions