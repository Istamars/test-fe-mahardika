import React, { useEffect } from 'react';
// import {connect, useDispatch, useSelector} from 'react-redux'
import {connect } from 'react-redux';
import { getCake } from '../../actions/cake';
import cake1 from '../../assets/cake-1.png';
import cake2 from '../../assets/cake-2.png';
import cake3 from '../../assets/cake-3.png';
import cake4 from '../../assets/cake-4.png';
import cake5 from '../../assets/cake-5.png';
import Card from '../../components/Card';

function Home( props ) {
  const renderCardList = () => {
    const {cakes} = props;
    return cakes.map((cake, index) => {
      return ( 
        <div className="col-2">
          <Card key={index} id={index} nama={cake.nama} gambar={cake.gambar} promo={cake.promo} harga={cake.harga}/>
        </div>
      )
    })
  };

  // const cake = useSelector(state => state.cake)
  // const dispatch = useDispatch();
  
  useEffect(() => {
    props.getCake();
  }, [props]);

  console.log('render', props);
  return (
    <React.Fragment>
      <div className="bg-home h-full center-v">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6 center">
            Hari sempurna dengan kue sempurna
            <div className="title accent-color bold py-1 font-tnr">Kue Coklat</div>
            <button className="btn btn-primary">Hubungi Kami</button>
          </div>
        </div>
      </div>
      
      <div className="row p-2">
        <div className="col-6">
          <div className="sub-title bold accent-color font-tnr">
            Resep menuju kebahagiaan
          </div>
          <p className="light pt-1">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna aliquam erat volutpat lorem
          </p>
          <p className="light pb-1">
            Edge Themes give you everything you need to create an amazing website. Designed and built with care, filled with creative elements and useful options, and completely user-friendly. Set up your website quickly and with ease.Tons of shortcodes provide countless options. From image galleries to infographics.
          </p>

          <button className="btn btn-primary">cari tahu</button>
          <button className="btn btn-secondary mx-1">cari tahu</button>
        </div>
        <div className="col-6 disapearable">
          <img src={cake1} className="mx-1" alt="cake-1" />
          <img src={cake2} className="" alt="cake-2" />
        </div>
      </div>
      
      <div className="row p-0">
        <div className="col-4 p-0 container">
          <img src={cake3} className="h-400 stackable-img img-pr-1 w-100" alt="cake-3" />
          <div className="stackable-text img-pr-1 w-100">
            <div className="bold text-white sub-title font-tnr">
              Best Selling
            </div>
            <p className="light px-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquet metus. Cras faucibus mauris ac hendrerit fringilla. Duis non leo nisi. Donec sodales mattis enim.
            </p>
            <button className="btn btn-secondary-white">shop now</button>
          </div>
        </div>
        <div className="col-4 p-0 container">
          <img src={cake4} className="h-400 stackable-img img-px-1 w-100" alt="cake-3" />
          <div className="stackable-text img-px-1 w-100">
            <div className="bold text-white sub-title font-tnr">
              Paling Populer
            </div>
            <p className="light px-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquet metus. Cras faucibus mauris ac hendrerit fringilla. Duis non leo nisi. Donec sodales mattis enim.
            </p>
            <button className="btn btn-secondary-white">shop now</button>
          </div>
        </div>
        <div className="col-4 p-0 container">
          <img src={cake5} className="h-400 stackable-img img-pl-1 w-100" alt="cake-3" />
          <div className="stackable-text img-pl-1 w-100">
            <div className="bold text-white sub-title font-tnr">
              Kue Anak
            </div>
            <p className="light px-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquet metus. Cras faucibus mauris ac hendrerit fringilla. Duis non leo nisi. Donec sodales mattis enim.
            </p>
            <button className="btn btn-secondary-white">shop now</button>
          </div>
        </div>
      </div>
      
      <div className="row p-2">
        <div className="col-4 pl-2 bold sub-title accent-color playfair">
        Desain Kue Modern & Kontemporer
        </div>
        <div className="col-8 center-v px-1 py-2">
        Soufflé caramels sweet roll powder jelly-o cake apple pie danish liquorice marshmallow. Halvah tart topping lemon drops icing cookie cheesecake croissant. Cookie muffin chocolate apple pie. Chocolate bar carrot cake ice cream caramels. Lollipop cupcake cookie.
        </div>
      </div>

      
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row">
            {renderCardList()}
          </div>
        </div>
        
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    cakes: state.cakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCake: () => dispatch(getCake)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)