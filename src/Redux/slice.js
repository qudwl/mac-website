import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'data',
    initialState: {
        classes: [
            {
                subject: "CSE",
                cid: "374",
                section: "A",
                times: [
                    {
                        day: 2,
                        start: [13, 15],
                        end: [14, 35],
                    },
                    {
                        day: 4,
                        start: [13, 15],
                        end: [14, 35],
                    },
                ],
            },
            {
                subject: "ENG",
                cid: "462",
                section: "E",
                times: [
                    {
                        day: 0,
                        start: [10, 15],
                        end: [11, 25],
                    },
                    {
                        day: 2,
                        start: [10, 15],
                        end: [11, 25],
                    },
                ],
            },
            {
                subject: "MTH",
                cid: "251",
                section: "C",
                times: [
                    {
                        day: 1,
                        start: [13, 30],
                        end: [15, 0],
                    },
                    {
                        day: 3,
                        start: [13, 30],
                        end: [15, 0],
                    },
                ],
            }
        ]
    },
    reducers: {}
});

export default slice.reducer