"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultShyftState = {
    __shyft_state_version: '1.1.0',
    power_source: 'unknown',
    // this is kinda weird bc doesn't really need to be an array;
    // it could be a single object like last_power_source_change
    // last_power_source_change: null,
    power_source_changes: [],
    grid_available: false,
    gen_available: false,
    manual_mode: false,
    online: true,
    low_battery: false,
    last_offline_reason: null,
    last_online_reason: null,
    automatic_mode: null,
    budget_percents: {},
    updated_at: null,
    last_heard_at: null,
    device_battery_level: -1,
    meter_calibration: {},
};
