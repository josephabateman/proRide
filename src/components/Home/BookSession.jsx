import React from 'react';

function BookSession() {
    return (
        <div id="book-session" className="flex-split home-tiles">
            <h2>Reserve On To A Club Session</h2>
            <form action="/action_page.php">
                <label for="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" value="John" /><br />
                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
                <label for="cars">Choose a car:</label>
                    <select id="cars" name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                    </select>
                    <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default BookSession;