import React from 'react'
import KeyFigure from './KeyFigure'

const HeroInvest = () => {
  return (
    <div className='HeroInvest'>
      <div className='background-container'>
        <h1>Trade,not aid</h1>
        <p>Southern innovations addressing<br/> global problems</p>
      </div>
      <div className='How-we-see-it'>
        <div className='vission-container'>
        <h2>How we see it differently</h2>
        <p>The global South is rapidly catching up with the "developed" world. It's <br/> time for you to get to know the rapid development, innovation and drive <br/> going on in this part of the world (East-Africa, South Asia and beyond).


</p>
</div>
<img src='https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png' alt='nairobi'/>


      </div>

      <div className="key-figures-container">
        <div className='key-figure'>
        <KeyFigure title="Approx. number of Kenyan talents reaching the age of 18 in 2022" value="1.3M" />
        </div>

          <div className='key-figure'>
        <KeyFigure title="Number of East-Africans (EAC) reaching the age of 18 in 2022" value="5M" />
        </div>
        <div className='key-figure'>
        <KeyFigure title="Democratic Republic of Congo joins the East African Community in 2022" value="2022" />
        </div>
        <div className='key-figure'>
        <KeyFigure title="The number of unfilled IT vacancies in the US and EU markets" value="1.5M" />
        </div>
        <div className='key-figure'>
        <KeyFigure title="Number of technical vacancies by 2030" value="10M" />
        </div>
        <div className='key-figure'>
        <KeyFigure title="Africa holds the world's largest workforce by 2050" value="2050" />
        </div>
        <div className='key-figure'>
        <KeyFigure title="Startup funding raised by African startups in 2022" value="$4.6M" />
        </div>
        <div className='key-figure'>
        <KeyFigure title="Increase in startup funding for companies with HQ in Kenya" value="310%" />
          </div>
      </div>

      <div className='Stakeholder'>
        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png' alt='stakeholder' />


        <div className='stakeholder-container'>
        <h3>Elewa NV, a multi-<br/>stakeholder ,<br/>cooperation</h3>
        <p>At the heart of Elewa lies the structure Elewa NV. <br/>Based in Brussels, Belgium, Elewa NV is a private<br/> holding company which controls the assets of all <br/>Elewa activities.<br/>

Elewa NV is owned and controlled by Elewa's <br/>founder, a small community of investors which <br/>share in the vision of Elewa and Elewa employees<br/> based throughout the activities of the group.</p>
</div>
      </div>

      <div className='creative-hub'>
        <div className='creative-container'>
        <h2>The Elewa Creative<br/> Hub</h2>
        <p>Coming soon; The Elewa Creative Hub Lies at the <br/>heart of our organization. A two-acre property at<br/> the center of Nairobi's creative district, the hub <br/>connects all Elewa's Activities under a single <br/>banner.

Through partnerships with creative community, <br/>the Elewa Hub will organize vibrant activites that<br/> bring talents from different fields (tech, business,<br/> art, fashion) together to nurture continuous <br/>innovation.</p>
</div>
<img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg' alt='creative'/>

      </div>

      <div className='investing-elewa'>
        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg' alt='investing'/>
        <div className='invest-container'>
        <h2>Investing in Elewa NV</h2>
        <p>From time to time, we offer investment <br/>opportunities (private equity & debt) to out <br/>community of investors. Interested to take part <br/>when this opportunity arrives?</p>
        </div>


        <button>Join the waiting list</button>



      </div>



      <div className='closure'>
        <h2>Become part of our mission.<br/> <span>And start investing</span></h2>

      </div>


    </div>
  )
}

export default HeroInvest