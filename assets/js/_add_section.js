let addSection = document.querySelector("[data-section-add]");

if(addSection != null) {
    addSection.addEventListener("click", function(e){
        e.preventDefault();

        if(confirm("Êtes-vous sûr de vouloir ajouter une section ?")){
            // On envoie la requête ajax
            fetch(this.getAttribute("href"), {
                method: "ADD",
                body: JSON.stringify({"_token": this.dataset.token})
            }).then(response => response.json())
            .then(data => {
                if(data.success){
                    document.location.reload(true);
                }else{
                    alert(data.error);
                }
            })
        }
    });
}