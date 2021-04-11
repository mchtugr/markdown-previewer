import React from 'react'
import { connect } from 'react-redux';

import ToolBar from './ToolBar';
import { copyText, resizeEditor } from '../actions';


const EditorTab = ({ copyText, text, isPreviewMaximized, isMaximized }) => {

    const handleChange = e => {
        copyText(e.target.value);
    }
    return (
        <div 
            className={`col bg-light text-dark ${isPreviewMaximized && 'display-none'}`} 
            id='text-edit'
        >
            <ToolBar title='Editor' />
            <textarea 
                id="editor" 
                className='form-control' 
                onChange={handleChange}
                value={text}
            >
            </textarea>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        text : state.input,
        isPreviewMaximized : state.resize.isPreviewMaximized
    }
}

export default connect(mapStateToProps, { copyText, resizeEditor })(EditorTab);
