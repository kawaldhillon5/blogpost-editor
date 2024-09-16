import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios";
const baseURL = "http://localhost:3000/";


export default function TinyMCE() {
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
        axios.post(`${baseURL}editor/editorData`,{body: editorRef.current.getContent()});
      }
    };
    return (
      <>
        <Editor
          apiKey='t2hjlizfwre228cruv3b99ekjahquf6qqc7o788ludexidvk'
          onInit={(_evt, editor) => editorRef.current = editor}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: {
              file: { title: 'File', items: 'newdocument restoredraft | preview | importword exportpdf exportword | print | deleteallconversations' },
              edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
              view: { title: 'View', items: 'code revisionhistory | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
              insert: { title: 'Insert', items: 'image link media addcomment pageembed codesample inserttable | math | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
              format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
              tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
              table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
              help: { title: 'Help', items: 'help' }
            },
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        <button onClick={log}>Log editor content</button>
      </>
    );
  }