import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import style from "@/pages/termspolicy/termspolicy.module.css";

const Policy = () => {
  return (
    <div className={style.container}>
      <Header showGetTouchBtn />
      <div className={style.container}>
        <div className={style.title}>
          Privacy <br /> policy
        </div>
        <div className={style.termsContainer}>
          <div>
            <div className={style.subTitle}>Legal Mentions</div>
            <div className={style.description}>
              This entire site is subject to French legislation on copyright and
              intellectual property. All reproduction rights are reserved,
              including for downloadable documents and iconographic and
              photographic representations.
            </div>
            <div className={style.description}>
              The reproduction of all or part of this site on any electronic
              medium whatsoever is formally forbidden – except with the express
              authorization of La Patisserie Numerique.
            </div>
            <div className={style.description}>
              Director of publication: Marine CORE-BAILLAIS
            </div>
            <div className={style.description}>
              La Patisserie Numerique is a SAS with a capital of €49,790 and is
              registered with the RCS of Paris under the number 850 524 430.
            </div>
            <div className={style.description}>Head office c/o</div>
            <div className={style.description}>16 Villa de Lourcine</div>
            <div className={style.description}>Box 27</div>
            <div className={style.description}>75014 Paris.</div>
          </div>

          <div>
            <div className={style.subTitle}>Use of personal data collected</div>
            <div className={style.titleBlock}>Comments</div>
            <div className={style.description}>
              When you leave a comment on our website, not only the data entered
              in the comment form, but also your IP address and browser user
              agent are collected to help us detect unwanted comments.
            </div>
            <div className={style.description}>
              An anonymized string created from your email address (also known
              as a hash) may be sent to the Gravatar service to check whether
              you are using the service. The Gravatar service privacy policy is
              available here: https://automattic.com/privacy/. After your
              comment has been validated, your profile picture will be publicly
              visible next to your comment.
            </div>
          </div>

          <div>
            <div className={style.titleBlock}>Media</div>
            <div className={style.description}>
              If you are a registered user and you upload images to the website,
              we advise you to avoid uploading images containing EXIF data of
              GPS coordinates. Visitors to your website can download and extract
              location data from these images.
            </div>
          </div>

          <div>
            <div className={style.titleBlock}>Cookies</div>
            <div className={style.description}>
              If you leave a comment on our site, you will be offered the chance
              to save your name, email address, and website in cookies. This is
              only for your convenience so that you do not have to enter this
              information if you post another comment later. These cookies
              expire after one year.
            </div>
            <div className={style.description}>
              If you go to the login page, a temporary cookie will be set to
              determine if your browser accepts cookies. It does not contain any
              personal data and will be deleted automatically when you close
              your browser.
            </div>
            <div className={style.description}>
              When you log in, we will set a number of cookies to store your
              login information and screen preferences. The lifetime of a login
              cookie is two days, the lifetime of a screen option cookie is one
              year. If you check “Remember me”, your login cookie will be
              retained for a fortnight. If you log out of your account, the
              login cookie will be deleted.
            </div>
            <div className={style.description}>
              By editing or publishing a post, an additional cookie will be
              stored in your browser. This cookie does not contain any personal
              data. It simply indicates the ID of the publication you just
              edited. It expires after one day
            </div>
          </div>

          <div>
            <div className={style.titleBlock}>
              Embedded content from other sites
            </div>
            <div className={style.description}>
              Articles on this site may include embedded content (e.g. videos,
              images, articles…). Embedded content from other sites behaves in
              the same way as if the visitor were on that other site.
            </div>
            <div className={style.description}>
              These websites may collect data about you, use cookies, embed
              third party tracking tools, track your interactions with these
              embedded contents if you have an account logged on their website.
            </div>
          </div>

          <div>
            <div className={style.subTitle}>
              Use and transmission of your personal data
            </div>
            <div className={style.titleBlock}>How long your data is stored</div>
            <div className={style.description}>
              If you leave a comment, the comment and its metadata are stored
              indefinitely. This allows subsequent comments to be automatically
              recognised and approved instead of being left in the moderation
              queue.
            </div>
            <div className={style.description}>
              For users who register on our site (if possible), we also store
              the personal data indicated in their profile. All users can view,
              edit or delete their personal information at any time (with the
              exception of their username). Site managers can also view and
              modify this information.
            </div>
            <div className={style.description}>
              Cookies are stored for a maximum of 1 year.
            </div>
          </div>

          <div>
            <div className={style.titleBlock}>Your rights over your data</div>
            <div className={style.description}>
              If you have an account or have left comments on the site, you can
              request a file containing all the personal data we hold about you,
              including that which you have provided to us. You can also request
              the deletion of your personal data. This does not include data
              stored for administrative, legal or security purposes.
            </div>
          </div>

          <div>
            <div className={style.titleBlock}>
              Transmission of your personal data
            </div>
            <div className={style.description}>
              Visitors’ comments can be checked using an automated service for
              detecting undesirable comments.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Policy;
