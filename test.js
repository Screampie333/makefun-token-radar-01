
import { getLatestLaunches } from './radar.js';
const res = await getLatestLaunches();
console.assert(res.liquidity > 1000, "Failed test");
console.log("Test Passed");
