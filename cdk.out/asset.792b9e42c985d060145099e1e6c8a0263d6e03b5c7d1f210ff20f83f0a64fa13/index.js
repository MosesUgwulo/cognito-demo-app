"use strict";

// lambda/public.ts
exports.handler = async function(event) {
  return {
    statusCode: 200,
    body: "Unauthenticated access allowed"
  };
};
