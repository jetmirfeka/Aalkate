export function getSourceImage(name) {
  switch (name) {
    case "Bestellen":
      return require("../assets/images/Bestellen.jpeg");
    case "offnungszeiten":
      return require("../assets/images/offnungszeiten.jpeg");
    case "speisekarte Menu":
      return require("../assets/images/speisekarteMenu.png");
    case "EVENTS":
      return require("../assets/images/events.png");
    case "HOTELS":
      return require("../assets/images/hoteles.jpeg");
    case "SHOP":
      return require("../assets/images/shop.jpeg");
    case "SOCIAL MEDIA":
      return require("../assets/images/socialmedia.png");
    case "MEERBLICK":
      return require("../assets/images/MEERBLICK.png");
    case "HAFEN RESIDENZ":
      return require("../assets/images/HAFEN-RESIDENZ.png");
    case "BERUHRUNG":
      return require("../assets/images/BERUHRUNG.png");

    case "Facebook":
      return require("../assets/images/facebook.png");
    case "Instagram":
      return require("../assets/images/instagram.png");
    default:
      return require("../assets/images/food.jpg");
  }
}
