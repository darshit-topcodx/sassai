import React, { useState } from 'react'
import './homepage.scss'
import temp from '../../dummyData'
import Slider from "react-slick";
import { Prepaid, MonthlyPLan, YearlyPLan } from '../../dummyData';
import Backimg from '../../images/abcpqr.svg'
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
  function reveal1() {
    var reveals1 = document.querySelectorAll(".accordion");

    for (var i = 0; i < reveals1.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals1[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals1[i].classList.add("active");
      } else {
        reveals1[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal1);

  function reveal2() {
    var reveals2 = document.querySelectorAll(".blog-box");

    for (var i = 0; i < reveals2.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals2[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals2[i].classList.add("active");
      } else {
        reveals2[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal2);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      ,
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  const [activePlans, setActivePlans] = useState('Monthly Plans')
  return (
    <>
      <div className='homepage'>
        <div className='header-sec' id='header-sec'>
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
                  <div className='box reveal'>
                    <p> Quisque ac iaculis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci tellus, hendrerit id congue sed, rhoncus eget nunc. Proin eu nibh vitae velit malesuada aliquam at ut turpis. </p>
                    <div classname="d-flex">
                      <div style={{ width: '80px', height: '80px' }}>
                        <img src='https://openaidavinci.textract.ai/img/reviews/S20Qrro3U2.jpg' style={{ width: '80px', height: '80px', border: "thick double white" }} />
                      </div>
                      <div className='d-flex flex-column'>
                        <p>Emily Blunt</p>
                        <p>IT Blogger</p>
                      </div>
                    </div>
                  </div>
                  <div className='box reveal'>
                    <p> Quisque ac iaculis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci tellus, hendrerit id congue sed, rhoncus eget nunc. Proin eu nibh vitae velit malesuada aliquam at ut turpis. </p>

                    <div classname="d-flex">
                      <div style={{ width: '80px', height: '80px' }}>
                        <img src='https://openaidavinci.textract.ai/img/reviews/S20Qrro3U2.jpg' style={{ width: '80px', height: '80px', border: "thick double white" }} />
                      </div>
                      <div className='d-flex flex-column'>
                        <p>Emily Blunt</p>
                        <p>IT Blogger</p>
                      </div>
                    </div>
                  </div>
                  <div className='box reveal'>
                    <p> Quisque ac iaculis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci tellus, hendrerit id congue sed, rhoncus eget nunc. Proin eu nibh vitae velit malesuada aliquam at ut turpis. </p>
                    <div classname="d-flex">
                      <div style={{ width: '80px', height: '80px' }}>
                        <img src='https://openaidavinci.textract.ai/img/reviews/S20Qrro3U2.jpg' style={{ width: '80px', height: '80px', border: "thick double white" }} />
                      </div>
                      <div className='d-flex flex-column'>
                        <p>Emily Blunt</p>
                        <p>IT Blogger</p>
                      </div>
                    </div>
                  </div>
                  <div className='box reveal'>
                    <p> Quisque ac iaculis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci tellus, hendrerit id congue sed, rhoncus eget nunc. Proin eu nibh vitae velit malesuada aliquam at ut turpis. </p>

                    <div classname="d-flex">
                      <div style={{ width: '80px', height: '80px' }}>
                        <img src='https://openaidavinci.textract.ai/img/reviews/S20Qrro3U2.jpg' style={{ width: '80px', height: '80px', border: "thick double white" }} />
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
                <p>Our <span style={{ color: 'rgb(254, 178, 0)' }}>Partners</span></p>
                <p>Be among the many that trust us</p>
              </div>
              <Slider {...settings2} className='mt-5'>
                <div style={{ textAlign: 'center' }} className='reveal'>
                  <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/client-2-copyright.png' style={{ width: '200px', height: '100px' }} />
                </div>
                <div className='reveal'>
                  <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/client-6-copyright.png' style={{ width: '200px', height: '100px' }} />
                </div >
                <div className='reveal'>
                  <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/client-5-copyright.png' style={{ width: '200px', height: '100px' }} />
                </div>
                <div className='reveal'>
                  <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/client-3-copyright.png' style={{ width: '200px', height: '100px' }} />
                </div>
                <div className='reveal'>
                  <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/client-4-copyright.png' style={{ width: '200px', height: '100px' }} />
                </div >
                <div className='reveal'>
                  <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/client-1-copyright.png' style={{ width: '200px', height: '100px' }} />
                </div>
              </Slider>

            </div>
          </div>
        </div>
        <div className='team-sec' id='team-sec'>
          <div className='container'>
            <div className='team-content'>
              <p>Various Subscription Plans</p>
              <p>Most competitive prices are guaranteed</p>
              <div className='select-sec'>
                <button onClick={() => { setActivePlans('Prepaid Plans') }} className={`${activePlans === 'Prepaid Plans' && 'active-button'}`}>Prepaid Plans</button>
                <button onClick={() => { setActivePlans('Monthly Plans') }} className={`${activePlans === 'Monthly Plans' && 'active-button'}`}>Monthly Plans</button>
                <button onClick={() => { setActivePlans('Yearly Plans') }} className={`${activePlans === 'Yearly Plans' && 'active-button'}`}>Yearly Plans</button>
              </div>
              <div className='plans'>
                {activePlans === 'Prepaid Plans' && Prepaid.map((val) => {
                  return <>
                    <div className='plans-card-1'>
                      <div className='d-flex justify-content-between'>
                        <h2>{val.size}</h2>
                        <h2><sup>$</sup>{val.price}<sup>usd</sup></h2>
                      </div>
                      <p>Words Included: <span style={{ color: 'rgb(254, 178, 0)' }}>{val.words}</span></p>
                      <p>Images Included: <span style={{ color: 'rgb(254, 178, 0)' }}>{val.images}</span></p>
                      <button>PURCHASE</button>
                    </div>
                  </>
                })}
                {activePlans === 'Monthly Plans' && MonthlyPLan.map((val) => {
                  return <>
                    <div className='plans-card-2'>
                      <h3>{val.title}</h3>
                      <h1>{val.price}</h1>
                      <p>USD / Month</p>
                      <button>Subscribe</button>
                      <ul>
                        {

                          val.list.map((val) => {
                            return <>
                              <div style={{ textAlign: 'start' }}>
                                <li>{val}</li>
                              </div>
                            </>
                          })}

                      </ul>
                    </div>
                  </>
                })}
                {activePlans === 'Yearly Plans' && YearlyPLan.map((val) => {
                  return <>
                    <div className='plans-card-3'>
                      <h3>{val.title}</h3>
                      <h1>{val.price}</h1>
                      <p>USD / Month</p>
                      <button>Subscribe</button>
                      <ul>
                        {

                          val?.list.map((val) => {
                            return <>
                              <div style={{ textAlign: 'start' }}>
                                <li>{val}</li>
                              </div>
                            </>
                          })}

                      </ul>
                    </div>
                  </>
                })}
              </div>
            </div>
          </div>
        </div>

        <div className='blog-sec' id='blog-sec'>
          <div className='container'>
            <p><span style={{ color: 'rgb(254, 178, 0)' }}>Latest</span> Blogs</p>
            <p>Read our unique blog articles about various data archiving solutions and secrets</p>
            <Slider {...settings} className='mt-5 pb-5'>
              <div className='blog-box'>
                <img src='https://openaidavinci.textract.ai/img/blogs/VM8npkhmA3.jpg' />
                <p>Crazy Robot | 13 February 2023</p>
                <h5>Natural Language Processors</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci te...</p>
              </div>
              <div className='blog-box'>
                <img src='https://openaidavinci.textract.ai/img/blogs/xgVz3KGyzf.jpg' />
                <p>Crazy Robot | 13 February 2023</p>
                <h5>Natural Language Processors</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci te...</p>
              </div>
              <div className='blog-box'>
                <img src='https://openaidavinci.textract.ai/img/blogs/VwMpV4zthi.jpg' />
                <p>Crazy Robot | 13 February 2023</p>
                <h5>Natural Language Processors</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci te...</p>
              </div>
              <div className='blog-box'>
                <img src='https://openaidavinci.textract.ai/img/blogs/VM8npkhmA3.jpg' />
                <p>Crazy Robot | 13 February 2023</p>
                <h5>Natural Language Processors</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci te...</p>
              </div>
            </Slider>
          </div>
        </div>
        <div className='articles' id='articles'>
          <div className='container'>
            <div className='articles-sec'>
              <p>Frequently Asked Questions</p>
              <p>Got questions? We have you covered.</p>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      What Davinci uses behind?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Davinci is fully powered by OpenAI GPT3 and DALLE services.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">

                      Do  I have to pay for OpenAI services?

                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Yes you do. Upon exceeding their free 18$, you will be charged based on your usage at the end of each month.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">

                      Which OpenAI models Davinci uses?

                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Davinci uses all 4 OpenAI models including DALLE for generating images. </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      Will there be new templates added?
                    </button>
                  </h2>
                  <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Yes, we have plans to add more than 100+ templates with future updates. </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      What kind of payment gateways does Davinci supports?
                    </button>
                  </h2>
                  <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Davinci supports 8 different payment gateways, 6 can be used for both Prepaid and Subscription plans. Refer to the description to get the exact list. </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingSix">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                      Should we be afraid of AI?
                    </button>
                  </h2>
                  <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Don't know, I suggest you to reach out to Elon Must. That "alien" for sure knows something. </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='contact-sec' id='contact-sec'>
          <p><span style={{ color: 'rgb(254, 178, 0)' }}>Contact</span> With Us</p>
          <p>Reach out to us for additional information</p>
          <div className='container'>
            <div className='contact-content'>
              <img src='https://rb-campus-clutch-c9-stg.herokuapp.com/img/loop-scroll-content/map-base.svg' className='back-img' />
              <div className='img-svg'>
                <img src={Backimg} />
              </div>
              <div className='contact-field'>
                <div>
                  <input placeholder='First Name' />
                  <input placeholder='Last Name' />
                  <input placeholder='Email Address' />
                  <input placeholder='Phone Number' />
                </div>
                <textarea placeholder='Message' />
                <button>Send Message</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HomePage;