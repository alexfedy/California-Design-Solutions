import sharp from "sharp";

async function resizeImage() {
  try {
    await sharp("paper.svg")
      .resize({
        width: 300,
        height: 300,
      })
      .toFile("paper-compressed.png");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();
