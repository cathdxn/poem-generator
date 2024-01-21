function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: null,
    });
  }
  
  function generatePoem(event) {
    event.preventDefault();
  
    let keyword = document.querySelector("#keyword-input");
    let apiKey = "dc3e0bo70e26c85534ace9fbat6e4d34";
    let context =
      "Please generate a poem in four lines in French. There should be no title. The poem should be in basic HTML, and all in one <p> tag. There should be no space above the poem. There should be a <br/> after each line.";
    let prompt = `User instructions: Write a poem French about ${keyword.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let poem = document.querySelector("#poem");
    poem.classList.remove("hidden");
    poem.innerHTML = `<div class="generating-poem">Generating a poem...</div>`;
    console.log("is this working?")
  
    axios.get(apiURL).then(displayPoem);
  }
  
  let poemForm = document.querySelector("#poem-keyword-form");
  poemForm.addEventListener("submit", generatePoem);