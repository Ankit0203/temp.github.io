import { Component, OnInit } from '@angular/core';

import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'mt-wizard-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})

export class WorkComponent implements OnInit {
    title = 'What do you do?';
    workType: string='';
    form: any;
    disabled = false;

 //------------------Ng-If Starts-------------------------------------
 cancer = [ "0-1 years", "1-2 years", "2-3 years", "3-4 years", "4-5 years", "5-7 years", "7-10 years", "10+ years", "reoccurrence"];
 // -------------------------------------Diabetes Start---------------------------------------
 diagnosed = [ "prior to age 18 years", "age 18-35 years", "age 35-40 years", "age 40-50 years", "after age 50 years"];
 insulin =["Prior to age 40 years", "Between ages 40-50 years", "After age 50 years", "No"]
 complication = ["0-3 years", "3+ years"]
 gout=["Gout", "Peripheral vascular disease", "Retinopathy (Eye disease)", "Protein in Urine", "Neuropathu", "Smoking"]
 //-------------------------------Digestive Start-----------------------------------------------------
 crohn=["Prior to age 20 or within past 12 months", "1-2 years ago", "2-3 years ago", "3-5 yrs ago", "5+ years ago"]
 diverticulities =["Accute with full recovery", "Sevier or not fully recovered"]
 gastric =["0-1 year", "1-2 years", "2+ year ago with no complications"]
 ulcer=["Prior to age 20 or within past 12 months", "1-3 years ago", "3+ years ago"]
 surgery=["Within the past year", "1+ year without complications", "History of complications such as Dumping Syndrome"]
 //-------------------------------------Disabled under age 65 starts-------------------------------------------
 reason =["Maternity, fractures, spinal or back disorders or hip or knee replacements", "other"]
 income =["social security disability / work disability", "military disability"]
 //---------------------------------Imune and Neurological start---------------------------------------
 aids=["AIDS"]
 medication=["Within the past 3 years","3+ years ago"]
 severe=["Mild-moderate", "Severe"]
 cystic=["Cystic Fibrosis"]
 seizures=["Petit Mal", "All others"] 
 epilepsy=["Within the past year with more than 12 seizures","Within the past 2 years with more than 12 seizures",
 "Within the past 2 years with less than 12 seizures","2-3 years with no seizures in the past 1 year",
 "2-3 years with no seizures in the past 1 year","More than 3 years ago with no seizures in the past 3 years"] 
 hodgkin=["3+ years"]
 huntington=["Huntington's Disease"]
 lou=["Lou Gehrig's Disease (ALS)"]
 sclerosis=["0-2 years","2-3 years ago","3-4 years ago","4-5 years ago","5-10 years ago","10+ yrs ago"]
 neuropathy=["Diabetic Neuropathy","Other"]
 parkinson=["Within the past 2 years","2-3 years ago", "3-4 years ago", "4+ years ago"]
 parkinsonSevere=["Mild to moderate", "Severe"]
 anemia=["Sickle Cell Anemia"]
 lupus=["Systemic", "Discoid"]
 erythematosus=["Currently being treated (taking medication) or within the last year", "1-2 yrs ago",
 "2-4 yrs ago","4-5 years ago","5-10 yrs ago","10+ yrs ago" ]
 complications=["Yes", "No"]
 //----------------------------------Joint and Muscle------------------------------------------
 arthritis=["Osteo","Rheumatoid - minimal, slight impairment and not disabled","Rheumatoid - all others and/or disabled"]
 gouts=["Gout"]
 muscular=["Within the past 1 year", "1-2 years ago","2-3 years ago", "3+ years ago"]
 paralysis=["Within the past 3 years, been medically diagnosed or treated, or hospitalized for paralysis of two or more extremities",
 "More than 3 years, been medically diagnosed or treated, or hospitalized for paralysis of two or more extremities"]
 //-------------------------------Kidney------------------------------------------------------------------
 dialysis=["currently","Not currently, but in the past 1 year","1-2 years ago","2-4 years ago","4-5 years ago",
 "5-10 yrs ago","10+ years ago",]
 kidney=["In the past 1 year","1-2 years ago","2-4 years ago","4-5 yrs ago","5-10 years ago","10+ years ago."]
 transplant=["Transplant recipient"] 
 //-----------------------------HEart Circulatory----------------------------------------------------------
 aneurysm=["0-1 year ago","1-2 years ago","2-3 years ago","3-5 years ago","5+ years ago"]
 cardiomyopathy=["0-1 year ago","1-2 years ago","2-3 years ago","3-5 years ago","5-10 years ago", "10+ years ago"]
 bp=["1-2","3+"]
 pulmonary=["Within the past 6 months"," 6 months to 1 year ago","1-2 years ago","2+ years ago"] 
 transient=["Within the past 6 months","6-12 months ago","1-2 years ago","2-3 years ago","3-5 years ago",
 "5+ years ago"] 
 //----------------------------------------------------Liver-------------------------------------------------
 hepatitis=["0-1 year","1-2 years","2-5 years ago","5+ years ago"]
 liver=["0-1 year","1-2 years ago","2+ years ago"]
 //-----------------------------------------Lung-----------------------------------------------------------
 asthma=["Mild, occasional, brief episodes, allergic, seasonal","Moderate, more than 1 episode a month",
 "Severe, hospitalization or ER visit in past 12 months, Maintenance steroid use","Combined with Tobacco Use - Smoker"]
 copd=["Mild and non-tobacco","Moderate","Severe"]
 chronic=["Within the past 2 years","2-3 years ago","3-5 yrs-ago","5+ yrs-ago"]
 oxygen=["Currently or within the past 6 months","6-12 months ago","1-2 years ago","2+ years ago"]
 sleep=["Over table 2 weight limit","High blood pressure"]
 tb=["Within the past 2 years","2+ years ago"]
 //--------------------------------Mental Nervous Disorder---------------------------------------------
 dementia=["Within the past 2 years", "2-5 yrs ago", "5+ yrs ago"]
 anxiety=["1-2 meds", "3+"]
 ptsd=["Mild (single episode)", "Moderate", "Severe"]
 retard=["Mild to moderate", "Severe"]
 //------------------------------------Other--------------------------------------------------------
 alcohol=["Within the last 1 year","1-2 years ago","2-5 years ago", "5+ years ago"]
 amput=["Injury", "Disease"]
 blind=["Diabetes, circulatory disorder, or other illness", "Non-illness related"]
 driving=["Within the last 1 year","1-2 years ago","2-3 years ago", "3-5 years ago", "5+ years ago"]
 drug=["0-1", "1-2", "2-4", "4-5", "5-7", "7-10", "10+"]
 home=["Currently requires assistance", "Within the last 1 year"]
 hospital=["Currently hospitalized","Hospitalized 2 or more times in the past 12 months"]
 felony=["Currently or in the past 2 ","2-7 ", "7-10 ","10+ "]
 wheelchair=["Currently or in the past 6 months due to chronic illness or disease","Currently due to injury",
 "0-1 year", "1-2 years ago", "2+ years ago"]
 


beforeChange($event: NgbPanelChangeEvent) {
if ($event.panelId === 'preventchange-2') {
$event.preventDefault();
}

if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
$event.preventDefault();
}
}


    constructor(private router: Router,
        private route: ActivatedRoute, private formDataService: FormDataService,
        private workflowService: WorkflowService) {
    }

    ngOnInit() {
        this.workType = this.formDataService.getWork();

    }
    //Save button event Starts
    save(form: any) {
        if (!form.valid)
            return;

        this.formDataService.setWork(this.workType);
        let firstState = this.workflowService.getFirstInvalidStep(STEPS.work);       
        this.router.navigate(['result'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
    //Save button event Ends

    //Cancel button event Starts
    cancel() {
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
    //Cancel button event Ends
}

