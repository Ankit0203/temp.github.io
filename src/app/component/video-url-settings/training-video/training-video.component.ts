import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-training-video',
  templateUrl: './training-video.component.html',
  styleUrls: ['./training-video.component.css']
})
export class TrainingVideoComponent implements OnInit {
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
  
  constructor() { }

  ngOnInit(): void {
    $(function(){
      $('.checkAll').click(function(){
         if (this.checked) {
            $(".checkbox").prop("checked", true);
         } else {
            $(".checkbox").prop("checked", false);
         }	
      });
    
      $(".checkbox").click(function(){
         var numberOfCheckboxes = $(".checkbox").length;
         var numberOfCheckboxesChecked = $('.checkbox:checked').length;
         if(numberOfCheckboxes == numberOfCheckboxesChecked) {
            $(".checkAll").prop("checked", true);
         } else {
            $(".checkAll").prop("checked", false);
         }
      });
   });
  }

}
