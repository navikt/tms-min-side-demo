import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";


export const handlers = [
    http.get(

        'https://person.nav.no/mine-saker-api/siste',
        ({ request, params, cookies }) => {
          return HttpResponse.json({
            "sakstemaer": [
              {
                "navn": "Blabla",
                "kode": "SER",
                "sistEndret": "2023-05-25T12:41:02Z",
                "detaljvisningUrl": "https://www.intern.dev.nav.no/mine-saker/tema/SER"
              },
              {
                "navn": "Blablabla",
                "kode": "AAP",
                "sistEndret": "2023-04-20T11:33:51Z",
                "detaljvisningUrl": "https://aap-innsyn.dev.nav.no/aap/mine-aap"
              }
            ]
          }
          )
        }
      ),
]

export const server = setupServer(...handlers);