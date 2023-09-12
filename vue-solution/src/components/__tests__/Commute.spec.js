import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Commute from '../Commute.vue'

describe('Commute', () => {
  it('renders properly', () => {
    const maria = {
      fields: {
        "firstname": "Maria",
        "lastname": "Husmann",
        "photo": {
          "fields": {
            "title": "Portrait Maria",
            "file": {
              "url": "//images.ctfassets.net/80c03r0wfd8q/1IuPD1p43KYZfudCx8FWe6/ad54e946d85137857557872017dd629a/IMG_2032.jpg",
              "details": {
                "size": 3491188,
                "image": {
                  "width": 4032,
                  "height": 3024
                }
              },
              "fileName": "IMG_2032.jpg",
              "contentType": "image/jpeg"
            }
          }
        }
      }
    }
    const baar =  {
      "fields": {
        "name": "Baar",
        "photo": {
          "fields": {
            "title": "Baar",
            "file": {
              "url": "//images.ctfassets.net/80c03r0wfd8q/5FDfy2aTBICqoZMg7DG6KD/01f98ff65d4750fac19c224f90eecbbe/IMG_20190912_180045.jpg",
              "details": {
                "size": 4181128,
                "image": {
                  "width": 4048,
                  "height": 3036
                }
              },
              "fileName": "IMG_20190912_180045.jpg",
              "contentType": "image/jpeg"
            }
          }
        },
        "location": {
          "lat": 47.19537,
          "lon": 8.526087
        }
      }
    }
  
    const emmenbruecke = { "fields": {
      "name": "Emmenbrücke",
      "photo": {
        "fields": {
          "title": "Viscosi",
          "file": {
            "url": "//images.ctfassets.net/80c03r0wfd8q/69uxA9rHVr4Ii4Qpd8SiBV/4e4ba2bb6b0bcce52c65bf493a48f7f2/grafik.png",
            "details": {
              "size": 153822,
              "image": {
                "width": 386,
                "height": 168
              }
            },
            "fileName": "grafik.png",
            "contentType": "image/png"
          }
        }
      },
      "location": {
        "lon": 8.275637,
        "lat": 47.07723
      }
    }
}
    const wrapper = mount(Commute, { props: { person: maria, start: baar, destination: emmenbruecke } })
    expect(wrapper.text()).toContain('Maria')
    expect(wrapper.text()).toContain('Husmann')
    expect(wrapper.text()).toContain('Emmenbrücke')
    expect(wrapper.text()).toContain('Baar')
  })
})
