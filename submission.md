# Submission Notes

These notes will be read by HubSpot developers. Drop us a line!

## Given more time, what would you have done differently?

- Lightly redesigned the CSS to use Hubspot's branding and reorganized the `styled-components`💅 structure to reuse more `theme` variables.

- Improved **animations**.

- Write a simple feature `test` for the filtering exercise.

- Included `lazy-loading`

## How did you deviate from the directions, if at all, and why?

- I didn't reuse the HTML structure of EJS files for the first exercise, simply because I misread the guidelines initially 🙃

- I used `Webpack` instead of `Gulp` because I'm more familiar with it and felt more comfortable setting up plugins like `ESlint` and using a `dev-server`.

- I didn't write `CSS` in separate files because I like the `styled-components` paradigm and the flexibility it provides, especially for it's reusability for Web and native applications.

- Used `Smart/Dumb` components in a `modular` structure for separation of concerns and maximum respect for the single responsibility principle.

- Used the React `Context` Api (like Netflix does for their filtering) to carry state between components.

- Used `Babel` and `ESlint`.

- Used a `service` to keep logic outside of components and make it reusable (maybe this could have been inside of an effect `hook` actually).

## Is there anything else you'd like to let us know?

The Component Structure is definitely overdone for the scope of this exercise, but I believe that scalability is a lot about keeping patterns consistent to make it easier for other developers to understand your code.

Lastly, I really hope I didn't mess this up by starting the exercise before a link was sent to me. I took a risk because I would love to join the HubSpot team and see this as a huge opportunity!

Anyways, thank you for taking the time to review my attempt and fingers-crossed! 🤞
