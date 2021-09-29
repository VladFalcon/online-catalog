import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            // {id: 1, name: 'Fuselage'},
            // {id: 2, name: 'Aircraft flight control system'},
            // {id: 3, name: 'Aircraft Engine'},
            // {id: 4, name: 'Fuel System'},
            // {id: 5, name: 'Landing gear'},
            // {id: 6, name: 'Power supply system'},
            // {id: 7, name: 'Electric switchboard'},
            // {id: 8, name: 'Flight instruments'}
            ]
        this._aircrafts = [
            // {id: 1, name: 'Plane'},
            // {id: 2, name: 'UAV'},
            // {id: 3, name: 'Helicopter'}
        ]
        this._devices = [
            // {id: 1, name: 'An-130 fuselage', price: 300000, rating: 5, img: 'https://24minus.ru/800/600/https/pbs.twimg.com/media/Dtt12xbW4AAVGJi.jpg', inform: 'HI'},
            // {id: 2, name: 'An-12 fuselage2', price: 300000, rating: 5, img: 'https://24minus.ru/800/600/https/pbs.twimg.com/media/Dtt12xbW4AAVGJi.jpg', inform: 'HI'},
            // {id: 3, name: 'An-120 fuselage3', price: 300000, rating: 5, img: 'https://24minus.ru/800/600/https/pbs.twimg.com/media/Dtt12xbW4AAVGJi.jpg', inform: 'HI'},
            // {id: 4, name: 'Cy-14 fuselage4', price: 300000, rating: 5, img: 'https://24minus.ru/800/600/https/pbs.twimg.com/media/Dtt12xbW4AAVGJi.jpg', inform: 'HI'},
            // {id: 5, name: 'Cy-14 fuselage4', price: 300000, rating: 5, img: 'https://24minus.ru/800/600/https/pbs.twimg.com/media/Dtt12xbW4AAVGJi.jpg'},
            // {id: 6, name: 'Cy-14 fuselage4', price: 300000, rating: 5, img: 'https://24minus.ru/800/600/https/pbs.twimg.com/media/Dtt12xbW4AAVGJi.jpg'},
            // {id: 7, name: 'Cy-14 fuselage4', price: 300000, rating: 5, img: 'https://24minus.ru/800/600/https/pbs.twimg.com/media/Dtt12xbW4AAVGJi.jpg'},
            // {id: 8, name: 'Cy-14 fuselage4', price: 300000, rating: 5, img: 'https://24minus.ru/800/600/https/pbs.twimg.com/media/Dtt12xbW4AAVGJi.jpg'},
            // {id: 9, name: 'Cy-14 fuselage4', price: 300000, rating: 5, img: 'https://24minus.ru/800/600/https/pbs.twimg.com/media/Dtt12xbW4AAVGJi.jpg'},
            // {id: 10, name: 'Cy-14 fuselage4', price: 300000, rating: 5, img: 'https://24minus.ru/800/600/https/pbs.twimg.com/media/Dtt12xbW4AAVGJi.jpg'},


        ]
        this._selectedType = {}
        this._selectedAircraft = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 12
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setAircrafts(aircrafts) {
        this._aircrafts = aircrafts
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedAircraft(aircraft) {
        this.setPage(1)
        this._selectedAircraft = aircraft
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get aircrafts() {
        return this._aircrafts
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedAircraft() {
        return this._selectedAircraft
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
