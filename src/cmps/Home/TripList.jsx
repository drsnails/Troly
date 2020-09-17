import React from 'react'
import { TripPreview } from './TripPreview'

export function TripList({ trips }) {



    const imgs = [
        'https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?ixlib=rb-1.2.1', //clear water with sup
        'https://images.unsplash.com/photo-1550399504-8953e1a6ac87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //reading book at the beach
        'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //sunglass on sand
        'https://images.unsplash.com/photo-1543306983-a562d8739781?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb',  //palm tree
        'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //norway
        'https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1', //norway
        'https://images.unsplash.com/photo-1475066392170-59d55d96fe51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //norway
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1', //manhaten
        'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //norway
        'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //thailnad
        'https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //maldivas
        'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //thailand
        'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //thailand
        'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //thailand
        'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //india
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0',  //italy/capri
        'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //itlay/venice
        'https://images.unsplash.com/photo-1517792844039-e52afb564132?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //italy
        'https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //italy',
        'https://images.unsplash.com/photo-1535063406830-27dfae54262a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //italy
        'https://images.unsplash.com/photo-1554357475-accb8a88a330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //jordan
        'https://images.unsplash.com/photo-1559628233-100c798642d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //indonesia
        'https://images.unsplash.com/photo-1527095655060-4026c4af2b25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //switzerland
        'https://images.unsplash.com/photo-1583702993462-43615c05ceee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //switzerland
        'https://images.unsplash.com/photo-1505662695181-d4b60363d2a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //singapore
        'https://images.unsplash.com/photo-1455459182396-ae46100617cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //?
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //dubai
        'https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //dubai
        'https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2NjY2NH0', //dubai

        




    ]

    function getRandomPic(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return (
        <div className="trip-list trips-container">
         
            {trips.map((trip, idx) =>
                <TripPreview key={trip._id} trip={trip} img={imgs[getRandomPic(0, imgs.length - 1)]} />
            )}
           

        </div>
    )
}
