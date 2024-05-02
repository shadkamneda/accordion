

function accordion(id) {
const display= document.getElementById(id).style.display;
document.getElementById(id).style.display =  display  == 'none' ? 'block' : 'none';

}

class AccordionItem{
    constructor(header, content){
        this.header = header;
        this.content = content;
    }
}

let accordionItems = [

    {header:'2',content:'2'},
    new AccordionItem('3','3'),
    new AccordionItem('4','4'),


]



let array = ['ffhfh.jpg','gjgj'];


accordionItems.forEach((x,index) => {
    document.getElementById("accordion").innerHTML +=
    `<div class="accordion-item">
    <div class="accordion-header" onclick="accordion('accordion-content-${index}')">${x.header}</div>
    <div class="accordin-content" id="accordion-content-${index}">${x.content}</div>
  </div>    `

})