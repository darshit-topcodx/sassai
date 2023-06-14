import React from 'react'
import './homepage.scss'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import InstagramIcon from '@mui/icons-material/Instagram';
import temp from '../../dummyData'
import Slider from "react-slick";

const HomePage = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  console.log(reveal, 'revals');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
      <div className='homepage'>
        <div className='header-sec'>
          <div className='container'>
            <div className='header-content'>
              <h1>
                Fresh cryptoworld news & trends
              </h1>
              <p>Stay ahead of the cryptocurrency tendencies with our expert news and updates.</p>
            </div>
          </div>
        </div>
        <div className='about-sec'>
          <h3>Davinci Benefits</h3>
          <p>Enjoy the full flexibility of the platform with ton of features</p>
          <div className='container'>
            <div className='about-content'>
              <div className='cols-1'>
                <div className='card'>
                  <img />
                  <p>Latest AI technology</p>
                  <p>Lorem ipsum dolor sit amet est consectetur adipisicing elit. Ut aspernatur mollitia aliquid consectetur illo sapiente nemo obcaecati unde.</p>
                </div>
                <div className='card'>
                  <img />
                  <p>Latest AI technology</p>
                  <p>Lorem ipsum dolor sit amet est consectetur adipisicing elit. Ut aspernatur mollitia aliquid consectetur illo sapiente nemo obcaecati unde.</p>
                </div>
                <div className='card'>
                  <img />
                  <p>Latest AI technology</p>
                  <p>Lorem ipsum dolor sit amet est consectetur adipisicing elit. Ut aspernatur mollitia aliquid consectetur illo sapiente nemo obcaecati unde.</p>
                </div>
              </div>
              <div className='cols-2'>
                <div className='card'>
                  <img />
                  <p>Latest AI technology</p>
                  <p>Lorem ipsum dolor sit amet est consectetur adipisicing elit. Ut aspernatur mollitia aliquid consectetur illo sapiente nemo obcaecati unde.</p>
                </div>
                <div className='card'>
                  <img />
                  <p>Latest AI technology</p>
                  <p>Lorem ipsum dolor sit amet est consectetur adipisicing elit. Ut aspernatur mollitia aliquid consectetur illo sapiente nemo obcaecati unde.</p>
                </div>
                <div className='card'>
                  <img />
                  <p>Latest AI technology</p>
                  <p>Lorem ipsum dolor sit amet est consectetur adipisicing elit. Ut aspernatur mollitia aliquid consectetur illo sapiente nemo obcaecati unde.</p>
                </div>
              </div>
              <div className='benifit-text'>
                <h3> <span style={{ color: 'rgb(254, 178, 0)' }}>Davinci</span> Uses most sophisticated Artificial Intelligence Technology</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quibusdam? Illum ad eius, molestiae placeat dicta quae, ab nihil omnis obcaecati reiciendis recusandae, voluptatem eos molestias aliquam saepe tenetur optio? Consectetur adipisicing elit. Ut aspernatur mollitia aliquid consectetur illo sapiente nemo obcaecati.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ea et, error quisquam corporis, architecto minus doloremque aut facere itaque culpa eos molestias nulla reiciendis animi dolores, quod sunt illum.</p>
              </div>

            </div>
          </div>
        </div>
        <div className='bonus-sec'>
          <div className='container' style={{ height: '100%' }}>
            <div className='bonus-content'>
              <h3>Davinci templets</h3>
              <p>Enjoy the full flexibility of the platform with ton of features</p>
              <div className='box-div'>
                {temp.map((val) => {
                  return <>
                    <div className='box'>
                      <img />
                      <p>Blog Titles</p>
                      <p>Nobody wants to read boring blog titles, generate catchy blog titles with this tool</p>
                    </div>

                  </>
                })}

              </div>
            </div>

          </div>
        </div>
        <div className='features-sec'>
          <div className='container' style={{ height: '100%' }}>
            <div className='features-contant'>

              <h1>Customer Reviews</h1>
              <p>We guarantee that you will be one of our happy customers as well</p>
              <div className='features-box'>



                <Slider {...settings}>
                  <div className='box'>
                    <p> Quisque ac iaculis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci tellus, hendrerit id congue sed, rhoncus eget nunc. Proin eu nibh vitae velit malesuada aliquam at ut turpis. </p>
                    <div classname="d-flex">
                      <div style={{ width: '80px', height: '80px' }}>
                        <img src='https://openaidavinci.textract.ai/img/reviews/S20Qrro3U2.jpg' style={{ width: '80px', height: '80px' }} />
                      </div>
                      <div className='d-flex flex-column'>
                        <p>Emily Blunt</p>
                        <p>IT Blogger</p>
                      </div>
                    </div>
                  </div>
                  <div className='box'>
                    <p> Quisque ac iaculis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci tellus, hendrerit id congue sed, rhoncus eget nunc. Proin eu nibh vitae velit malesuada aliquam at ut turpis. </p>

                    <div classname="d-flex">
                      <div style={{ width: '80px', height: '80px' }}>
                        <img src='https://openaidavinci.textract.ai/img/reviews/S20Qrro3U2.jpg' style={{ width: '80px', height: '80px' }} />
                      </div>
                      <div className='d-flex flex-column'>
                        <p>Emily Blunt</p>
                        <p>IT Blogger</p>
                      </div>
                    </div>                  </div>
                  <div className='box'>
                    <p> Quisque ac iaculis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci tellus, hendrerit id congue sed, rhoncus eget nunc. Proin eu nibh vitae velit malesuada aliquam at ut turpis. </p>
                    <div classname="d-flex">
                      <div style={{ width: '80px', height: '80px' }}>
                        <img src='https://openaidavinci.textract.ai/img/reviews/S20Qrro3U2.jpg' style={{ width: '80px', height: '80px' }} />
                      </div>
                      <div className='d-flex flex-column'>
                        <p>Emily Blunt</p>
                        <p>IT Blogger</p>
                      </div>
                    </div>
                  </div>
                  <div className='box'>
                    <p> Quisque ac iaculis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci tellus, hendrerit id congue sed, rhoncus eget nunc. Proin eu nibh vitae velit malesuada aliquam at ut turpis. </p>

                    <div classname="d-flex">
                      <div style={{ width: '80px', height: '80px' }}>
                        <img src='https://openaidavinci.textract.ai/img/reviews/S20Qrro3U2.jpg' style={{ width: '80px', height: '80px' }} />
                      </div>
                      <div className='d-flex flex-column'>
                        <p>Emily Blunt</p>
                        <p>IT Blogger</p>
                      </div>
                    </div>
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className='clint-sec'>
          <div className='container' style={{ height: '100%' }}>
            <div className='client-contet'>
              <div className='client-txt'>
                <p>WHO WE WORK WITH</p>
                <h1>WHO WE WORK WITH Meet Our Clients</h1>
                <p>These companies choose our service because they trust the technology as well as appreciate our perspicacity.</p>
              </div>
              <div className='client-logos'>
                <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/client-2-copyright.png' />
                <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/client-6-copyright.png' />
                <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/client-5-copyright.png' />
                <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/client-3-copyright.png' />
                <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/client-4-copyright.png' />
                <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/client-1-copyright.png' />
              </div>
            </div>
          </div>
        </div>
        <div className='team-sec'>
          <div className='container'>
            <div className='team-content'>
              <p>EXPERTS</p>
              <h1>This Is Our Team</h1>
              <div className='team-card'>
                <div className='cards'>
                  <div className='card-img'>
                    <img src='https://4kwallpapers.com/images/wallpapers/beautiful-girl-beautiful-woman-portrait-black-background-3840x2560-2937.jpg' />

                  </div>
                  <div className='card-txt'>
                    <h4>Amy walker</h4>
                    <p>Project manager</p>
                    <p style={{ marginTop: '20px' }}>Innovations become accessible with our blog</p>
                    <div className='social-icons'>
                      <div><FacebookOutlinedIcon /></div>
                      <div><TwitterIcon /></div>
                      <div><SportsBasketballIcon /></div>
                      <div> <InstagramIcon /> </div>
                    </div>
                  </div>
                </div>
                <div className='cards'>
                  <div className='card-img'>
                    <img src='https://4kwallpapers.com/images/wallpapers/beautiful-girl-beautiful-woman-portrait-black-background-3840x2560-2937.jpg' />

                  </div>
                  <div className='card-txt'>
                    <h4>Amy walker</h4>
                    <p>Web Developer</p>
                    <p style={{ marginTop: '20px' }}>Innovations become accessible with our blog</p>
                    <div className='social-icons'>
                      <div><FacebookOutlinedIcon /></div>
                      <div><TwitterIcon /></div>
                      <div><SportsBasketballIcon /></div>
                      <div> <InstagramIcon /> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='timer-sec'>

          <div className='ab-div'></div>
          <p>FASTEN YOUR SEATBELTS</p>
          <h1>Qwery Skyrockets in :</h1>
          <div className='timer'>
            <div className='time'>
              <h1>170</h1>
              <div></div>
              <p>Days</p>
            </div>
            <div className='coln'><h1>:</h1></div>
            <div className='time'>
              <h1>12</h1>
              <div></div>
              <p>Hours</p>
            </div>
            <div className='coln'><h1>:</h1></div>
            <div className='time'>
              <h1>06</h1>
              <div></div>
              <p>Minutes</p>
            </div>
            <div className='coln'><h1>:</h1></div>
            <div className='time'>
              <h1>56</h1>
              <div></div>
              <p>Seconds</p>
            </div>
          </div>
          <button>Stay Ahead</button>
        </div>
        <div className='articles'>
          <div className='container'>
            <div className='articles-sec'>
              <div className='article-txt'>
                <p>DIGITAL BLOG</p>
                <h1>Recent Articles</h1>
                <div className='article-card'>
                  <div className='img-card'>
                    <img src='https://images.unsplash.com/photo-1620266757065-5814239881fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' />
                  </div>
                  <div className='card-txt'>
                    <p>BLOG <span>Apr 1,2023</span></p>
                    <h3>Brainstorm tips for cryptocurrency analytics</h3>
                  </div>
                </div>
                <div className='article-card'>
                  <div className='img-card'>
                    <img src='https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpdGNvaW58ZW58MHx8MHx8fDA%3D&w=1000&q=80' />
                  </div>
                  <div className='card-txt'>
                    <p>BLOG <span>Apr 1,2023</span></p>
                    <h3>5 simple steps to organize your charts and reports</h3>
                  </div>
                </div>
                <div className='article-card'>
                  <div className='img-card'>
                    <img src='https://images.moneycontrol.com/static-mcnews/2022/05/cryptocurrency.jpg?impolicy=website&width=1600&height=900' />
                  </div>
                  <div className='card-txt'>
                    <p>BLOG <span>Apr 1,2023</span></p>
                    <h3>Cryptocurrency marketing courses for beginners</h3>
                  </div>
                </div>
              </div>
              <div className='article-table'>
                <table>
                  <tr>
                    <th style={{ width: '100%' }}>Company</th>
                    <th >Price</th>
                    <th>24H(%)</th>
                  </tr>
                  <tr>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src='https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png' style={{ width: '30px', height: '30px' }} /> Bitcoin (BTC)</td>
                    <td>$27,221.00</td>
                    <td style={{ color: '#7CD420' }}>0.19%</td>
                  </tr>
                  <tr>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src='https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png' style={{ width: '30px', height: '30px' }} /> Bitcoin (BTC)</td>
                    <td>$27,221.00</td>
                    <td style={{ color: '#7CD420' }}>0.19%</td>
                  </tr>
                  <tr>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src='https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png' style={{ width: '30px', height: '30px' }} /> Bitcoin (BTC)</td>
                    <td>$27,221.00</td>
                    <td style={{ color: '#7CD420' }}>0.19%</td>
                  </tr>
                  <tr>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src='https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png' style={{ width: '30px', height: '30px' }} /> Bitcoin (BTC)</td>
                    <td>$27,221.00</td>
                    <td style={{ color: '#7CD420' }}>0.19%</td>
                  </tr>
                  <tr>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src='https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png' style={{ width: '30px', height: '30px' }} /> Bitcoin (BTC)</td>
                    <td>$27,221.00</td>
                    <td style={{ color: '#7CD420' }}>0.19%</td>
                  </tr>
                  <tr>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src='https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png' style={{ width: '30px', height: '30px' }} /> Bitcoin (BTC)</td>
                    <td>$27,221.00</td>
                    <td style={{ color: '#7CD420' }}>0.19%</td>
                  </tr>
                  <tr>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src='https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png' style={{ width: '30px', height: '30px' }} /> Bitcoin (BTC)</td>
                    <td>$27,221.00</td>
                    <td style={{ color: '#7CD420' }}>0.19%</td>
                  </tr>
                  <tr>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src='https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png' style={{ width: '30px', height: '30px' }} /> Bitcoin (BTC)</td>
                    <td>$27,221.00</td>
                    <td style={{ color: '#7CD420' }}>0.19%</td>
                  </tr>
                  <tr>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src='https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png' style={{ width: '30px', height: '30px' }} /> Bitcoin (BTC)</td>
                    <td>$27,221.00</td>
                    <td style={{ color: '#7CD420' }}>0.19%</td>
                  </tr>
                  <tr>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src='https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png' style={{ width: '30px', height: '30px' }} /> Bitcoin (BTC)</td>
                    <td>$27,221.00</td>
                    <td style={{ color: '#7CD420' }}>0.19%</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default HomePage;