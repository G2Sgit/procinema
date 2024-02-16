const Iframe1 = () => {
    return (
  <>
          <iframe
            src="https://player.vimeo.com/video/912707190?h=a0e16f4890"
            class={css.responsiveiframe}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/912707190">
              Documentary short film&nbsp;&quot;Road to the dream&quot; (2021)
            </a>{" "}
            from <a href="https://vimeo.com/procinemastudio">Procinema Studio</a>{" "}
            on <a href="https://vimeo.com">Vimeo</a>.
          </p>

        </>

    );
  };
  
  export default Iframe1;
  