import { useEffect, useState, forwardRef } from "react";
import { cn } from "../../Libs/utils";

const FadeImg = forwardRef((props, ref) => {
  const { src, alt, className, ...rest } = props;
  const { isLoaded } = useImageIsLoaded(src);

  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      ref={ref}
      loading="lazy"
      decoding="async"
      className={cn(
        "transition-opacity duration-500",
        {
          "opacity-0": !isLoaded,
          "opacity-100": isLoaded,
        },
        className
      )}
    />
  );
});

FadeImg.displayName = "FadeImg";

function useImageIsLoaded(src) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return setIsLoaded(false);

    let isMounted = true;
    const image = new window.Image();

    const createStatusHandler = (status) => () => {
      if (isMounted) setIsLoaded(status);
    };

    setIsLoaded(false);
    image.onload = createStatusHandler(true);
    image.onerror = createStatusHandler(false);
    image.src = src;

    return () => {
      isMounted = false;
    };
  }, [src]);

  return { isLoaded };
}

export default FadeImg;
