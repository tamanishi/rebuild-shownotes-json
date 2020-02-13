const episodes = {"errorMessage":"2020-02-13T11:04:41.950Z 97d90e41-873d-415f-85f6-5105da5ebe27 Task timed out after 3.00 seconds"}

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
