function obtenirCommentaire() {
   
    fetch(`http://localhost:3000/commentaire?id=${ObtenirIdBlog()}`)
    .then(reponse => reponse.json())    
    .then(json => {
        json.forEach(element => {
            $(".commentaires").append(`<div class="container d-flex   align-self-center ">
        <img src="/Image/Profil.png" alt="" class="img-fluid col-1 com" >
        <p class=" col-11 align-self-center m-3">${element.contenu}</p>
        </div>`)
        })
        
    })
    .catch(error => console.log(error))

}

function obtenirBlog() {
   
    fetch(`http://localhost:3000/blog?id=${ObtenirIdBlog()}`)	
    .then(reponse => reponse.json())    
    .then(json => {
        $(".InfoBlog").append(`<h1 class="text-center">${json[0].titre}</h1> 
        <p>${json[0].auteur}</p>
        <p>${json[0].datePublication}</p>`)
        $(".ContenuBlog").append(`<h3 class="text-center">Caption</h3> <p>${json[0].contenu}</p>`)
    })
    .catch(error => console.log(error))

}

function ObtenirIdBlog() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    return id
}

function AjouterCommentaire() {
    fetch(`http://localhost:3000/commentaire?id=${ObtenirIdBlog()}`,
    {
        method: 'POST',
        body: JSON.stringify({
            id: ObtenirIdBlog(),
            contenu: $("textarea").val(),
            datePublication: getFormattedDate(),
            publication : 'publication ' + ObtenirIdBlog()

        })
    }
    )
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
obtenirCommentaire()
$(".ajoutCom").click(AjouterCommentaire)

