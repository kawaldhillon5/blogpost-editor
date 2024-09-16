import React, { useState } from "react";

import { Editor } from "@tinymce/tinymce-react";
import ReactHtmlParser from "react-html-parser";

const Wysiwyg = () => {
  const [wysiwyg, setWysiwyg] = useState(null);

  const handleEditorChange = content => {
    setWysiwyg(content);
  };

  return (
    <div className="wysiwyg">
      <Editor
        apiKey="t2hjlizfwre228cruv3b99ekjahquf6qqc7o788ludexidvk"
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
        value={wysiwyg}
        onEditorChange={handleEditorChange}
      />

      <div className="preview">
        <h3>Preview</h3>
        {wysiwyg && ReactHtmlParser(wysiwyg)}
      </div>
    </div>
  );
};

export default Wysiwyg;