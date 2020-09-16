import axios from 'axios'
const BASE_URL = 'http://localhost:3001/trip'

const resolveData = res => res.data

export const tripService = {
    query,
    getById,
    remove,
    save
}

async function query(filterBy = {}) {
    var queryParams = new URLSearchParams()
    if (filterBy.vendor) queryParams.set('q', filterBy.vendor)
    const res = await axios.get(`${BASE_URL}?${queryParams}`)
    return res.data
}

async function getById(tripId) {
    const res = await axios.get(`${BASE_URL}/${tripId}`)
    return res.data
}

async function remove(tripId) {
    return axios.delete(`${BASE_URL}/${tripId}`)
}

async function save(trip) {
    var res;
    if (trip._id) {
        res = await axios.put(`${BASE_URL}/${trip._id}`, trip)
    } else {
        res = await axios.post(BASE_URL, trip).then(resolveData)
    }
    return res.data
}


// function query(filterBy) {
//     // const queryParams
//     // return httpService.get('trip', filterBy)

//     const queryStr = `?search=${filterBy.search}&minPrice=${filterBy.minPrice}&maxPrice=${filterBy.maxPrice}&type=${filterBy.type}&inStock=${filterBy.inStock}
//     `;
//     return httpService.get(`trip${queryStr}`);

// }


// function getById(tripId) {
//     return httpService.get(`trip/${tripId}`)

// }

// function remove(tripId) {
//     return httpService.delete(`trip/${tripId}`)

// }

// function save(trip) {
//     if (trip._id) {
//         return httpService.put(`trip/${trip._id}`, trip)

//     } else {
//         return httpService.post('trip', trip)

//     }
// }