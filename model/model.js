const productsPage = `<div class="products">
        <h1>PRODUCTS</h1>
        <div class ="sec3">
        <div class ="img3"></div>
        <p class ="face">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id
          quis provident soluta laborum consequatur dicta vel similique
          explicabo esse, sapiente accusantium voluptatem voluptates molestias
          necessitatibus nisi libero? Nisi, esse.
        </p>
        </div>
      </div>`;

const contactPage = `<div class="contact">
        <h1>CONTACT</h1>
        <div class ="sec4">
        <div class ="img4"></div>
        <p class ="long">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id
          quis provident soluta laborum consequatur dicta vel similique
          explicabo esse, sapiente accusantium voluptatem voluptates molestias
          necessitatibus nisi libero? Nisi, esse.
        </p>
        </div>
      </div>`;

const aboutPage = `<div class="about">
        <h1>ABOUT</h1>
        <div class ="sec2">
        <div class ="img2"></div>
        <p class ="lilGuy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id
          quis provident soluta laborum consequatur dicta vel similique
          explicabo esse, sapiente accusantium voluptatem voluptates molestias
          necessitatibus nisi libero? Nisi, esse.
        </p>
        </div>
      </div>`;

const homePage = `<div class="home">
        <h1>HOME</h1>
        <div class ="sec">
        <div class ="img1"></div>
        <p class ="moth">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id
          quis provident soluta laborum consequatur dicta vel similique
          explicabo esse, sapiente accusantium voluptatem voluptates molestias
          necessitatibus nisi libero? Nisi, esse.
        </p>
        </div>
      </div>`;

export const fname = "Ivy";
const lname = "Ditzenberger";

export function changePage(pageName) {
  let pageVarName = pageName + "Page";
  console.log(pageVarName);
  $("#app").html(eval(pageVarName));
}

export function getName() {
  return lname;
}

export function getAlNames() {
  let names = ["Ivy", "Octavia", "Athena", "Axel"];

  //THIS IS A FOREACH LOOP
  //names.forEach((name) => {
  //console.log(name);
  //});

  //THIS IS A STANDARD FOR LOOP
  //for (let i = 0; i < names.length; i++) {
  // crossOriginIsolated.log(names[i]);
  //}

  //THIS IS A JQUERY EXAMPLE OF LOOPING THROUGH
  $.each(names, (idx, name) => {
    console.log(`index ${idx} name: ${name}`);
    $("#app").append(`<p>index ${idx} name: ${name}</p>`);
  });
}
