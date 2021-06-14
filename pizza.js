// Variables

let facingPosition = "north";
let xAxis = 0;
let yAxis = 0;
let northOrSouth;
let westOrEast;

// Functions

const determineFacingPositionAddBlocks = (position, direction, blocks) => {
  switch (true) {
    case position === "north" && direction === "L":
      facingPosition = "west";
      xAxis -= blocks;
      break;
    case position === "north" && direction === "R":
      facingPosition = "east";
      xAxis += blocks;
      break;
    case position === "east" && direction === "L":
      facingPosition = "north";
      yAxis += blocks;
      break;
    case position === "east" && direction === "R":
      facingPosition = "south";
      yAxis -= blocks;
      break;
    case position === "south" && direction === "L":
      facingPosition = "east";
      xAxis += blocks;
      break;
    case position === "south" && direction === "R":
      facingPosition = "west";
      xAxis -= blocks;
      break;
    case position === "west" && direction === "L":
      facingPosition = "south";
      yAxis -= blocks;
      break;
    case position === "west" && direction === "R":
      facingPosition = "north";
      yAxis += blocks;
      break;
    default:
      console.log("sign is invalid");
  }
};

const determineBlocksPerSign = (sign) => {
  const nextDirection = sign.substr(1, 1);
  const amountBlocks = parseInt(sign.substr(2));
  determineFacingPositionAddBlocks(facingPosition, nextDirection, amountBlocks);
};

const determineCompasValues = () => {
  if (xAxis > 0) {
    westOrEast = "east";
  } else if (xAxis < 0) {
    westOrEast = "west";
  } else {
    westOrEast = "neither";
  }

  if (yAxis > 0) {
    northOrSouth = "north";
  } else if (yAxis < 0) {
    northOrSouth = "south";
  } else {
    northOrSouth = "neither";
  }
};

const determineAmountOfBlocks = (signs) => {
  signs.forEach(determineBlocksPerSign);
  determineCompasValues();

  const xFinalValue = Math.abs(xAxis);
  const yFinalValue = Math.abs(yAxis);
  const totalBlocks = xFinalValue + yFinalValue;
  const resultMessage = `Hi. Here are the details of your journey. West or east: ${xFinalValue} blocks to ${westOrEast}. North or south: ${yFinalValue} blocks to ${northOrSouth}. You're distance to the location is ${totalBlocks} blocks in total.`;
  return resultMessage;
};

// Pizza case

const data =
  " R2, L3, R2, R4, L2, L1, R2, R4, R1, L4, L5, R5, R5, R2, R2, R1, L2, L3, L2, L1, R3, L5, R187, R1, R4, L1, R5, L3, L4, R50, L4, R2, R70, L3, L2, R4, R3, R194, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L5, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R2, L3, R3, R2, R5, R2, R5, L3, R2, L5, R1, R2, R2, L4, L5, L1, L4, R4, R3, R1, R2, L1, L2, R4, R5, L2, R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L1, L3, L2, L4, L4, R2, L3, L3, R2, L4, L3, R4, R3, L2, L1, L4, R4, R2, L4, L4, L5, L1, R2, L5, L2, L3, R2, L2";

const signsOfTestCase = data.split(",");

console.log(determineAmountOfBlocks(signsOfTestCase));
