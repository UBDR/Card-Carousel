import Card from "./Card"
import Carousel, { CarouselItem } from './Carousel'


function CarouselSection(props) {
    const cards = props.cardProps;

    const renderCards = () => {
        const cardsUi = [];

        for (let i = 0; i < cards.length; i++) {
            cardsUi.push(
                <CarouselItem >
                    <Card 
                        name={cards[i].card_name}
                        number={cards[i].card_last_four}
                        expiry={cards[i].expiry}
                        color={cards[i].color}
                        spend={cards[i].spend_limit}
                    />
                </CarouselItem>

            )
        }
        return cardsUi;
    }
    return (
        <div className='card-section'>
            <div className=' CarouselSection'>
                <Carousel> 
                   

                    {cards && cards.length > 0 &&
                        renderCards()}
                  
                </Carousel>
            </div>
        </div>
    )
}

export default CarouselSection
