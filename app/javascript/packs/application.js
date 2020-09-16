// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import 'bootstrap';

import { initStarRating } from '../plugins/init_star_rating';
import { previewImageOnFileSelect } from "../components/photo_preview";



import { initMapbox } from '../plugins/init_mapbox';

document.addEventListener('turbolinks:load', () => {
    initStarRating();
    previewImageOnFileSelect();
    initMapbox();

    document.querySelectorAll('.edit-shopping-cart').forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            document.getElementById(`form-${element.id}`).classList.toggle("edit-cart-hide");
        })
    });

})
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
