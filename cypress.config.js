const {defineConfig } = require('cypress');
module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732',
        specPattern: './cypress/tests/**/*.ts',
    }
})