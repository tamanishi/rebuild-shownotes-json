const episodes = {"errorMessage":"2020-04-04T06:00:06.549Z 7af4a50e-d53e-4773-9b44-9c4409b57552 Task timed out after 3.00 seconds"}

/**
 * rawJsonResponse delievers a response with a Json Object inputted directly
 * into the worker script
 * @param {Object} json
 */
async function rawJsonResponse(json) {
  const init = {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  }

  return new Response(JSON.stringify(json), init)
}

addEventListener('fetch', event => {
  return event.respondWith(rawJsonResponse(episodes))
})
