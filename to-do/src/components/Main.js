<<<<<<< HEAD
import { ErrorPage } from "./404";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { StarWars } from "./StarWars";

 

export const Main = (props) => {
    const { page } = props;
    switch(page) {
        case 1: 
            return <Home />;
        case 2: 
            return <AboutMe />;
        case 3: 
            return <StarWars />;
        case 4: 
            return <Contact />;
        default: 
            return <ErrorPage />;
    }
};
=======
import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import { StarWars } from "./StarWars";
import { Contact } from "./Contact";
import { ErrorPage } from "./404";

export const Main = ({ page }) => {
  switch (page) {
    case 1:
      return <Home />;
    case 2:
      return <AboutMe />;
    case 3:
      return <StarWars />;
    case 4:
      return <Contact />;
    default:
      return <ErrorPage />;
  }
};
>>>>>>> d98c3b1224db35e2f06944612267ae9f6d14f71f
