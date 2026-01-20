'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import Countdown from '@/components/Countdown';
import HangingLamps from '@/components/HangingLamps';
import LotusDecorations from '@/components/LotusDecorations';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="macbook-pro">
      <HangingLamps />
      <LotusDecorations />
      <div className="hero-section">
        <img className="om-symbol" src="/om-symbol.png" alt="Om" data-aos="fade-in" data-aos-delay="50" data-aos-duration="800" />
        <div className="frame" data-aos="fade-in" data-aos-delay="250" data-aos-duration="1000">
          <div className="text-wrapper">AJINKRISHNA</div>
          <div className="div">&</div>
          <div className="text-wrapper-2">ANUSREE</div>
        </div>
        <p className="hero-tagline" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
          Join us as we begin our forever
        </p>
        <img className="rectangle" src="/couple image.png" data-aos="fade-in" data-aos-delay="250" data-aos-duration="1000" />
      </div>
      <div className="events-container">
        <div className="frame-2" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-wrapper-3">Thalikettu</div>
          <p className="text-wrapper-4">Time: 10:00 AM – 10:30 AM<br />Venue: Kolakkattil Auditorium, Parappanchina</p>
          <a href="https://maps.app.goo.gl/HizYcNCJnwnPyRdv6" target="_blank" rel="noopener noreferrer" className="div-wrapper">
            <div className="text-wrapper-5">View location on Gmap</div>
          </a>
          <img className="card-footer-image" src="/lotus-footer.png" alt="" />
        </div>
        <div className="frame-3" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          <div className="text-wrapper-3">Reception</div>
          <p className="text-wrapper-4">
            Time: 04:00 PM – 08:00 PM<br />Venue: Zubaida Park Auditorium, Pathumoochi, Vengara
          </p>
          <a href="https://maps.app.goo.gl/BEg1iZwfhaw48Dza6" target="_blank" rel="noopener noreferrer" className="div-wrapper">
            <div className="text-wrapper-5">View location on Gmap</div>
          </a>
          <img className="card-footer-image" src="/lotus-footer.png" alt="" />
        </div>
      </div>
      <p className="text-wrapper-6">Two paths, one promise — and a lifetime of togetherness.</p>

      {/* Countdown Timer */}
      <div className="countdown-section" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="countdown-title" data-aos="fade-down" data-aos-delay="100">COUNTING DOWN TO</h2>
        <h3 className="countdown-subtitle" data-aos="fade-up" data-aos-delay="200">Sunday, 08 February 2026<br />Makaram 25, 1201</h3>
        <div data-aos="zoom-in" data-aos-delay="300">
          <Countdown />
        </div>
      </div>

      <div className="two-souls-one-wrapper">
        <p className="two-souls-one">
          &#34;Two souls, one journey. In the gentle rhythm of life, we found each other — a bond woven by fate
          and
          nurtured by love.&#34;<br /><br /><br />From the first smile to countless shared dreams, our paths
          intertwined
          to create a story we&#39;re proud to call ours. Now, we begin a new chapter — one filled with promise,
          love,
          and togetherness.<br />We invite you to witness and bless the beginning of our forever.
        </p>
      </div>
      <p className="with-love-and">
        With love and gratitude,<br />
        Ajinkrishna &amp; Anusree<br />
      </p>

      {/* Footer Images - Responsive */}
      <img
        className="footer-houseboat footer-mobile"
        src="/footer-mobile.jpg"
        alt="Kerala Houseboat"
        loading="eager"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <img
        className="footer-houseboat footer-desktop"
        src="/footer-desktop.jpg"
        alt="Kerala Houseboat"
        loading="eager"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
    </div>
  );
}
