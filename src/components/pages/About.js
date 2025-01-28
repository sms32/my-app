import React from "react";
import "./About.css";
import Navbar from "../Navbar";
import choirImage from "../assets/Church.jpg";
import sundaySchoolImage from "../assets/Charles.jpg";
import dov from "../assets/dov.jpg";
import dovv from "../assets/dovv.jpg";

// Gallery Images
import gallery1 from "../assets/IMG8.jpg";
import gallery2 from "../assets/IMG7.jpg";
import gallery3 from "../assets/IMG6.jpg";
import gallery4 from "../assets/IMG5.jpg";
import gallery5 from "../assets/IMG4.jpg";
import gallery6 from "../assets/IMG3.jpg";

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className="about-us">
                {/* Section 1 */}
                <div className="ab">
                <div className="section">
                    <div className="content-wrapper">
                        <div className="image-content">
                            <img src={choirImage} alt="Cathedral Choir" className="styled-image" />
                        </div>
                        <div className="text-content">
                            <h2>Anointing Prayer Palace</h2>
                            <p>
                                .Anointing Prayer Palace is a place of divine encounter where people come
        to experience the profound healing power of God. With a serene and sacred
        atmosphere, we strive to provide spiritual regeneration and revival for the
        soul, mind, and body. It is a sanctuary for those seeking solace, prayer,
        and connection with the Almighty.

                            </p>
                            <p>
                         

                            Inspired by the scripture, "You are to anoint for me the one
        I indicate," the Anointing Prayer Palace serves as a beacon of hope and light
        for those in need of God’s touch.

                            </p>
                            <p>
                                <b>—  1 Samuel 16:3 </b>
                            </p>
                        </div>
                    </div>
                </div>
                </div>

                {/* Section 2 */}
                <div>
                <div className="section alt-section">
                    <div className="content-wrapper reverse">
                        <div className="image-content">
                            <img src={sundaySchoolImage} alt="Sunday School" className="styled-images" />
                        </div>
                        <div className="text-content">
                            <h2>Our Purpose and Mission</h2>
                            <p>
                            The purpose of the Anointing Prayer Palace is to be a source of blessing and
        encouragement to countless individuals. We are devoted to creating a peaceful
        and nurturing environment where anyone burdened in body, mind, or spirit can
        find rest and receive the healing touch of the Lord.

                            </p>
                            <p>
                            Our mission is built on the foundation of Christ’s love and compassion. We
        provide a haven for prayer, worship, and meditation so that people from all
        walks of life can encounter God’s presence and be strengthened in their faith.

                            </p>
                            <p>
                                 – <b> Bro.V. Charles</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-container">
      <div className="image-section">
        <img src={dov} alt="Church Left" className="service-image" />
      </div>
      <div className="text-section">
        <h2 className="An">Types of Anointing</h2>
        <p>  The Anointing Prayer Palace practices a variety of anointings,
        each with its unique significance and blessing. Through God’s grace, we guide
        individuals in experiencing these sacred anointings:
</p>
<div className="Ann">
        <p>Kingly Anointing – Empowering leadership with wisdom and authority.
        </p>
        <p> Holy Anointing (Psalm 89:20) – Setting apart for divine purposes.
        </p>
        <p>Healing Anointing (Psalm 23:5) – Bringing restoration to the soul, mind, and body.</p>
        <p>Rejoice Anointing (Psalm 45:7) – Filling lives with unending joy and gladness.
        </p>
        <p>Fire Anointing – Igniting passion for God and His work</p>
        <p>Fighting Anointing – Strengthening faith for spiritual battles.
        </p>
        <p>Last Day Anointing Prayer – Preparing for the glorious return of Christ.
        </p>
        </div>
      </div>
      <div className="image-section">
        <img src={dovv} alt="Church Right" className="service-image" />
      </div>
    </div>

<div className="Prayers">

    <div className="text-sections">
        <h2 className="Ans">Ministry Support and Activities</h2>
        <p className="AAA">  The Anointing Prayer Palace is dedicated to serving individuals and families
        through various ministries and outreach programs. With a commitment to
        spiritual growth and community service, we conduct the following activities:

</p>
<div className="Anns">
        <p>1st Saturday(Anointing Prayers) -A special gathering for intercessory prayer and divine blessings.

        </p>
        <p>  Gifts of Anointing Prayer – Helping individuals discover and develop their spiritual gifts.

        </p>
        <p>Retreat Centre – A peaceful space for reflection and renewal.
        </p>
        <p>Family Prayer Centre – Strengthening family bonds through collective prayer and worship.

        </p>
        <p>Baptism Service – Guiding believers in their journey of faith through baptism.
        </p>
        <p>Reaching the Unreached Villages – Spreading the love of Christ to remote and underserved areas.

        </p>
        <p>Church Ministry Building with Anointing – Building a strong foundation for vibrant worship<br/> and fellowship.

        </p>
        </div>
      </div>
      </div>

      {/* Gallery Section */}
      <div className="galer">
      <h2 className="gt">Gallery</h2>

      <div className="gallery-sections">
        <div className="gallery-cards">
          <img src={gallery1} alt="Gallery 1" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 1</h4>
            <p>Short description for image 1.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src={gallery2} alt="Gallery 2" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 2</h4>
            <p>Short description for image 2.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src={gallery3} alt="Gallery 3" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 3</h4>
            <p>Short description for image 3.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src={gallery4} alt="Gallery 4" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 4</h4>
            <p>Short description for image 4.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src={gallery5} alt="Gallery 5" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 5</h4>
            <p>Short description for image 5.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src={gallery6} alt="Gallery 6" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 6</h4>
            <p>Short description for image 6.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src="gallery-img-7.jpg" alt="Gallery 7" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 7</h4>
            <p>Short description for image 7.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src="gallery-img-8.jpg" alt="Gallery 8" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 8</h4>
            <p>Short description for image 8.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src="gallery-img-9.jpg" alt="Gallery 9" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 9</h4>
            <p>Short description for image 9.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src="gallery-img-10.jpg" alt="Gallery 10" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 10</h4>
            <p>Short description for image 10.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src="gallery-img-11.jpg" alt="Gallery 11" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 11</h4>
            <p>Short description for image 11.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src="gallery-img-12.jpg" alt="Gallery 12" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 12</h4>
            <p>Short description for image 12.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src="gallery-img-13.jpg" alt="Gallery 13" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 13</h4>
            <p>Short description for image 13.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src="gallery-img-14.jpg" alt="Gallery 14" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 14</h4>
            <p>Short description for image 14.</p>
          </div>
        </div>
        <div className="gallery-cards">
          <img src="gallery-img-15.jpg" alt="Gallery 15" className="gallery-images" />
          <div className="gallery-contents">
            <h4>Image Title 15</h4>
            <p>Short description for image 15.</p>
          </div>
          </div>
        </div>
      </div>

        </div>
        </div>
    );
};

export default AboutUs;
