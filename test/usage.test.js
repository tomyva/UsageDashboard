import test from 'node:test';import assert from 'node:assert/strict';import {aggregate,statusFor,datesFor} from '../mock-data.js';
test('aggregates usage records',()=>assert.deepEqual(aggregate([{input:2,output:3,total:5,cost:1},{input:4,output:1,total:5,cost:2}]),{input:6,output:4,total:10,cost:3,requests:2}));
test('usage statuses use correct thresholds',()=>{assert.equal(statusFor(59),'good');assert.equal(statusFor(60),'warning');assert.equal(statusFor(85),'critical')});
test('three-day range spans three calendar days',()=>{const {start,end}=datesFor('3',{});assert.equal(Math.round((end-start)/86400000),2)});
