const API_URL = "https://image.pollinations.ai/prompt/";

class ImageApi {
  async getImage(setup, punchline) {
    const res = await fetch(
      API_URL + `Joke setup: ${setup} Joke punchline: ${punchline}`
    );
    return res.url;
  }

  clearImage() {
    const imageDiv = document.querySelector("#image");
    imageDiv.innerHTML = "";
  }

  async renderImage(setup, punchline) {
    const imageDiv = document.querySelector("#image");
    imageDiv.innerHTML = `
    <img
    src="${await this.getImage(setup, punchline)}"
    alt="Joke setup: ${setup} Joke punchline: ${punchline}"
    width="250" 
    height="250" 
    />`;
  }
}

export default new ImageApi();
