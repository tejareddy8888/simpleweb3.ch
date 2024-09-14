export default defineNuxtPlugin((nuxtApp) => {
    // access token from env 
    const { githubToken, testVar } = useRuntimeConfig();

    console.log(testVar);  // access testVar from nuxt.config.js

    console.log(!!githubToken ? 'token is found' : 'token is undefined');

    nuxtApp.hook('apollo:auth', ({ client, token }) => {
        // `client` can be used to differentiate logic on a per client basis.

        // apply apollo client token
        token.value = githubToken
    })
})
