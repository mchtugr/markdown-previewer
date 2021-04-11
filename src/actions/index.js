import { TEXT_COPY, RESIZE_EDITOR, RESIZE_PREVIEW } from './types';


export const copyText = (text) => {
    return {
        type : TEXT_COPY,
        payload : text
    }
}

export const resizeEditor = () => {
    return {
        type : RESIZE_EDITOR
    }
}

export const resizePreview = () => {
    return {
        type : RESIZE_PREVIEW
    }
}