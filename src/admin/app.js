
const config = {

  translations: {
   
    en: {
      "app.components.LeftMenu.navbrand.title": "AQC",
      "Auth.form.welcome.subtitle": "Welcome to AQC Dashboard",
      "Auth.form.welcome.title": "Welcome!",
    },

    tutorials: false,
   
     notifications: { release: false },
  
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config, 
  bootstrap,
  
};
