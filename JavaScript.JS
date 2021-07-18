//Constructor for a point object
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
