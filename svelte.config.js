import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({fallback: 'index.html'}),
        trailingSlash: 'always',

        prerender: {
            // This can be false if you're using a fallback (i.e. SPA mode)
            default: false
        },
    }
};

export default config;
