import sharp from "sharp";

async function resizeImage() {
  try {
    await sharp("homeadvisor.png")
      .resize({
        width: 300,
        height: 300,
      })
      .toFile("homeadvisor-compressed.png");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();
