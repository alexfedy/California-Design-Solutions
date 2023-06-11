import sharp from "sharp";

async function resizeImage() {
  try {
    await sharp("opengraph.jpg")
      .resize({
        width: 1400,
        height: 800,
      })
      .toFormat("jpeg", { mozjpeg: true })
      .toFile("opengraph-compressed.jpeg");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();
