import axios from "axios"

const BASE_URL = 'https://maps.googleapis.com/maps/api/place'
const API_KEY = "AIzaSyBPJ1jwGwlcdM067zYXwd4AgzzAC_2mM8Y"


const nearByPlace = (lat,lng) => axios.get(BASE_URL +
    "/nearbysearch/json?" +
    "&location="+lat+","+lng+"&radius=1500&type=restaurant" +
    "&key=" + API_KEY)

export default {
    nearByPlace
}