
// AdventureSquare contains the text for the square and the array of choices

type GameNode = {
  text: string;
  choices: string[];
};

// AdventureGrid is the collection of all the AdventureSquares and the
// adjacencyList that keeps track of the connections between the squares (nodes)
// AdventureGrid is basically a Graph.

type GameGrid = {
  numSquares: number;
  adjacencyList : number[];
  nodes: GameNode[]
};

export function createGrid(numSquares: number) : GameGrid {
  const nodes: GameNode[] = [];
  for(let i = 0; i < numSquares; i++) {
    nodes.push(createNode("", []));
  }

  return {
    numSquares,
    adjacencyList: [],
    nodes: nodes
  };
}

export function createNode(adventureText: string, choices: string[]) : GameNode {
  return { text: adventureText, choices};
}

// setNode() 
// nodeNum is the index of the node to set
// node is the actual node to set at that index
export function setNode(nodeNum: number, grid: GameGrid, node: GameNode): GameGrid {
  if(nodeNum < 0 || nodeNum > grid.numSquares) {
    throw new Error("Tried to set a square that doesn't exist");
  }

  // TODO: actually set the square.
  
  return grid;
}

export function getNode(nodeNum: number, grid: GameGrid) : GameNode {
  return grid.nodes[nodeNum];
}

export function connectNodes(grid: GameGrid, nodeA: number, nodeB: number): GameGrid {
  // TODO: add the squares to the adjacency list
  return grid;
}

export function disconnectNodes(grid: GameGrid, nodeA: number, nodeB: number): GameGrid {
  // TODO: remove the squares from the adjacency list
  return grid;
}