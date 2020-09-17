import axios from 'axios'
import { utils } from './utils'
const BASE_URL = 'http://localhost:3001/trip'

const resolveData = res => res.data

export const tripService = {
    query,
    getById,
    remove,
    save
}


const user = {
    _id: 'u101',
    fullName: 'Orly Amdadi',
    userName: 'orly@amdadi.com',
    password: 'tinkerbell',
    imgUrl: 'http://some-img',
}


const trips = [
    {
        _id: '438577i4h48fu049f',
        members: [{
            _id: 'u101',
            fullName: 'Orly Amdadi',
            imgUrl: 'http://jbdcsdcj'
        }],
        createdBy: 'u101',
        imgUrl: 'http//vkjbfcd.jpg',
        destinations: [
            {
                id: 'ksndv8',
                name: 'Taipei',
                startDate: 1600236000000,
                endDate: 1600466400000
            }],

        activities: [
            
           

            {
                id: 'KHKHHL776',
                destination: 'Taipei',
                at: 1600232400000,
                duration: 2,
                name: 'beach',
                notes: ['towel', 'sun screen', 'water', 'beer'],
                location: { lat: 3224.234234, lng: 43534 },
                imgUrl: 'http//scac.vodvm.sda',
                price: { amount: 20, currency: '$' },
                labels: ['relax']
            },
            {
                id: 'KHKHHL72277',
                destination: 'Taipei',
                at: 1600246800000,
                duration: 5,
                name: 'beach',
                notes: ['towel', 'sun screen', 'water', 'beer'],
                location: { lat: 3224.234234, lng: 43534 },
                imgUrl: 'http//scac.vodvm.sda',
                price: { amount: 20, currency: '$' },
                labels: ['relax']
            },
            {
                id: 'KHKHHL778',
                destination: 'Taipei',
                at: 1600257600000,
                duration: 5,
                name: 'beach',
                notes: ['towel', 'sun screen', 'water', 'beer'],
                location: { lat: 3224.234234, lng: 43534 },
                imgUrl: 'http//scac.vodvm.sda',
                price: { amount: 20, currency: '$' },
                labels: ['relax']
            },
            {
                id: 'KHKHHL779',
                destination: 'Taipei',
                at: 1600326000000,
                duration: 2,
                name: 'beach',
                notes: ['towel', 'sun screen', 'water', 'beer'],
                location: { lat: 3224.234234, lng: 43534 },
                imgUrl: 'http//scac.vodvm.sda',
                price: { amount: 20, currency: '$' },
                labels: ['relax']
            },
            {
                id: 'KHKHHL780',
                destination: 'Taipei',
                at: 1600329600000,
                duration: 9,
                name: 'beach',
                notes: ['towel', 'sun screen', 'water', 'beer'],
                location: { lat: 3224.234234, lng: 43534 },
                imgUrl: 'http//scac.vodvm.sda',
                price: { amount: 20, currency: '$' },
                labels: ['relax']
            },
            {
                id: 'KHKHHL781',
                destination: 'Taipei',
                at: 1600358400000,
                duration: 6,
                name: 'beach',
                notes: ['towel', 'sun screen', 'water', 'beer'],
                location: { lat: 3224.234234, lng: 43534 },
                imgUrl: 'http//scac.vodvm.sda',
                price: { amount: 20, currency: '$' },
                labels: ['relax']
            },
            {
                id: 'KHKHHL7761',
                destination: 'Taipei',
                at: 1600407000000,
                duration: 1,
                name: 'beach',
                notes: ['towel', 'sun screen', 'water', 'beer'],
                location: { lat: 3224.234234, lng: 43534 },
                imgUrl: 'http//scac.vodvm.sda',
                price: { amount: 20, currency: '$' },
                labels: ['relax']
            },
            {
                id: 'KHKHHL7762',
                destination: 'Taipei',
                at: 1600425000000,
                duration: 2,
                name: 'beach',
                notes: ['towel', 'sun screen', 'water', 'beer'],
                location: { lat: 3224.234234, lng: 43534 },
                imgUrl: 'http//scac.vodvm.sda',
                price: { amount: 20, currency: '$' },
                labels: ['relax']
            },
            {
                id: 'KHKHHL7763',
                destination: 'Taipei',
                at: 1600426800000,
                duration: 5,
                name: 'beach',
                notes: ['towel', 'sun screen', 'water', 'beer'],
                location: { lat: 3224.234234, lng: 43534 },
                imgUrl: 'http//scac.vodvm.sda',
                price: { amount: 20, currency: '$' },
                labels: ['relax']
            },
            {
                id: 'KHKHHL7764',
                destination: 'Taipei',
                at: 1600434000000,
                duration: 5,
                name: 'beach',
                notes: ['towel', 'sun screen', 'water', 'beer'],
                location: { lat: 3224.234234, lng: 43534 },
                imgUrl: 'http//scac.vodvm.sda',
                price: { amount: 20, currency: '$' },
                labels: ['relax']
            },
            // {
            //     id: 'KHKHHL7765',
            //     destination: 'Taipei',
            //     at: 1600444800000,
            //     duration: 5,
            //     name: 'beach',
            //     notes: ['towel', 'sun screen', 'water', 'beer'],
            //     location: { lat: 3224.234234, lng: 43534 },
            //     imgUrl: 'http//scac.vodvm.sda',
            //     price: { amount: 20, currency: '$' },
            //     labels: ['relax']
            // },
        ]
    },
    {
        _id: '98307667jkedbfj',
        members: [{
            _id: 'u101',
            fullName: 'Orly Amdadi',
            imgUrl: 'http://jbdcsdcj'
        }],
        createdBy: 'jbkjg876iug865gl',
        imgUrl: 'http//vkjbfcd.jpg',
        destinations: [{
            id: 'ksndv8',
            name: 'Taipei',
            startDate: 43635868,
            endDate: 735938669
        }],

        activities: [{
            id: 'KHKHHL776',
            destination: 'Taipei',
            at: 875848759,
            duration: 2,
            name: 'beach',
            notes: ['towel', 'sun screen', 'water', 'beer'],
            location: { lat: 3224.234234, lng: 43534 },
            imgUrl: 'http//scac.vodvm.sda',
            price: { amount: 20, currency: '$' },
            labels: ['relax']
        }]
    },

    {
        _id: '986975845knldkvs',
        members: [{
            _id: 'u101',
            fullName: 'Orly Amdadi',
            imgUrl: 'http://jbdcsdcj'
        }],
        createdBy: 'jbkjg876iug865gl',
        imgUrl: 'http//vkjbfcd.jpg',
        destinations: [{
            id: 'ksndv8',
            name: 'Taipei',
            startDate: 43635868,
            endDate: 735938669
        }],

        activities: [{
            id: 'KHKHHL776',
            destination: 'Taipei',
            at: 875848759,
            duration: 2,
            name: 'beach',
            notes: ['towel', 'sun screen', 'water', 'beer'],
            location: { lat: 3224.234234, lng: 43534 },
            imgUrl: 'http//scac.vodvm.sda',
            price: { amount: 20, currency: '$' },
            labels: ['relax']
        }]
    }]





function query(filterBy) {
    // const queryParams
    // return httpService.get('trip', filterBy)

    // const queryStr = `?search=${filterBy.search}&minPrice=${filterBy.minPrice}&maxPrice=${filterBy.maxPrice}&type=${filterBy.type}&inStock=${filterBy.inStock}
    // `;
    // return httpService.get(`trip${queryStr}`);
    return Promise.resolve(trips)
}


function getById(tripId) {
    return Promise.resolve(trips.find(trip => trip._id === tripId))
    // return httpService.get(`trip/${tripId}`)

}

function remove(tripId) {
    const tripIdx = trips.findIndex(trip => trip._id === tripId)
    return Promise.resolve(trips.splice(tripIdx, 1))
    // return httpService.delete(`trip/${tripId}`)
}

function save(trip) {
    if (trip._id) {
        const tripIdx = trips.findIndex(trip => trip === trip)
        trips[tripIdx] = trip
        // return httpService.put(`trip/${trip._id}`, trip)

    } else {
        trip._id = utils.makeId()
        trips.push(trip)
        // return httpService.post('trip', trip)
    }
}