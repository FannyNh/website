const settings = {
  "name": "website",
  "state": {
    "frontity": {
      "url": "https://www.thethirdmoira.fr",
      "title": "Creative developer",
      "description": "portfolio bitch"
    }
  },
  "packages": [
    {
      "name": "third-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.thethirdmoira.fr"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
