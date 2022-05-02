let town, forest, mine, ruin, port;

town = {
    gameMap: [    
    2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 
    2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 
    2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 
    2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 
    2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 
    2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 
    2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
     
],
    objects: [
    0, 4, 7, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 0, 11, 0, 0, 1, 0, 8, 
    17, 0, 0, 19, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 3, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 8, 5, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 4, 0, 0, 9, 
    0, 2, 0, 0, 0, 0, 0, 0, 17, 0, 8, 0, 0, 0, 0, 0, 0, 3, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 8, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 
    0, 9, 2, 0, 0, 0, 0, 0, 1, 7, 2, 10, 0, 8, 9, 4, 7, 0, 1, 0,
    
    ],
    npcName: "girl",
    npcPos: 34, 
    playerStartPos: 70, 

    nextRoom: ["forest", "ruin", "mine", "port"], // i rækkefølgen venstre, op, højre, ned
    

}


forest = {
    gameMap: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 
        2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 
        1, 1, 1, 2, 2, 3, 3, 3, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 
        1, 1, 1, 1, 3, 5, 5, 5, 3, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 
        1, 1, 1, 1, 3, 5, 5, 5, 5, 3, 1, 1, 1, 2, 2, 1, 2, 1, 2, 2, 
        1, 1, 1, 1, 1, 3, 5, 5, 5, 3, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 
        2, 2, 1, 1, 1, 2, 3, 3, 3, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 
         
], objects: [
    0, 7, 10, 7, 8, 9, 0, 11, 0, 0, 0, 0, 0, 0, 11, 0, 0, 11, 0, 10, 
    9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 11, 0, 10, 0, 13, 0, 
    0, 5, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 9, 
    0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 11, 9, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 
    0, 9, 11, 0, 0, 0, 0, 0, 13, 11, 11, 0, 0, 0, 0, 0, 18, 0, 11, 0,
    
    ],
    npcName: "lumberJack",
    npcPos: 85, 
    playerStartPos: 25, 
    
    
    nextRoom: ["forest", "forest", "town", "forest"],
}

ruin = {
    gameMap: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 
        1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 
        1, 1, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 
        2, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 
        1, 1, 1, 2, 2, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 2, 1, 
        1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 
        1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 
        1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 2, 1, 1, 
        2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 
        
], 
objects:[
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 26, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
],
    npcPos: 24, 
    npcName: "oldMan",
    playerStartPos: 75, 
    
    nextRoom: ["ruin", "ruin", "ruin", "town"],
}
mine = {
    gameMap: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 
        1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 
        1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 
        2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 
        1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 3, 1, 3, 3, 3, 3, 3, 3, 
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3,
        1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 3, 3, 3, 
        1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 
        2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 3, 3, 3, 
        
], objects: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 
    17, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 22, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0,
    
    ], 
    npcName: "woman",
    npcPos: 35, 
    playerStartPos: 45, 
    
    nextRoom: ["town", "mine", "mine", "mine"],
}
port = {
    gameMap: [
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        10, 10, 10, 10, 10, 10, 10, 10, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        6, 6, 6, 6, 6, 6, 6, 6, 8, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
], objects: [
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 
    0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    
    ], 
    npcName: "steamDude",
    npcPos: 35, 
    playerStartPos: 25, 
    
    nextRoom: ["port", "town", "port", "port"],
}



