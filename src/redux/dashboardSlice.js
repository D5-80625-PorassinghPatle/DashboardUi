import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: { total: 123456, upcoming: 50, ongoing: 100, completed: 50 },
  trips: { total: 123456, upcoming: 50, ongoing: 100, completed: 50 },
  revenue: { total: 123456, upcoming: 50, ongoing: 100, completed: 50 },
  expenses: { total: 123456, freightCharge: 50, driverCharge: 100, otherCharges: 50 },
  income: 100000,
  expense: 50000,
  activities: [
    { id: 1, name: "Gurpreet Singh", activity: "Dispatch team created Load No. I-AAA-1325" },
    { id: 2, name: "Aman (Driver)", activity: "Picked Up goods at Location_Name for Load No. I-AAA-1325" }
  ],
  scheduledActivities: [
    { id: 1, name: "Aman (Driver)", activity: "Load No. I-AAA-1325 will be delivered" }
  ],
  highPriorityAlerts: [
    { id: 1, title: "Driver Raised Concern", description: "Lorem ipsum dolor sit amet...", date: "13 Feb 24" },
    { id: 2, title: "Reefer Temp. out of range", description: "Lorem ipsum dolor sit amet...", date: "13 Feb 24" }
  ]
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {}
});

export const selectDashboard = state => state.dashboard;
export default dashboardSlice.reducer;
