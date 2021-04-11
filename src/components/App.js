import React from 'react';
import { connect } from 'react-redux'

import EditorTab from './EditorTab'
import PreviewTab from './PreviewTab'


const App = ({ isEditorMaximized, isPreviewMaximized }) => {

        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'>Markdown Previewer</h1>
                    </div>
                </div>
                <div className="row" >
                        <EditorTab />
                        <PreviewTab />
                </div>
            </div>
        )
}

const mapStateToProps = state => {
    return {
        isEditorMaximized : state.resize.isEditorMaximized,
        isPreviewMaximized : state.resize.isPreviewMaximized
    }
}

export default connect(mapStateToProps)(App)
