import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Reminder: you can fetch the forecast data at https://birdsofaweather.netlify.app/api/weather/forecast
        const fetchResponse = await fetch("https://birdsofaweather.netlify.app/api/weather/now")
        if (fetchResponse.ok) {
            const responseJson = await fetchResponse.json()
            res.status(200).json(responseJson)
        } else {
            res.status(200).json({ items: [] })
        }
    } else {
        res.status(400).json({ error: "This API only supports GET requests" })
    }
}