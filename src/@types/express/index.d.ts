import express from 'express';

declare module 'express' {
  export interface Request {
    userID: string;
  }
}
