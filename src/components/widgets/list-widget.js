import types from './widget-types'


const ListWidget = ({ widget, setEditingWidget, editing }) => {
console.log(widget)
    return (
        <div>
            <h2>List Widget</h2>
            {
                !editing &&
                    <>
                        {
                            widget.isOrdered &&
                            <ol>
                                {
                                    widget.text.split("\n").map((item, index) => 
                                            <li key={index}>{item}</li>)
                                }
                            </ol>
                        }
                        {
                            !widget.isOrdered &&
                            <ul>
                                {
                                widget.text.split("\n").map((item, index) =>
                                    <li key={index}>{item}</li>)
                                    }
                            </ul>
                        }
                    </>
            }
            {
                editing &&
                <div>
                    <select onChange={e => setEditingWidget({ ...widget, type: e.target.value })}
                        value={widget.type}
                        className="form-control">
                        {types.map(n => <option key={n} value={n.toUpperCase()}>{n}</option>)}
                    </select>
                    <input
                        onChange={(e) => setEditingWidget({ ...widget, isOrdered: e.target.checked })}
                        checked={widget.isOrdered}
                        type="checkbox" /> Ordered
                    <br/>
                    List Items
                    <textarea
                        rows={10}
                        value={widget.text}
                        onChange={(e) => setEditingWidget({...widget, text: e.target.value})}
                        className="form-control">
                        
                    </textarea>
                </div>
            }
        </div>)
}

export default ListWidget