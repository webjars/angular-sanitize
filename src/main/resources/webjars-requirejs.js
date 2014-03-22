requirejs.config({
    paths: { "angular-sanitize": webjars.path("angular-sanitize", "angular-sanitize") },
    shim: { "angular-sanitize": [ "angular" ] }
});
