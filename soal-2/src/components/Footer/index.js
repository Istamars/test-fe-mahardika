import React from 'react';
import follow1 from '../../assets/follow-us-1.png';
import follow2 from '../../assets/follow-us-2.png';
import follow3 from '../../assets/follow-us-3.png';
import channel1 from '../../assets/channel-1.png';
import channel2 from '../../assets/channel-2.png';
import payment1 from '../../assets/payment-1.png';
import payment2 from '../../assets/payment-2.png';
import payment3 from '../../assets/payment-3.png';
import payment4 from '../../assets/payment-4.png';
import payment5 from '../../assets/payment-5.png';
import payment6 from '../../assets/payment-6.png';


export default function Footer() {
  return (
    <React.Fragment>
      <hr/>
      <div className="row px-2">
        <div className="col-3 p-1">
          <div className="sub-title-2 bold accent-color">MAHARDIKA CAKE</div>
          <p className="light">
            Sed ut perspiciatis unde omnis iste natus and error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis quasi
          </p>

          <span className="mr-1">Follow us: </span>
          <img src={follow1} className="icon ml-1" alt="follow-ig" />
          <img src={follow2} className="icon mx-1" alt="follow-tokped" />
          <img src={follow3} className="icon" alt="follow-shoopie" />
        </div>
        <div className="col-3">
          <div className="sub-title-2 bold accent-color font-tnr mb-1">Our Online Channel</div>
          <img src={channel1} className="channel ml-1" alt="channel-wa" />
          <img src={channel2} className="channel ml-1" alt="channel-grab" />
          <img src={follow2} className="channel ml-1" alt="channel-tokped" />
          <img src={follow3} className="channel  ml-1" alt="channel-shoopie" />

          <div className="sub-title-2 bold accent-color font-tnr  mt-1">We Accept</div>
          <div className="py-1">
            <img src={payment1} className="payment ml-1 mb-1" alt="payment-bca" />
            <img src={payment2} className="payment ml-1 mb-1" alt="payment-bca" />
            <img src={payment3} className="payment ml-1 mb-1" alt="payment-bca" />
            <img src={payment4} className="payment ml-1 mb-1" alt="payment-bca" />
            <img src={payment5} className="payment ml-1 mb-1" alt="payment-bca" />
            <img src={payment6} className="payment ml-1 mb-1" alt="payment-bca" />
          </div>
        </div>
        <div className="col-3">
          <div className="sub-title-2 bold accent-color font-tnr">Our Online Channel</div>
          <ul className="link m-0">
            <li className="pt-1 light">
              <a className="underline"href="/">Our Contact & Location</a>
            </li>
            <li className="pt-1 light">
              <a className="underline"href="/">Company Profile</a>
            </li>
            <li className="pt-1 light">
              <a className="underline"href="/">Partnership</a>
            </li>
            <li className="pt-1 light">
              <a className="underline" href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <div className="sub-title-2 bold accent-color font-tnr mb-1">Jam Operasional</div>
          <div className="light">Senin s/d Sabtu 06.45 - 21.00</div>
          <div className="light mb-1">Minggu 09.00 - 18.30</div>

          <div className="sub-title-2 bold accent-color font-tnr mb-1">Lokasi</div>
          <div className="light mb-1">Jl. Kuta Kencana Utara No. 17</div>

          <div className="sub-title-2 bold accent-color font-tnr mb-1">Kontak</div>
          <div className="light mb-1">Email: admin@mahardikasolusi.com</div>

        </div>
      </div>
    </React.Fragment>
  )
}