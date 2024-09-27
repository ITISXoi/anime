const EmbedAnime = ({ urlEmbedOneFilm }: { urlEmbedOneFilm: string }) => {
  return (
    <div className="w-full h-full aspect-video">
      {urlEmbedOneFilm ? (
        <iframe
          className="aspect-video"
          width="100%"
          height="100%"
          src={urlEmbedOneFilm}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      ) : null}
    </div>
  );
};

export default EmbedAnime;
