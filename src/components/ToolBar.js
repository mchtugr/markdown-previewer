import React from 'react';
import { FaEdit, FaEye, FaExpandArrowsAlt } from 'react-icons/fa';
import { FiMinimize2 } from 'react-icons/fi';
import { connect } from 'react-redux';

import { resizePreview, resizeEditor } from '../actions';


const ToolBar = ({ title, isEditorMaximized, isPreviewMaximized, resizePreview, resizeEditor }) => {
        const editorContent = (
            <>
            <FaEdit size='2rem' />
                <h3>{title}</h3>
                <span onClick={resizeEditor} className='toggle-button'>
                    {isEditorMaximized ? <FiMinimize2 size='1.5rem' /> : <FaExpandArrowsAlt size='1.5rem' /> }
                </span>
            </>
        );
        const previewContent = (
            <>
                <FaEye size='2rem'/>
                <h3>{title}</h3>
                <span onClick={resizePreview} className='toggle-button'>
                    {isPreviewMaximized ? <FiMinimize2 size='1.5rem' /> : <FaExpandArrowsAlt size='1.5rem' /> }
                </span>
            </>
        )
        return (
            <div className='toolbar'>
                <div className="d-flex justify-content-between">
                    {title === 'Editor' ? editorContent : previewContent }
                </div>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        isEditorMaximized : state.resize.isEditorMaximized,
        isPreviewMaximized : state.resize.isPreviewMaximized
    }
}

export default connect(mapStateToProps, { resizePreview, resizeEditor })(ToolBar)
