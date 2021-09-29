import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createAircraft= async (aircraft) => {
    const {data} = await $authHost.post('api/aircraft', aircraft)
    return data
}

export const fetchAircrafts = async () => {
    const {data} = await $host.get('api/aircraft', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, aircraftId, page, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, aircraftId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}
