"use strict";

// lambda/protected.ts
exports.handler = async function(event) {
  return {
    statusCode: 200,
    body: "You received a super secret!!"
  };
};
