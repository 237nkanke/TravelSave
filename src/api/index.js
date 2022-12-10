import axios from "axios";
import React from 'react'

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '64303098dbmshc9677fc3ee3712fp1e345ajsn9c3270d60838',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

const getPlasceData = async (type,sw,ne) => {
 try {
   
    const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            // bl_latitude: '11.847676',
            // tr_latitude: '12.838442',
            // bl_longitude: '109.095887',
            // tr_longitude: '109.149359',
          },
          headers: {
            'X-RapidAPI-Key': '64303098dbmshc9677fc3ee3712fp1e345ajsn9c3270d60838',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
    });

return data
 } catch (error) {
    console.log(error)
 }
}

export default getPlasceData

