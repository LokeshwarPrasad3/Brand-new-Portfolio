import React from "react";
import "../CSS/SocialMedia.css";

const SocialMedia = () => {
  return (
    <>
      <div className="social_links_container h-28 py-5  flex justify-between items-center flex-col text-white my-2 ">
        <h2 className="font-overpass text-xl">Social Media Links</h2>
        <div class="social-icons">
          <a 
            href="https://github.com/LokeshwarPrasad3"
            target="_blank"
            class="social-icon social-icon--github"
          >
            <ion-icon className="social_ion_icon" name="logo-github"></ion-icon>
            <div class="tooltip">Github</div>
          </a>
          <a 
            href="https://www.linkedin.com/in/lokeshwar-prasad-dewangan-7b2163211/"
            target="_blank"
            class="social-icon social-icon--linkedin"
          >
            <ion-icon
              className="social_ion_icon"
              name="logo-linkedin"
            ></ion-icon>
            <div class="tooltip">LinkedIn</div>
          </a>
          <a 
            href="https://instagram.com/lokeshwarprasad3"
            target="_blank"
            class="social-icon social-icon--instagram"
          >
            <ion-icon
              className="social_ion_icon"
              name="logo-instagram"
            ></ion-icon>
            <div class="tooltip">Instagram</div>
          </a>
          <a 
            href="https://twitter.com/LokeshwarPras17"
            target="_blank"
            class="social-icon social-icon--twitter"
          >
            <ion-icon
              className="social_ion_icon"
              name="logo-twitter"
            ></ion-icon>
            <div class="tooltip">Twitter</div>
          </a>
          <a 
            href="https://www.facebook.com/lokeshwarprasad.dewangan.7/"
            target="_blank"
            class="social-icon social-icon--facebook"
          >
            <ion-icon
              className="social_ion_icon"
              name="logo-facebook"
            ></ion-icon>
            <div class="tooltip">Facebook</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
