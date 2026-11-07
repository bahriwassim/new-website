'use client';

import { useMemo, useState } from 'react';
import { media } from '../lib/catalog';

export function PdfBookReader({ documents }) {
  const [selected, setSelected] = useState(0);
  const [page, setPage] = useState(1);
  const document = documents[selected];
  const source = useMemo(() => `${media(document.file)}#page=${page}&view=FitH&toolbar=0&navpanes=0`, [document.file, page]);

  function chooseDocument(event) {
    setSelected(Number(event.target.value));
    setPage(1);
  }

  return <section className="pdf-book" aria-label="Lecteur de documents PDF">
    <div className="pdf-book-toolbar">
      <label htmlFor="pdf-select">Document à lire</label>
      <select id="pdf-select" value={selected} onChange={chooseDocument}>
        {documents.map((item, index) => <option value={index} key={item.file}>{item.name}</option>)}
      </select>
      <div className="pdf-page-controls">
        <button type="button" onClick={() => setPage(value => Math.max(1, value - 1))} disabled={page <= 1} aria-label="Page précédente">‹</button>
        <span>Page {page}</span>
        <button type="button" onClick={() => setPage(value => value + 1)} aria-label="Page suivante">›</button>
      </div>
      <a href={media(document.file)} target="_blank" rel="noreferrer">Ouvrir le PDF ↗</a>
    </div>
    <iframe key={source} title={`Lecture : ${document.name}`} src={source} className="pdf-book-page" />
  </section>;
}
