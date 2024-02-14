/* 
Replace the id numbers below with your Scratch id's (found in the url: e.g. https://scratch.mit.edu/projects/286055744/)

Thanks to Kenny H. for creating this portfolio!
*/

const ids = [
    962313222,
    962322270,
    962326287,
    962329527
];

/****************************************************************

DO NOT CHANGE ANY CODE BELOW THIS POINT!

****************************************************************/

// create the iframe, set src attribute 
function createIframe(id) {
  const iframe = document.createElement("iframe")
  iframe.setAttribute("src",`https://scratch.mit.edu/projects/${id}/embed/`)
  return iframe
}

// create button, make it functional, add the iframe & button to a container
function createPreview(id) {
  const div = document.createElement("div")
  div.appendChild(createIframe(id))
  const button = document.createElement("button")
  button.innerText = "See inside"
  button.addEventListener("click", () => {
    window.open(`https://scratch.mit.edu/projects/${id}/editor`, '_blank');
  })
  div.appendChild(button)
  return div
}

// when the site loads
window.addEventListener('load' ,()=>{
  for(id of ids){ // loop through the project ids
    document.querySelector("body").appendChild(createPreview(id)) // generate previews & add them to the body
  }
})
