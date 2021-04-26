import types from './widget-types'


const HeadingWidget = ({ widget, setEditingWidget, editing }) => {
    console.log(types)

    const TagName = `h${widget.size}`
    return (
        <div>
            <h2>Heading Widget {widget.id}</h2>

            {widget.size && <TagName>{widget.text}</TagName>}

            {
                editing &&
                <div>
                    <select onChange={e => setEditingWidget({ ...widget, type: e.target.value })}
                        value={widget.type}
                        className="form-control">
                        {types.map(n => <option key={n} value={n.toUpperCase()}>{n}</option>)}
                    </select>
                    <input onChange={e => setEditingWidget({ ...widget, text: e.target.value })} value={widget.text} className="form-control" />
                    <select onChange={e => setEditingWidget({ ...widget, size: parseInt(e.target.value) })} value={widget.size} className="form-control">
                        {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>Heading {n}</option>)}
                    </select>
                </div>
            }
        </div>)
}

export default HeadingWidget