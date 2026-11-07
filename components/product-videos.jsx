function youtubeId(url) {
  return url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/)?.[1] || null;
}

export function ProductVideos({ videos }) {
  return <div className="product-videos">
    {videos.map((url, index) => {
      const id = youtubeId(url);
      return <article className="product-video" key={url}>
        {id ? <iframe src={`https://www.youtube-nocookie.com/embed/${id}`} title={`Vidéo produit ${index + 1}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <video src={url} controls preload="metadata" />}
        <a href={url} target="_blank" rel="noreferrer">Ouvrir la vidéo sur YouTube ↗</a>
      </article>;
    })}
  </div>;
}
