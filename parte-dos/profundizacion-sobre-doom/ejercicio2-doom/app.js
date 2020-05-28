const selectVisitar = document.querySelector("#visitar");
const imgArrayTravel = document.querySelectorAll("img");

const imgArrayMadrid = [
  "https://www.spain.info/export/sites/spaininfo/comun/carrusel-recursos/madrid/dp_madrid_dg_im_01.jpg_369272544.jpg",
  "https://alkilautos.com/blog/wp-content/uploads/2019/06/19.06.11-Portada-Blog-Espa%C3%B1a-770x338.jpg",
  "https://turismo.org/wp-content/uploads/2013/06/Calle-de-Alcala-Madrid-1024x685.jpg",
];
const imgArrayNewyork = [
  "https://blog.universaldeidiomas.com/wp-content/uploads/2018/04/Frases-y-expresiones-en-ingl%C3%A9s-para-desenvolverte-en-New-York-300x199@2x.jpg",
  "https://www.voyanyc.com/wp-content/uploads/2019/10/Edge-Night-Courtesy-of-Related-Oxford-Nueva-York.jpg",
  "https://d12dkjq56sjcos.cloudfront.net/pub/media/wysiwyg/newyork/06-route-detail/View-Of-New-York-Brooklyn-Bridge-Nighht-Big-Bus-Tours.jpg",
];
const imgArrayParis = [
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?$MO_masthead-property-mobile$",
  "https://img.freepik.com/foto-gratis/arc-triomphe-centro-ciudad-paris_137125-41.jpg?size=626&ext=jpg",
  "https://www.cronista.com/__export/1546898152336/sites/diarioelcronista/img/2019/01/07/29663285_10155652163954926_4767946778556343398_o.jpg_1866758231.jpg",
];
selectVisitar.addEventListener("change", imgChange);

function imgChange() {
  let infoSelect = selectVisitar.value;
  console.log(infoSelect);
  if (infoSelect == "madrid") {
    imgArrayTravel[0].src = imgArrayMadrid[0];
    imgArrayTravel[1].src = imgArrayMadrid[1];
    imgArrayTravel[2].src = imgArrayMadrid[2];
  } else if (infoSelect == "paris") {
    imgArrayTravel[0].src = imgArrayParis[0];
    imgArrayTravel[1].src = imgArrayParis[1];
    imgArrayTravel[2].src = imgArrayParis[2];
  } else if (infoSelect == "eeuu") {
    imgArrayTravel[0].src = imgArrayNewyork[0];
    imgArrayTravel[1].src = imgArrayNewyork[1];
    imgArrayTravel[2].src = imgArrayNewyork[2];
  }
}
