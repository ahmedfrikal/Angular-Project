import { Directive, ElementRef,HostListener,Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {
  //ElementRef faire un ereference au element de dom 
  //Renderer2 faire applee un un style de class 
  constructor(private el:ElementRef,private render:Renderer2) { 
    this.setHeight(100);
    this.setColor('#f5f5f5');
    this.setBackgroudColor();
    
  }
  //Permet de definir le valeur d'entrer pour transmete le message ;
  @Input('pkmBorderCard') borderColor!: string;

  //Cette Annotation permet de lier une methode a un event
  //Au moment de clique
  @HostListener('mouseenter') onMouseEnter(){
    //Si utilisateur n'est par precisier la coleur ;
    this.setHeight(100);
    this.setColor(this.borderColor|| '#009688');
  }
  //Au moment de sortie
   @HostListener('mouseleave') onMouseLeave(){
    this.setColor('#f5f5f5');
  }
   
  setHeight(height:number){
    //Elemetn native sur laquel ma directive appler 
    this.el.nativeElement.style.height=`${height}%`;
  }
  setColor(color:string){
    this.el.nativeElement.style.border=`solid 4px ${color}`;
  }
  //Ajouter un Style 
  setBackgroudColor(){
    this.render.addClass(this.el.nativeElement,'Ahmed');
  }
}
