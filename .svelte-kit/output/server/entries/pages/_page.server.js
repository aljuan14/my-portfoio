import { f as fetchMarkdownPosts } from "../../chunks/posts.js";
async function load({ request, platform }) {
  let country = null;
  let city = null;
  let region = null;
  if (platform?.cf) {
    country = platform.cf.country;
    city = platform.cf.city;
    region = platform.cf.region;
  }
  if (!country) {
    country = request.headers.get("cf-ipcountry");
  }
  const countryNames = {
    ID: "Indonesia",
    US: "United States",
    GB: "United Kingdom",
    JP: "Japan",
    SG: "Singapore",
    MY: "Malaysia",
    AU: "Australia",
    DE: "Germany",
    FR: "France",
    NL: "Netherlands",
    IN: "India",
    KR: "South Korea",
    CN: "China",
    TH: "Thailand",
    VN: "Vietnam",
    PH: "Philippines",
    CA: "Canada",
    BR: "Brazil",
    AE: "UAE",
    SA: "Saudi Arabia"
  };
  const countryName = country ? countryNames[country] || country : null;
  const posts = await fetchMarkdownPosts();
  return {
    geo: {
      country,
      countryName,
      city,
      region
    },
    posts
  };
}
export {
  load
};
