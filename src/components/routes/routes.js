import AboutSection from "../About/AboutSection";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";

export const routes = [
    {
        path: '/',
        page: Home
    },
    {
        path: '/contact',
        page: Contact
    },
    {
        path: '/about',
        page:AboutSection
    }
]