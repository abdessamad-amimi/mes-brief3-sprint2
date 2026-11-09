const config = {
  ateliers: [
    { id: 1, titre: "Créer une affiche avec Figma", places: 8 },
    { id: 2, titre: "Découvrir les raccourcis VS Code", places: 0 },
    { id: 3, titre: "Construire un quiz en JavaScript", places: 5 },
    { id: 4, titre: "Créer une page responsive avec Tailwind CSS", places: 12 },
    { id: 6, titre: "Animer une interface avec CSS", places: 0 },
  ],
  modes: {
    presentiel: "En présentiel",
    distance: "À distance",
  },
  campus: ["Youssoufia", "Asfi", "Nador"],
};

const selectedConfig = {
  atelierId: null,
  mode: "",
  campus: "",
  email: "",
};

const listAteliers = document.querySelector("#liste-ateliers");
const listModes = document.querySelector("#liste-modes");
const listeCampus = document.querySelector("#liste-campus");

function AfficherAtelier() {
  config.ateliers.forEach((atelier) => {
    if (atelier.places > 0) {
      const label = document.createElement("label");
      label.classList.add("carte-choix");

      label.addEventListener("click" , () => {
        selectedConfig.atelierId = atelier.id;
      })

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "atelier";
      input.value = "";
      input.required = true;
      input.setAttribute("aria-describedby", "erreur-atelier");

      const spanParent = document.createElement("span");

      const strong = document.createElement("strong");
      strong.classList.add("atelier-titre");
      strong.textContent = atelier.titre;

      const spanChild = document.createElement("span");
      spanChild.classList = "atelier-places detail";
      spanChild.textContent = `${atelier.places} places disponibles.`

      spanParent.append(strong, spanChild);

      label.append(input, spanParent);

      listAteliers.append(label)

    }
  })
}

AfficherAtelier();

const champCampus = document.querySelector("#champ-campus");
const champEmail = document.querySelector("#champ-email");

function AfficherCampus(){
  config.campus.forEach((campus) => {
  const label = document.createElement("label");
  label.classList.add("carte-choix");

  label.addEventListener("click" , () => {
    selectedConfig.campus = campus;
  })

  const input = document.createElement("input");
  input.type = "radio";
  input.name = "campus";
  input.value = "";
  input.required = true;
  input.setAttribute("aria-describedby", "erreur-campus");

  const span = document.createElement("span");
  span.classList.add("campus-libelle");
  span.textContent = campus;

  label.append(input, span);

  listeCampus.append(label);
})
}

function CreateModePresentiel() {
  const label = document.createElement("label");
  label.classList.add("carte-choix");
  label.classList.add("presentiel");
  label.addEventListener("click", () => {
    selectedConfig.mode = "présentiel";
    listeCampus.replaceChildren();
    AfficherCampus();
    champCampus.hidden = false;
    champCampus.disabled = false;
    champEmail.hidden = true;
    champEmail.disabled = true;
  })

  const input = document.createElement("input");
  input.type = "radio";
  input.name = "mode";
  input.value = "";
  input.required = true;
  input.setAttribute("aria-describedby", "erreur-mode");

  const span = document.createElement("span");
  span.classList.add("mode-libelle");
  span.textContent = config.modes.presentiel;

  label.append(input, span)

  listModes.append(label);
}

CreateModePresentiel();

const email = document.querySelector("#email");

function CreateModeDistance() {
  const label = document.createElement("label");
  label.classList.add("carte-choix");
  label.classList.add("distance");
  label.addEventListener("click", () => {
    selectedConfig.mode = "distance";
    listeCampus.replaceChildren();
    champCampus.hidden = true;
    champCampus.disabled = true;
    champEmail.hidden = false;
    email.disabled = false;
    email.addEventListener("input" , () => {
      selectedConfig.email = email.value;
    })
    
  })

  const input = document.createElement("input");
  input.type = "radio";
  input.name = "mode";
  input.value = "";
  input.required = true;
  input.setAttribute("aria-describedby", "erreur-mode");

  const span = document.createElement("span");
  span.classList.add("mode-libelle");
  span.textContent = config.modes.distance;

  label.append(input, span)

  listModes.append(label);
}

CreateModeDistance();

const labelsModes = document.getElementsByName("mode");

const erreurAtelier = document.querySelector("#erreur-atelier");
const erreurMode = document.querySelector("#erreur-mode");
const erreurCampus = document.querySelector("#erreur-campus");
const erreurEmail = document.querySelector("#erreur-email");

const button = document.querySelector("button");
button.addEventListener("click" , (e) => {
  console.log(selectedConfig)
  let valid = true;
  e.preventDefault();
  if(selectedConfig.atelierId === null){
    erreurAtelier.textContent = "Veuillez selectionner un atelier.";
    valid = false;
  }
  else erreurAtelier.textContent = "";
  if(selectedConfig.mode === ""){
    erreurMode.textContent = "Veuillez selectionner un mode.",
    valid = false;
  }
  else{
    erreurMode.textContent = "";
    if(selectedConfig.mode === "présentiel"){
      if(selectedConfig.campus === ""){
        erreurCampus.textContent = "Veuillez selectionner un campus.";
        valid = false;
      }
      else erreurCampus.textContent = "";
    }
    else{
      if(selectedConfig.email === ""){
        erreurEmail.textContent = "Veuillez saisir votre email";
        valid = false;
      }
      else erreurEmail.textContent = "";
    }
  }

  if(valid){
    document.querySelector("#recapitulatif").hidden = false;
  }
})

