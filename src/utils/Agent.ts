export class Agent {
  private strokeColor = "black";
  private lineWidth = 4;
  private fillColor = "white";

  constructor(private x: number, private y: number, private radius = 10) {}

  public setStrokeColor(color: string) {
    this.strokeColor = color;
  }

  public setLineWidth(width: number) {
    this.lineWidth = width;
  }

  public setFillColor(color: string) {
    this.fillColor = color;
  }

  public updatePosition(vector: { x: number; y: number }) {
    this.x = vector.x;
    this.y = vector.y;
  }

  public draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.fillColor;
    context.strokeStyle = this.strokeColor;
    context.lineWidth = this.lineWidth;
    context.save();
    context.translate(this.x, this.y);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.restore();
  }
}
