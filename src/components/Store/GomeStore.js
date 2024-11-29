

const initialState={
    isStart: false,
    ispause: false,
    isComplete: false,
    pencilMode: false,
    mistakes: false,
    totalmistakes: false,
    time:0,
    mode:"easy",
    board: Array.from({length:9},()=>Array(9).fill(0)),
    qBoard:Array.from({length:9},()=>Array(9).fill(0)),
    Selectedcell:{
        row:null,
        col:null,
        Square:null,
    }

}