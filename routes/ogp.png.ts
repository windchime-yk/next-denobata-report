import { ImageMagick, initializeImageMagick, Gravity } from "imagemagick";
import { Handlers } from "$fresh/server.ts";

const modifyImage = (data: Uint8Array) =>
  new Promise<Uint8Array>((resolve) => {
    ImageMagick.read(data, (image) => {
      image.resize(90, 90);
      image.extent(145, 145, Gravity.Center);
      image.write((data) => resolve(data));
    });
  });

export const handler: Handlers = {
  GET: async () => {
    await initializeImageMagick();

    const data = await fetch(
      "https://twemoji.maxcdn.com/v/13.1.0/72x72/1f4dd.png"
    );
    const image = await modifyImage(new Uint8Array(await data.arrayBuffer()));

    return new Response(image, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
};
