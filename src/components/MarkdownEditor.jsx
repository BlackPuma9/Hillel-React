import {useEffect, useRef} from "react";
import Editor from '@toast-ui/editor';


export default function MarkdownEditor({ onContentChange }) {
    const refEditor = useRef()

    useEffect(() => {
        const editor = new Editor({
            el: refEditor.current,
            previewStyle: 'tab',
            height: '500px',
            events: {
                change: () => {
                    const content = editor.getMarkdown()
                    onContentChange(content)
                }
            }
        })
    }, [onContentChange]);

    return <div ref={refEditor}></div>
}