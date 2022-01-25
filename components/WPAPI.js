import { method } from "lodash";

const BASE_URL = "https://jualuc1.dreamhosters.com/wp-json";
export const endpoint = {
  posts: "/wp/v2/posts",
  users: "/wp/v2/users",
  media: "/wp/v2/media",
  comments: "/wp/v2/comments",
  categories: "/wp/v2/categories",
  search: "/wp/v2/search",
  blockTypes: "/wp/v2/blockTypes",
  blocks: "/wp/v2/blocks",
  pages: "/wp/v2/pages",
  members: "/buddypress/v1/members",
  groups: "/buddypress/v1/xprofile/groups",
  activity: "/buddypress/v1/activity",
  notifications: "/buddypress/v1/notifications",
  messages: "/buddypress/v1/messages",
};
const buildOptions = (method, data, token) => {
  const bearer = { Authorization: `Bearer ${token}` };
  const body = JSON.stringify(data);
  let object = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  object.headers = token ? { ...bearer, ...object.headers } : object.headers;
  object.body = data ? body : null;
  return object;
};

export const WP_GET = (type, queryStringVars = "", token) => {
  if (!endpoint[type] && typeof type !== "string") {
    console.warn(
      "WP_GET(type, queryStringVars): type is required as a string. Select from these types: ",
      Object.keys(endpoint)
    );
  }
  if (typeof queryStringVars !== "string") {
    console.warn(
      `WP_GET(type, queryStringVars): queryStringVars value must be a string that starts with '/' or '?'. This string will be appended to the end of the URL.`
    );
  }
  return fetch(
    `${BASE_URL}${endpoint[type]}${queryStringVars}`,
    buildOptions("GET", null, token)
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const WP_POST = (type, queryStringVars = "",data, token) => {
    if (!endpoint[type] && typeof type !== "string") {
      console.warn(
        "WP_POST(type, queryStringVars): type is required as a string. Select from these types: ",
        Object.keys(endpoint)
      );
    }
    if (typeof queryStringVars !== "string") {
      console.warn(
        `WP_POST(type, queryStringVars): queryStringVars value must be a string that starts with '/' or '?'. This string will be appended to the end of the URL.`
      );
    }
    return fetch(
      `${BASE_URL}${endpoint[type]}${queryStringVars}`,
      buildOptions("POST", data, token)
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
  };