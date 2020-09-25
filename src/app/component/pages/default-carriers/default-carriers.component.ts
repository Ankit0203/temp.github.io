import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-default-carriers',
  templateUrl: './default-carriers.component.html',
  styleUrls: ['./default-carriers.component.scss']
})


export class DefaultCarriersComponent implements OnInit {
search;
searchData;
select_all = false;
masterSelected:boolean = false;
checkedList:any;
//---------------------------------------------------NgModel------------------------------------------------
royal : false;
prosperity:false;
columbian : false;
fidelity : false;
mutual:false;
john : false;
AIG: false;
Forester:false;
occidental:false;
national : false;
greber:false;
united:false;
Trans: false;
Americo : false;
omaha : false;
American : false;
selectAll : false;
//-----------------------------------------------------------------------------------------------------
// data=[
// {name : "ROYAL NEIHBORS", isSelected : false},{name :"PROSPERITY LIFE GROUP", isSelected : false },
// {name :"COLUMBIAN FINANCIAL GROUP", isSelected : false },{name : "FIDELITY AND GUARANTY LIFE", isSelected : false},
// {name :"MUTUAL TRUST LIFE INSURANCE COMPANY", isSelected : false}, {name : "JOHN HANCOCK", isSelected : false},
// {name :"AIG", isSelected : false }, {name:"FORESTERS", isSelected : false},
// {name : "OCCIDENTAL", isSelected : false}, {name :"NATIONAL LIFE GROUP", isSelected : false},
// {name :"GREBER LIFE", isSelected : false}, {name :"UNITED HOME LIFE", isSelected : false},
// {name :"TRANSAMERICA", isSelected : false}, {name:"AMERICAN-AMICABLE", isSelected : false},
// {name :"AMERICO", isSelected : false},{name:"MUTUAL OF OMAHA", isSelected : false }
// ]
  
//------------------------------------------Select all checkboxes------------------------------------------
  // checkUncheckAll() {
  //   for (var i = 0; i < this.data.length; i++) {
  //     this.data[i].isSelected = this.masterSelected;
  //   }
  //   this.getCheckedItemList();
  // }
  // isAllSelected() {
  //   this.masterSelected = this.data.every(function(item:any) {
  //       return item.isSelected == true;
  //     })
  //   this.getCheckedItemList();
  // }
  // getCheckedItemList(){
  //   this.checkedList = [];
  //   for (var i = 0; i < this.data.length; i++) {
  //     if(this.data[i].isSelected)
  //     this.checkedList.push(this.data[i]);
      
  //   }}
    // this.checkedList = JSON.stringify(this.checkedList);
  
  //---------------------End of all Selected checkboxes------------------------------------------------

  //-------------------------Royal Neighbours---------------------------------------------
  rn=[{a:"Jet Term Life"}]
  //-------------------------------Greber Life---------------------------------
  gl=[{a:"Greber Guaranteed Issue"}]
  //-----------------Mutual Trust Life Insurance--------------------------------\
  mtli=[{a:"Horizon Value"}]
  //---------------------------------AIG----------------------------------------
  aig=[{a:"Guaranteed Issue Whole Life"}]
  //------------------------------------John Hancock--------------------------------------
  jh=[{a:"Simple Term with Vitality"}]
//----------------------------prosperity-life-group-----------------------------------------------
plg=[{a:"New Vista-Level"}, {b :"New Vista-Graded"}, {c:"New Vista-Modified"}]
//---------------------------------columbian financial group------------------------------------------
cfg=[{a:"Dignified Choice Classic Elite"},{b:"Dignified Choice Classic Select"}, {c:"Dignified Choice-Classic Advantage"}]
//--------------------------Foresters--------------------------------------------
foresters=[{a:"Smart UL"}, {b:"Strong Foundations"}, {c :"Plan Right"}]
//------------------------------------------Occidental------------------------------------------------
occident=[{a:"Home Protector / Easy Term"}, {b:"Clear Choice Immediate"},{c:"Clear Choice Graded"}]
//----------------------------------National Life Group-------------------------------------------
nlg=[{a:"NLG/LSW Term-Standard"}, {b:"NLG/LSW Term-Standard Express"}]
//-----------------------------------United Home Life-------------------------------------------
uhl=[{a:"Simple Term 20/30/ROP"}, {b:"Simple Term 20 Dlx"}, {c:"Express Issue - Premier"}, {d:"Express Issue - Deluxe"},
{e:"Express Issue Whole Life"}]
//--------------------------------------TransAmerica-----------------------------------
trans=[{a:"Trendsetter LB/Super"}, {b:"Immediate Solutions - preferred (45-85)"}, {c:"Immediate Solutions - preferred (0-44)"}]
//----------------------------------American Amicable---------------------------------------
american=[{a:"Home Protector"}, {b:"Easy Term"}, {c:"Clear Choice Immediate"}, {d:"Clear Choice - Graded"}]
//------------------------------------------Americo----------------------------------------------
americo=[{a:"HMS/CBO"}, {b:"HMS Plus Payment Protector"}, {c:"Eagle Premier"}]
//---------------------------------Mutual of Omaha--------------------------------------
mo=[{a:"Term Express"}, {b:"Living Promise"}, {c:"Children's Whole Life"}, {d:"GUL"}, {e:"Guaranted Advantage - Accidental Death Only"}]


ngOnInit(){
  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myList label").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


  $("#select_all").change(function(){  //"select all" change 
  $(".checkbox").prop('checked', $(this).prop("checked")); //change all ".checkbox" checked status
});

//".checkbox" change 
$('.checkbox').change(function(){ 
//uncheck "select all", if one of the listed checkbox item is unchecked
  if(false == $(this).prop("checked")){ //if this item is unchecked
      $("#select_all").prop('checked', false); //change "select all" checked status to false
  }
//check "select all" if all checkbox items are checked
if ($('.checkbox:checked').length == $('.checkbox').length ){
  $("#select_all").prop('checked', true);
}
});
    
}

}