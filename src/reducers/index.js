import { combineReducers } from 'redux';
import { TEXT_COPY, RESIZE_EDITOR, RESIZE_PREVIEW } from '../actions/types';
const initialState = `# Hello guys!!!

## You can see my Markdown Project here.
### _React_ and _Redux_ were used in the project.

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Ginger Cat](https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
`;

const textCopyReducer = (state=initialState, action) => {
    switch(action.type) {
        case TEXT_COPY :
            return action.payload;
        default:
            return state;
    }
}

const resizeReducer = (state={isEditorMaximized:false, isPreviewMaximized:false}, action) => {
    switch(action.type) {
      case RESIZE_EDITOR :
        return {...state, isEditorMaximized: !state.isEditorMaximized };
      case RESIZE_PREVIEW :
        return {...state, isPreviewMaximized: !state.isPreviewMaximized};
      default : 
        return state;
    }
}
export default combineReducers({
  input : textCopyReducer,
  resize : resizeReducer
})