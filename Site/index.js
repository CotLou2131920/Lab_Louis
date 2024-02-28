function obtenirBlog() {
   
    fetch('http://localhost:3000/blog')
    .then(reponse => reponse.json())    
    .then(json => {
        json.forEach(element => {
           afficherBlog(element)
            console.log(element);
        });       
    })
    .catch(error => console.log(error))

}

function afficherBlog(json) {
    $(".blogs").append(`<div class="col-4 border border-secondary border-3 p-3 mt-5  blog" >
            <a href="blog.html?id=${json.id}"><img src="/Image/Logo.png" alt="" class=" card-img-top  p-3 d-flex "></a>
            <h2 class = "text-center bg-secondary bg-opacity-50 m-3 ">${json.titre}</h2>
            <p class="text-center p-3">${json.contenu}</p>
            </div>`)
}

function ajouterBlog() {
    fetch('http://localhost:3000/blog',
    {
        method: 'POST',
        body: JSON.stringify({
            titre: $("input").val(),
            auteur: $(".auteur").val(),
            contenu: $("textarea").val(),
            datePublication: getFormattedDate(),

        })
    })
}


// Obtenez la date actuelle au format JJ/MM/AAAA
function getFormattedDate() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Les mois sont indexés à partir de zéro
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }

obtenirBlog()
$(".ajoutBlog").click(ajouterBlog)