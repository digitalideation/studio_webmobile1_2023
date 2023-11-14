import { describe, it, expect } from 'vitest'

import contentful from '../contentful.js'

describe('contentful commutes', async () => {
    const commutes = await contentful.getCommutes()
    it('gets least one commute', async () => {
        expect(commutes.length).toBeGreaterThan(0)
        
    })
    it('commutes have correct structure', async () => {
        commutes.forEach(commute => {
           console.log(commute.fields.start)
           expect(commute).toHaveProperty('fields.person.fields.firstname')
           expect(commute).toHaveProperty('fields.person.fields.lastname')
           expect(commute).toHaveProperty('fields.person.fields.photo')
           expect(commute).toHaveProperty('fields.start.fields.name')
           expect(commute).toHaveProperty('fields.start.fields.location')
           expect(commute).toHaveProperty('fields.start.fields.photo')
           expect(commute).toHaveProperty('fields.destination.fields.name') 
           expect(commute).toHaveProperty('fields.destination.fields.location')
           expect(commute).toHaveProperty('fields.destination.fields.photo.fields.file.url') 
           expect(commute).toHaveProperty('fields.title')
        })
    })

})