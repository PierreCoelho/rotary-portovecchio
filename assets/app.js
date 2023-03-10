/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';
import './js/_images.js';
import './js/_delete_image.js';
import './js/_delete_section_image.js';
import './js/_add_section.js';
import './js/_delete_section.js';
import './js/_show_gallery_image.js';
import 'bootstrap';
import bsCustomFileInput from 'bs-custom-file-input';
import 'add-to-calendar-button';

// start the Stimulus application
import './bootstrap';

bsCustomFileInput.init();