import React from 'react'
import types from './widget-types'

const ImageWidget = ({ widget, setEditingWidget, editing }) => {
    
    return (
        <div>
            <h2>Image Widget</h2>
            <img src={widget.src}
                style={{ 'width': widget.width, 'height': widget.height }}>
                </img>
            {
                editing &&
                <div>
                    Type
                    <select onChange={e => setEditingWidget({ ...widget, type: e.target.value })}
                        value={widget.type}
                        className="form-control">
                        {types.map(n => <option key={n} value={n.toUpperCase()}>{n}</option>)}
                    </select>
                        URL
                        <input value={widget.src || ""} 
                        onChange={e => setEditingWidget({ ...widget, src: e.target.value })}
                        className="form-control"/>
                        width
                        <input value={widget.width} 
                        onChange={e => setEditingWidget({ ...widget, width: e.target.value })}
                        className="form-control"/>
                        height
                        <input value={widget.height} 
                        onChange={e => setEditingWidget({ ...widget, height: e.target.value })}
                        className="form-control"/>
                    </div>
            }
        </div>
    )
}

export default ImageWidget