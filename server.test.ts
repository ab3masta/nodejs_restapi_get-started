import * as dotenv from "dotenv";
import app from "./app";
import { connect, connection } from "mongoose";
import supertest from "supertest";

describe("First Test", () => {
  it("First Jest Test", async () => {
    const value = true;
    const targetValue = true;
    expect(targetValue).toEqual(value);
  });
});
