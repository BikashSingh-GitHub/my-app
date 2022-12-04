import React from 'react';
import './App.css';


function App() {
  return (
   <div> 
    <div className="background1">
      <div className="heading1">Find The Perfect Real Estate Agent</div>
      <div className="text1">Make your search and sale easier and faster by connecting with one of our<br></br> expert local agent in your neighborhood
   
Search Agents</div>
      <input className="searchbar"></input>
      <button className="searchagents">Search Agents</button>
 </div>
    <div>
    <div className="heading2">Toronto’s Top Rated Agents </div>
    <div className='caption1'>Clients loved working with these Agents</div> 
   <div className='rowposters'></div>
    <div className='box1'>
    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1520x800.jpg" className='starrating'></img><p className='starrating1'>5.0</p>
    <p className='agentname'> Tim Hortons </p> 
      <img src="https://c.saavncdn.com/artists/Future_500x500.jpg" className='imagecircle'></img>
      <p className='agentsummary'> Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the<b>...More</b> </p>
      <button className="contactagents">Contact Agents</button>
    </div>
    <div className='box2'>
    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1520x800.jpg" className='starrating'></img><p className='starrating1'>5.0</p>
    <p className='agentname'> Joan Wrigley </p>
      <img src="https://c.saavncdn.com/695/Taylor-Swift-2009-500x500.jpg" className='imagecircle'></img>
      <p className='agentsummary'> Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the<b>...More</b></p>
      <button className="contactagents">Contact Agents</button>
    </div>
    <div className='box3'>
    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1520x800.jpg" className='starrating'></img><p className='starrating1'>5.0</p>
    <p className='agentname'> Lydia Hollie</p>
      <img src="https://c.saavncdn.com/artists/Lady_Gaga_004_20200616110414_500x500.jpg" className='imagecircle'></img>
      <p className='agentsummary'> Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the<b>...More</b> </p>
      <button className="contactagents">Contact Agents</button>
     </div>
    <div className='box4'>
    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1520x800.jpg" className='starrating'></img><p className='starrating1'>5.0</p>
    <p className='agentname'> Dave Lordsky </p>
      <img src="https://c.saavncdn.com/817/Drake-feat-King-EF-English-2022-20220706024956-500x500.jpg" className='imagecircle'></img>
      <p className='agentsummary'> Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the<b>...More</b></p>
      <button className="contactagents">Contact Agents</button>
    </div>
    
</div>

<div>
  <img src="data:image/png;base64,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" className='left-image'></img>
</div>
<div className='align1'>
<div className='texted1'>CHOOSING YOUR AGENT





</div>
<div className='text2'>How to choose your agent
</div>
<div className='text3'>You should choose an agent you are comfortable working with and who you feel has your best interests at heart. In order to make a decision, try asking prospective agents the following:
</div>
<div className='texted4'><ul>
  <li>
How and where your property will be advertised  </li><br></br>
<li> Ask to see examples of their success in selling properties like yours</li><br></br>
<li>How often you can expect feedback from the agent while your<br></br> property is on the market</li><br></br></ul>
<button className='findagent'> Find an Agent</button></div></div>
<div className='alignnewed'>
    <div className="heading2">Toronto’s Most Active Agents </div>
   <div className='rowposters'></div>
    <div className='box1'>
    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1520x800.jpg" className='starrating'></img><p className='starrating1'>5.0</p>
    <p className='agentname'> Tim Hortons </p> 
      <img src="https://c.saavncdn.com/artists/Nelly_500x500.jpg" className='imagecircle'></img>
      <p className='agentsummary'> Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the<b>...More</b> </p>
      <button className="contactagents">Contact Agents</button>
    </div>
    <div className='box2'>
    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1520x800.jpg" className='starrating'></img><p className='starrating1'>5.0</p>
    <p className='agentname'> Joan Wrigley </p>
      <img src="https://c.saavncdn.com/artists/Shreya_Ghoshal_002_20200822043816_500x500.jpg" className='imagecircle'></img>
      <p className='agentsummary'> Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the<b>...More</b></p>
      <button className="contactagents">Contact Agents</button>
    </div>
    <div className='box3'>
    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1520x800.jpg" className='starrating'></img><p className='starrating1'>5.0</p>
    <p className='agentname'> Lydia Hollie</p>
      <img src="https://c.saavncdn.com/artists/Neha_Kakkar_006_20200822042626_500x500.jpg" className='imagecircle'></img>
      <p className='agentsummary'> Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the<b>...More</b> </p>
      <button className="contactagents">Contact Agents</button>
     </div>
    <div className='box4'>
    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1520x800.jpg" className='starrating'></img><p className='starrating1'>5.0</p>
    <p className='agentname'> Dave Lordsky </p>
      <img src="https://c.saavncdn.com/artists/Ap_Dhillon_000_20210302100145_500x500.jpg" className='imagecircle'></img>
      <p className='agentsummary'> Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the<b>...More</b></p>
      <button className="contactagents">Contact Agents</button>
    </div>
</div>
</div>
  );
}

export default App;
