import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const EditableItem = ({ to, content, updateContent, deleteContent, className = '', linkStyles = '' }) => {
    const [editable, setEditable] = useState(false)
    const [contentCache, setContentCache] = useState(content)

    const update = () => {
        updateContent(contentCache)
        setEditable(false)
    }

    return (
        <div className={`d-flex justify-content-between ${className}`}>
            {editable ?
                <Fragment>
                    <input value={contentCache.title} onChange={(e) => { setContentCache({ ...contentCache, title: e.target.value }) }} />
                    <div>
                        <i className="fa fa-check pr-2 text-primary" onClick={update}></i>
                        <i className="fa fa-times text-danger" onClick={() => deleteContent(contentCache)}></i>
                    </div>
                </Fragment> :
                <Fragment><Link className={linkStyles} to={to}>{content.title}</Link><i className="fa fa-edit" onClick={() => { setEditable(true) }}></i></Fragment>}        </div >
    )
}

export default EditableItem