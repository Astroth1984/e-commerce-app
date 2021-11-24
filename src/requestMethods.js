import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTgzOWJhMWU1NmI0MmIzM2Q4NTU4OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzc2Nzk1MSwiZXhwIjoxNjM4MDI3MTUxfQ.nViZtjNBziwQwF1hdpgYL19LMsnUVNQ-HzS41yACDMc";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});