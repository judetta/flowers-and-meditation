# Flower and meditation - web site

As the final assignment for the Web Vizualisation course in Jamk University of Applied Sciences 
in autumn 2022 I implemented a web site for an imaginary 
service provider for booking services including a small web shop to sell physical items. 
As JavaScript was out of scope on this course, this is more like a proof-of-concept for a web site, 
concentrating only for the visual appearance, and leaving actual functionalities out.

Check it out 👉🏻 https://judetta.github.io/flowers-and-meditation/

The below is part of the final report related to the course work. This work was graded 5/5. 🎉


## Technology
_Technology choices with reasoning behind them_

The implemented site concentrates on visuals with HTML and CSS, and has only a few lines of custom JavaScript 
to detect Internet Explorer. Implementation relies on latest version 5.2.3 of [Bootstrap](https://getbootstrap.com/) 
which brings in some JS for certain UI component functionalities. Bootstrap v5 has dropped the support for IE, 
so this site also does not support it. I see no reason to support a deprecated browser which will be disabled 
in a few months.


### Libraries/frameworks

As mentioned, latest version (5.2.3) of Bootstrap is used for this site. Generally the layout relies heavily 
on Bootstrap's grid system which uses flexbox, thus being fully responsive out of the box. Site has been built 
from the ground up using Bootstrap's layout tools to have a strong basis for responsiveness. In addition to 
grid system and display tools the layout also utilizes a lot of Bootstrap's spacing utils in many elements, 
where additional custom styling would not be necessary.

In addition to layout tools and utilities also many of Bootstrap's components are used. These include navbar, 
form controls, form selects, buttons, badges and image carousel. As Bootstrap is generally great design, not much 
customization had to be done for these components.

Bootstrap's styles are loaded as NPM package and included to the compiled CSS. The original Bootstrap style files 
are left untouched, and all custom styling is created separately. Bootstrap v5 supports customizing the variables 
and that is utilized to a small extent to slightly change the color theme.


### Responsiveness

Site is implemented with a mobile-first attitude with the help of Firefox's Responsive Design Mode, which 
emulates the view on a mobile device. During the whole implementation all layout decisions where tried out 
on several different screen sizes to achieve a fully responsive outcome. This goal is very well achieved, 
at least according to my own testing. The only caveats appear on very narrow (<300px) screens, where even the 
Bootstrap grid system layout appears to start breaking.


### Use of CSS preprocessor

SASS with .scss syntax is used for the style sheets in this project. Style files are structured according to 
the 7-1 pattern. This pattern makes the styles architecture logical and it is easier to find the correct item 
to change when developing further. From SASS specific features in addition to partials also variables are used 
to gather into one place some values that are used in several places and also the nesting of selectors to make 
sure specific custom styles apply only to exactly those elements as intended. Styles are compiled to `styles.css` 
with a globally installed SASS preprocessor.


### Visuality

**Typography** - Bootstrap default theming uses Roboto font and that is what was sticked to in this project. 
It is a clean and modern font which is easy to read, still has friendliness to it, which goes well with the 
imaginary service provider this site was built for. One other font is used in addition to Roboto - Petit Formal 
Script which was chosen for the mission-kind sentence on the landing page, to separate it from all the other text. 
Also Font Awesome icons are used where appropriate, eg. for buttons and for the shopping cart nav link. These 
are very common icons which are generally recignized by users.

**Images** - The site uses a couple of custom made SVG graphics, as well as some own photographs which serve mainly 
as the products in the shop. The company logo, which is used as favicon, on header and footer, and on landing page 
had already been created before to another project using Adobe Illustrator, but now it was converted from image to 
SVG graphics for this projects using Inkscape. The flower SVG was created based on one of the photographs specifically 
for this project. 

**Animations** 

The first animation to notice on the site is the landing page. The goal was to create a smooth welcome 
screen which could raise some wow-effects from new customers visiting the site but also tell the visitor something about 
the service provider. The small flower beneath the logo and text content serves as a hint to scroll for more content. 
It also has a slow animation to change color - with the idea that visitor would not right away notice the color change, 
but only later start to wonder if it was the same color before. 

The footer has an animation to break the hard line between the light background main part and the darker footer. 
The idea was to create an animation that would be peaceful but also mesmerizing, following the context and theme of the 
imaginary service provider. Following the same theme there is the specific Breathe page which invites the visitor to 
a small meditational breathing moment with the rhythm of the animation. This animation unfortunately is not perfectly 
smooth, but I could not find a working solution to the issue.

On the shop page there is also a hover effect applied to the product images, mimicking a zoom.


### Website performance

Performance was tested with Lighthouse and got good results. One option to make it even better would be in the `main.scss` 
to import from Bootstrap only those modules which are being used, thus making the final style sheet smaller. However, 
the modules and components of Bootstrap have lots of dependencies, so that would be quite a though call. 


## General thoughts

_General thoughts about the work process and what was learned_

The hardest part of this assignment was the start since I was completely lacking ideas what to do. As I had to start 
somewhere, I started with the header and footer, and when I came up with the idea of having a wavy effect on the footer 
which eventually succeeded very well and had a kind of soothing feeling to it, I followed that feeling and created this 
imaginary service provider with meditation services. Since I wanted to have some physical items to sell in the shop 
I used my own flower photos - and that lead to the outcome of _flowers and meditation_. 

So the idea evolved while working on the project, and thus I do not have any particular plans or mockups, but I did have 
those in my head before starting to implement them. I recognized some ideas as quite bold - for example the major animations 
on landing page, on footer and the "breathing flower" - but in the end I managed to implement them almost exactly like I 
imagined them to be. In general I am very pleased with the outcome even though the start without an idea was not too promising. 

Major learning were with the animations of course, since had not that much experience with those. Lots of googling, learning what 
different properties do, and trying different options to get the desired end result. Another high learning curve was with 
Bootstrap. As I relied heavily on their layout system, I also had to read and learn a lot of their documentation. I know there 
are still a lot more opportunities in the ways using the library, and also that I might have utilized for example the variable 
customizing better, but nevertheless this was an extensive deep dive to a library I have not used before. In addition to these 
also some minor things with CSS came clearer and also learned to use a couple of new CSS properties.
