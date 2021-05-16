function newMovie() {  
    let movieNameInput = document.querySelector(".movieName").value;
    
    let movieImageInput = document.querySelector(".movieImage").value;
    
    let imgContainer = document.querySelector(".imageContainer");
    
    let newMovie = `<div class="movieInfo">
                        <img src="${movieImageInput}" alt="Capa do Filme">
                        <p>${movieNameInput}</p>
                        </div>`;
    
    if (movieNameInput === "" || movieImageInput === "") {
        alert("Por favor, preencha todos os campos.")
    } else {
        imgContainer.innerHTML = imgContainer.innerHTML + newMovie
    }
}