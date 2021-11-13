import * as contentful from 'contentful'
import { createClient } from 'contentful-management'

export const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

