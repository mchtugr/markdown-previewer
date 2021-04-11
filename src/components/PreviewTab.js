import React, { Component } from 'react'
import { connect } from 'react-redux'
import marked from 'marked';

import ToolBar from './ToolBar';


marked.setOptions({
  breaks: true
});
class PreviewTab extends Component {

    render() {
        return (
            <div id='preview-container' className={`col ${this.props.isEditorMaximized && 'display-none'}`} >
                <ToolBar title='Preview' />
                <div 
                id='preview'
                className='bg-light'
                dangerouslySetInnerHTML={{__html: marked(this.props.text)}}
                ></div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        text : state.input,
        isEditorMaximized : state.resize.isEditorMaximized    
    }
}

export default connect(mapStateToProps)(PreviewTab)
