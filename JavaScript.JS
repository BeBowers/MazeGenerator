//Constructor for a point object
// used to store 2-Dimensional array of points
var pts = [];
// variable to set the size of the grid
var gridSize = 60;
initialize();
function initialize(){
    //create the points
    for(var i = 0; i<gridSize;i++){
        var row = [];
        for(var j = 0; j<gridSize;j++){
            row.push(new Point(i,j));
            row[j].draw();
            if(i>0){
                pts[i-1][j].neighbors.push(row[j]);
                row[j].neighbors.push(pts[i-1][j]);
            }
            if(j>0){
                row[j-1].neighbors.push(row[j]);
                row[j].neighbors.push(row[j-1]);
} }
        pts.push(row);
    }
}
function Point(x,y){
    this.drawX = (x+1)*10;
    this.drawY = (y+1)*10;
    this.visited = false;
    this.neighbors = [];
    this.paths = [];
    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(this.drawX-2,this.drawY-2,4,4);
        ctx.closePath();
};
    this.getUnvisited = function(){
        // clear any visited neighbors from the array
        for(var i = this.neighbors.length-1;i>=0;i--){
            if(this.neighbors[i].visited){
                this.neighbors.splice(i,1);
} }
        // select a random unvisited neighbor if there are any
        if(this.neighbors.length>0){
            var idx = Math.floor(Math.random()*this.neighbors.length);
            return this.neighbors[idx];
        }else{
            return false;
        }
}; }
