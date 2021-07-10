"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = { "serve": { "port": 5000 }, "sources": [{ "name": "UserService", "handler": { "graphql": { "endpoint": "http://127.0.0.1:3002/graphql" } } }, { "name": "CourseService", "handler": { "graphql": { "endpoint": "http://127.0.0.1:3000/graphql" } } }] };
//# sourceMappingURL=config.js.map