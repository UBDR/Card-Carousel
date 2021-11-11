import { useState } from 'react';
import './test.css'
import TopSection from './TopSection';
import LeftSection from './LeftSection';
import CarouselSection from './CarouselSection';

function MainComponent() {
  const cards = [
    {
      "card_name": "Superhuman",
      "card_last_four": "**** **** **** 5139",
      "expiry": "03/2026",
      "color": "#bd4b4b",
      "spend_limit": 200000
      
    },
    {
      "card_name": "Reddy Kerfun Wang",
      "card_last_four": "**** **** **** 0990",
      "expiry": "03/2024",
      "color": "#c4ae23",
      "spend_limit": 200000
    },
    {
      "card_name": "FB Ads",
      "card_last_four": "**** **** **** 7766",
      "expiry": "03/2026",
      "color": "#ffc764",
      "spend_limit": 200000
      
    }
  ]
  const [cardState, setCardState] = useState(cards)
  return (
    <div className='main-container'>
      <TopSection />
      <div className='mid-container'>
        <div style={{ display: 'flex', flex: 0.3 }}>

          <LeftSection setCardProps={setCardState}  />
        </div>
        <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap', overflow: 'hidden' }}>

          <CarouselSection cardProps={cardState} />
        </div>
      </div>

    </div>
  );
}

export default MainComponent
