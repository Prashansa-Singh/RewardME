/**
 * server code
 *
 * run: npm run devStart
 * to run the code in server.js
 *
 * */

const express = require("express");
const cors = require("./cors");
const app = express();

const cardNames = [
  {
    id: 1,
    name: "Funky Cone",
    img: "https://lh3.googleusercontent.com/fife/AAWUweVKtJQawZJjUQHHl5cOkC39kLmy9sus6raYE_h942Il7QCHl3geOUxr1tsa64hvu0u_tdYagRrR0PXdF2qraRqG1VeMqia_nflEUwYz-f9Z6RTu_9KGLkzG2y4mpmdKBBFpY2qaU0HUHozhUbOy6yqFtTjeMCCms6soa1hyIaccKYTdZFhWL4kcODyTD_fxAa2N1gdBi3m1jIjEuzTiqr4TKO8oQTedyi6O88pgD_kfVPyoWpKBxT2l-i-Jf3zAlaK_oZ4Wx7Tyb746LqcbCOlyoilYPqFgc4yBDl8ElDgLnr0R5TzpZ6_WaE8FzVz1YFn_VrY25HvZ5C20vs8g3qOSR0p5kXSmfasx_VAtWxRRWykYe4uUiav4W5YMOnCuYGEtD28wFpLRhEN3FpmTEWkrUL0JL5WrIlOcNLe3E3wjwz-a4SMJeqGcRI6w11Q_a9nxXDtGLPkaPsrwC3Jc4jfaUaCksFHS5eaEdjBw_FGZGB-dN3BXQ4b-nOW1Smj6JuN0QKqxXHdE27enc30hO3gJF5Lo2oxa1OYDGiop6ERmbAd-QVCLp7F5902tNaju83VQgGhCZjmN1v4ifY6ls1toHCuoc6csTrquxYDV0o1aYx0zUqWEF3a3wvRiJokCAHJNoR9c1W5GFR_hPnWRQJLzgYVvVXZ2wvHzaRI5wUYC9cagjwEv8DIWzDCE3Zl7AnOGMwe4EapYIQrf2fe82GF_L92Pr7zuPuo=w1133-h1356",
  },
  {
    id: 2,
    name: "Ed's Authentic tea",
    img: "https://lh3.googleusercontent.com/fife/AAWUweVJGuYiThFdljEo1nN9wrH2xjxzVgYzmbqBsvAiaaSzXJBX7n9oMi15N9Wfvgd38IydDSQyc-NbDPlgEDQ7yL1E6-g16v8dlchwqOp4h3_ckG8qxjx_DN1LHrGw19aVRXoB02GQMc2K5e4bMSTKMFVY411ythVBKCgmJKo13vqHhNvUdQcSDcBrKmBy7HqS4tGiP_47EW4GDjml4uNZgVPrF0hM69BuumM_vdGHnMsWJmxGO4GEkuBZsraKLipFdiLXO5QxPhx57mIHQ8dihGzeHu4x2ABG6UA_OyJf71AaJRk9PH4l5beP6wOCVIRrFju29uuRp28gLPHI6Vyfr0quX9eSiNwPlh4ZwmSRxBQn-Kss75Gd9rYJDKYB4fhQ5kFL1TsIDH4whrxiDWTHlcWWf3zQJ4CvuRC6A6LkLN1WMwk5g080v82a_Myqsu7WAsHVQ9zt5hOJI4Gw81YYzZA9Wj2w8syyPU_S9lQcqYB_cv7auNGfnyEyYTyogUncL3E2ZpF_gFYwsfnTIZc4T24-fF89IH-kQwP2J9GffxMXrGp0UTA5Vuy41Mbq3ZKs-1TgIP---Yvpm39uwb-B8LoVOAvj2IrraZwMw815KKc1GlgQAsc7NdiaRyMGwDEhk7i-i6Vic1BFHc0NBTElaG8YqLwQOuCB6Ey_s3GKgw72EgA4FNThluWofble9YSG662JPzf1HsGwu0TM9qaPLuN1EDzTueSV2Ds=w1133-h974",
  },
  {
    id: 3,
    name: "Castro's Burgers",
    img: "https://lh3.googleusercontent.com/fife/AAWUweVVIp0TjgfyD-QGo0B0ajsMP3t6E8olCgJgVNUv1BqwswWWHyIh8rcasq5yAZXM4VhSMLqmVxSI3VnXuQ5xFEyhXxLyc7h63rkvRsihXgFX4XvUIbuGnro3AVmQWtNfTnqTtcCciCa9k73VVwwhwXq0LvGDDwGy6vz5zOnYT6FVsXMQUie_pg8RMDoDzpMhCpVGIhUzdQvhqCKCogMVZxscbRZGY68syF0rO_DDjnYgYmY9DWmFtmYyQNTrY-uGX2o1LPGqj6lEmp4KvbWMTqnBmRdm9Q09Qj9Ltv9X_rszMMbxtzL1FppMq1y8pwuu4-zcGANQKJ3IvBx73P9frKq0Up-B6_TlAnRe-iM7FnE0Cc5I2KDylqHwekiwhrVuGWzM4dlo4gMo8hoL_Id1wagpwRE0_ZP2z4fbIkWfRjDualRz3jb4b0UNiskQxdSTHicJyW8fsLSdxp7Rud2HiwscWbrx_QI-i02bZrquobu1Wy1kQu-KETDLvHM5LCFbhlmn_JTnZRY7ezr-NEOATQXwROxfXw03VpKywAFiauSc0V9ejsSSyTrJBxtsZ-_3pSyVBgenO9loO69TVuytpEZ9HK78S8ed-FdShoz372K8bORbVpbkslcruXrhnVm4S3uwzjievK92D6VycbJDeqyHtj_adDFB3WxWN92XISfe0y4WrRsVP45hb27xPrsC_uoKD21K4NhN-tvve2bwB9_SLcaRBzgeqBc=w1133-h974",
  },
];

app.options("*", cors);
app.use(cors);

console.log("server starts");

app.listen(8080, () => {
  console.log("app lunched");
});

app.get("/", (request, response) => {
  response.json(cardNames);
});
