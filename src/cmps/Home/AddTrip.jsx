import React, { Component } from 'react'

export class AddTrip extends Component {


    state = {
        currTrip: ''

    }
    render() {
        return (
            <div className="flex add-destination-form-wraper">
                <form className="flex column add-destination-form" action="">
                    <div className="flex column">
                        <label htmlFor="add-dest-input">Add Destination:</label>
                        <input type="text"
                            placeholder="Enter City Name"
                            id="add-dest-input"
                            required
                        />
                    </div>
                    <div className="flex">
                        <div className="flex column">
                            <label htmlFor="startdate-dest-input">Start At</label>
                            <input type="date"
                                required
                                id="startdate-dest-input"
                            />
                        </div>
                        <div className="flex column">
                            <label htmlFor="enddate-dest-input">End At</label>
                            <input type="date"
                                required
                                id="enddate-dest-input"
                            />
                        </div>
                    </div>
                </form>
                <div className="add-dest-img-wraper">
                    <img src="https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?ixlib=rb-1.2.1" alt="" />
                </div>
            </div>
        )
    }
}
