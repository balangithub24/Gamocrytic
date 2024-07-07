import ReactGA from "react-ga4";
import {TRACKING_ID} from "../config/global";

ReactGA.initialize(TRACKING_ID);

export const trackPageview = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
