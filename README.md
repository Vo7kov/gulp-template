# Simple gulp template
Its a simple gulp-template with:
* **.scss** 
* **optimize images**
* **autoprefixer** 
* **stylelint** 
* **linthtml** 
* **eslint** 
* **deploy package**

## It has next commands (use ```npm run 'command'``` to run them)
* **lint** - launches all linters. If your code incorrect (for example .js) it will stop on js linter and you'll need to restart linters
* **optimize** - optimizes images. You need to upload them into ```src/images/src/```, then run the command and the output will be in ```src/images/dest/``` folder
* **deploy** - deploy to gh-pages

## Important thing
* For the html docs you need to use ```./images/your_folder/your_file``` to paste them
* For the scss docs you need to use ```../images/your_folder/your_file```
