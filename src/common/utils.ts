import { Point } from "pixi.js";

export const getDOMElement = (selector: string): Element | null => {
  return document.querySelector(selector);
};

export const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const calculatePolygonArea = (points: Point[]): number => {
  const pointsNum = points.length;
  let i = 0;
  let squarePX = points[pointsNum - 1].x * points[0].y - points[pointsNum - 1].y * points[0].x;
  while (i < pointsNum - 1) {
    squarePX += points[i].x * points[i + 1].y - points[i].y * points[i + 1].x;
    i++;
  }
  return (squarePX /= 2);
};
