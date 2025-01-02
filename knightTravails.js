import { filterInvalidMoves } from "./helper.js";
import { printPath } from "./helper.js";

function validMoves(source) {
  let x = source[0],
    y = source[1];

  let moves = [
    [x - 2, y - 1],
    [x - 2, y + 1],
    [x - 1, y - 2],
    [x - 1, y + 2],
    [x + 2, y - 1],
    [x + 2, y + 1],
    [x + 1, y - 2],
    [x + 1, y + 2],
  ];

  moves = filterInvalidMoves(moves);

  return moves;
}

export function knightMoves(start, target) {
  let queue = [[start, [start], 0]]; // Initialize the queue with the start position and the path
  let visited = new Set();

  while (queue.length > 0) {
    let [current, path, totalMoves] = queue.shift();

    // If we reach the target, return the path
    if (current[0] === target[0] && current[1] === target[1]) {
      printPath(path, totalMoves);
      return;
    }

    // Mark current position as visited
    // Set can't store arrays, so we convert the array to a string
    // Eg: [0, 0] => "0,0"
    visited.add(current.toString());

    // Get valid moves and add unvisited positions to the queue
    for (let nextMove of validMoves(current)) {
      if (!visited.has(nextMove.toString())) {
        queue.push([nextMove, [...path, nextMove], totalMoves + 1]);
      }
    }
  }

  console.log(
    "No path found! Please check the start and destination positions."
  );
}
