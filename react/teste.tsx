import React, { useEffect } from 'react';

const Teste: StorefrontFunctionComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Array com os links das postagens do Instagram
  const postagens = [
    "https://www.instagram.com/p/DEzqK_lxh_n/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/DFN9scex9Cb/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/DFF_xQ7R9VE/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/p/DE2L3twR7Hy/?utm_source=ig_embed&amp;utm_campaign=loading"
  ];

  return (
    <div>
      {postagens.map((link, index) => (
        <blockquote
          key={index}
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={link}
          data-instgrm-version="14"
          style={{
            display: 'flex!important',
            flexDirection: 'row',
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '340px',
            minWidth: '126px',
            padding: 0,
            width: 'calc(100% - 2px)'
          }}
        ></blockquote>
      ))}
    </div>
  );
};

export default Teste;
