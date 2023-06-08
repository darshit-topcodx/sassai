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
          <div className='container'>
            <div className='about-content'>
              <div className='about-img'>
                <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/img-1-rtv-copyright.jpg' className='about-img-1' />
                <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/img-2-rtv-copyright.jpg' className='about-img-2' />
              </div>
              <div className='about-txt'>
                <p>WHAT WE DO</p>
                <h1>We develop & create digital future</h1>
                <p>We appreciate your trust greatly. Our clients choose us and our products because they know we are the best.</p>
                <button>About us</button>
              </div>
            </div>
          </div>
        </div>
        <div className='bonus-sec'>
          <div className='container' style={{ height: '100%' }}>
            <div className='bonus-content'>
              <h1>
                Presale Bonuses: 50%
              </h1>
              <p>If you are looking to invest in cryptocurrency, we are ready to support and provide a discount for presales!</p>
              <div className='bonus-box'>
                <div className='box'>
                  <div className='bonus-pracentage'>
                    <h1>35%</h1>
                  </div>
                  <p>1 day only. Invest now and get
                    1500 QWR for one ETH</p>
                  <p>1 ETH = 1500 QWR</p>
                </div>
                <div className='box'>
                  <div className='bonus-pracentage' style={{ borderBottom: '15px solid rgb(254, 178, 0)', paddingBottom: '15.5px' }}>
                    <h1>15%</h1>
                  </div>
                  <p>1 week. At this stage you can get 1200 QWR for one ETH</p>
                  <p>1 ETH = 1200 QWR</p>
                </div>
                <div className='box'>
                  <div className='bonus-pracentage' style={{ borderBottom: '10px solid rgb(254, 178, 0)', paddingBottom: '14.5px' }}>
                    <h1>5%</h1>
                  </div>
                  <p>2 weeks.Get 1000 QWR for one ETH</p>
                  <p>1 ETH = 1000 QWR</p>
                </div>
                <div className='box'>
                  <div className='bonus-pracentage' style={{ borderBottom: '5px solid rgb(254, 178, 0)', paddingBottom: '13.5px' }}>
                    <h1>Release Date</h1>
                  </div>
                  <p>Release Date
                    Get 800 QWR for one ETH</p>
                  <p>1 ETH = 800 QWR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='features-sec'>
          <div className='container' style={{ height: '100%' }}>
            <div className='features-contant'>
              <p>DIGITAL WORLD</p>
              <h1>Our Super Features</h1>
              <p>Our clients' experience is the main priority for us. Learn more about the premium digital features.</p>
              <div className='features-box'>
                <div className='box reveal fade-bottom'>
                  <AccountBalanceWalletIcon style={{ width: '80px', height: '80px', color: '#F3335C' }} />
                  <h2>Endless Possibilities </h2>
                  <p>From now on, you can use our platform to enhance your cryptoprosperity.</p>
                  <ArrowRightAltIcon style={{ color: 'white' }} />
                </div>
                <div className='box'>
                  <CurrencyBitcoinIcon style={{ width: '80px', height: '80px', color: '#F3335C' }} />
                  <h2>Endless Possibilities </h2>
                  <p>From now on, you can use our platform to enhance your cryptoprosperity.</p>
                  <ArrowRightAltIcon style={{ color: 'white' }} />
                </div>
                <div className='box'>
                  <RequestPageIcon style={{ width: '80px', height: '80px', color: '#F3335C' }} />
                  <h2>Endless Possibilities </h2>
                  <p>From now on, you can use our platform to enhance your cryptoprosperity.</p>
                  <ArrowRightAltIcon style={{ color: 'white' }} />
                </div>
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