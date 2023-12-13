import React from 'react';
import '../../General.css';
import Filter from '../Filter/Filter';

function HomePage() {

    return (
        <div>
            <div class="event">
                    <Filter event={true} > </Filter>

                <div class="event__info">
                    <h2 class="event__title">Event title</h2>
                    <p class="event__description">Event description</p>
                    <p class="event__date">Event date</p>
                    <p class="event__location">Event location</p>
                </div>
            </div>

            <div class="race">
                <Filter race={true}> </Filter>
                <div class="race__info">
                    <h2 class="race__title">Race title</h2>
                    <p class="race__description">Race description</p>
                    <p class="race__date">Race date</p>
                    <p class="race__location">Race location</p>
                </div>
    </div>
        </div>);
}

export default HomePage;