import axios from "axios";

// 종목 조회
const market = {
  method: "GET",
  url: "https://api.upbit.com/v1/market/all",
  params: { isDetails: "true" },
  headers: { accept: "application/json" },
};

function fetchUpbit() {
  return axios.request(market);
}

// // 시세 캔들 조회
// const miCandles = {
//   method: "GET",
//   url: "https://api.upbit.com/v1/candles/minutes/1",
//   params: { market: "KRW-BTC", count: "1" },
//   headers: { accept: "application/json" },
// };

// function fetchCandles() {
//   return axios.request(miCandles);
// }

// 현재가 정보
const ticker = {
  method: "GET",
  url: "https://api.upbit.com/v1/ticker",
  headers: { accept: "application/json" },
};

function fetchTickers(markets) {
  console.log("marketname = ", markets);
  return axios.get(`${ticker.url}?markets= + ${market}`);
}

export { fetchUpbit, fetchTickers };
