import './App.css';
import './index.css'
import DG from '2gis-maps';
import history from '2gis-maps';
import location from '2gis-maps';

function MapCreation() {
  DG.then(function () {
    // change control position on touch devices
    var options = {
        center: [54.980156831455, 82.897440725094],
        zoom: 13,
        geoclicker: true,
        worldCopyJump: true,
        zoomControl: false,
        fullscreenControl: false
    };
    var query = parseQuery();
    var map = window.map = DG.map('map', getMapOptions(query, options));

    var controlOptions = DG.Browser.mobile ? {position: 'bottomright'} : {};
    DG.control.zoom(controlOptions).addTo(map);
    DG.control.traffic(controlOptions).addTo(map);
    DG.control.location(controlOptions).addTo(map);
    DG.control.ruler(controlOptions).addTo(map);
    if (DG.screenfull.isAvailable()) {
        DG.control.fullscreen(controlOptions).addTo(map);
    }
    var balloonHTML = '<a href="http://www.2gis.ru/" target="_blank">\n\
    <img src="./img/buttons/2gis-logo.png" alt="2GIS" title="2GIS" width="154" height="66" style="border: none"></a>\n\
    <p>Компания «ДубльГИС»</p>Тел.: (383) 363-05-55<br />Адрес: г. Новосибирск, Карла Маркса площадь, 7<br />\n\
    (МФК «Сан Сити»), 13 этаж';

    var marker = DG.marker([54.980156831455, 82.897440725094]).addTo(map).bindPopup(balloonHTML);

    if (query.lng === undefined && query.lat === undefined) {
        // only open popup when no coordinates specified because it moves map to popup
        marker.openPopup();
    }

    map.on('moveend', function() {
        if (!history.replaceState) {
            return; // ie <= 9
        }

        var center = map.getCenter();
        history.replaceState({}, document.title,
            '?lng=' + center.lng.toFixed(5) +
            '&lat=' + center.lat.toFixed(5) +
            '&zoom=' + map.getZoom()
        );
    });
});

function parseQuery() {
    var res = {};
    location.search.slice(1).split('&')
        .map(function(str) {
            return str.split('=')
        })
        .forEach(function(couple) {
            res[couple[0]] = couple[1];
        });
    return res;
}

function getMapOptions(query, options) {
    if (query.lng !== undefined && query.lat !== undefined) {
        options.center = [parseFloat(query.lat), parseFloat(query.lng)];
    }
    if (query.zoom !== undefined) {
        options.zoom = parseInt(query.zoom, 10);
    }
    return options;
}
}

function HeroSection() {
    return (
    <section className="hero">
      <div className="container">
        <div id="map" style={{ width: '100%', height: '500px' }}></div>
        <MapCreation/>
      </div>
    </section>
  );
}


function ProductSection() {
    return (
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="trending__product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4>Navigation</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="btn__all">
                      {/* Add button content here if needed */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="/reactApp/reactjs/public/img/trending/trend-1.jpg"
                      >
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/trending/trend-2.jpg"
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/trending/trend-3.jpg"
                      ></div>
                    </div>
                  </div>
                  {/* Add more product items as needed */}
                </div>
              </div>
              <div className="popular__product">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/popular/popular-1.jpg"
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/popular/popular-2.jpg"
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/popular/popular-3.jpg"
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/popular/popular-4.jpg"
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/popular/popular-5.jpg"
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/popular/popular-6.jpg"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent__product">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="/reactApp/reactjs/img/recent/recent-1.jpg"
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/recent/recent-2.jpg"
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/recent/recent-3.jpg"
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/recent/recent-4.jpg"
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/recent/recent-5.jpg"
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/recent/recent-6.jpg"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="product__sidebar">
                <div className="product__sidebar__view">
                  <div className="section-title">
                    <h5>Top News</h5>
                  </div>
                  <ul className="filter__controls">
                    <li className="active" data-filter="*">
                      Day
                    </li>
                    <li data-filter=".week">Week</li>
                    <li data-filter=".month">Month</li>
                    <li data-filter=".years">Years</li>
                  </ul>
                  <div className="filter__gallery">
                    {/* Add top news items here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="page-up">
        <a href="index.html" id="scrollToTopButton"><span className="arrow_carrot-up"></span></a>
      </div>
    </footer>
  )
}


function App() {
  return (
  <html>
  <body>
    <header>
      <nav className="navbar bg-body-tertiary">
          <div className="container justify-content-center">
            <a className="navbar-brand" href="#">
              <img src="img/logo.png" alt="Bootstrap" width="40" height="44"/>
            </a>
          </div>
        </nav>
      </header>
    <HeroSection/>
    <ProductSection/>
    <Footer/> 
  </body>
   
  </html>
 );
}

export default App;
