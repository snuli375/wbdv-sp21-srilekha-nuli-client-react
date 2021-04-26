import { Fragment } from "react"
import types from './widget-types'

const ParagraphWidget = ({ widget, setEditingWidget, editing }) => {
    return (
        <div>
            {
                editing &&
                <Fragment>
                <select onChange={e => setEditingWidget({ ...widget, type: e.target.value })}
                        value={widget.type}
                        className="form-control">
                        {types.map(n => <option key={n} value={n.toUpperCase()}>{n}</option>)}
                    </select>
                <textarea
                    onChange={(e) => setEditingWidget({...widget, text: e.target.value})}
                    value={widget.text}
                        className="form-control">
                    </textarea>
                </Fragment>
            }
            {
                !editing &&
                    <p>
                        {widget.text}
                    </p>
            }
        </div>
    )
}

export default ParagraphWidget