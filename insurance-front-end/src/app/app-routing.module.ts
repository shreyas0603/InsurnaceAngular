import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultPageComponent } from './default-page/default-page.component';
import { AgentComponentComponent } from './agent-component/agent-component.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddInsuranceTypeComponent } from './add-insurance-type/add-insurance-type.component';
import { CommonLoginComponent } from './common-login/common-login.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AddInsuranceSchemeComponent } from './add-insurance-scheme/add-insurance-scheme.component';
import { AddInsurancePlanComponent } from './add-insurance-plan/add-insurance-plan.component';
import { GetInsuranceTypeComponent } from './get-insurance-type/get-insurance-type.component';
import { GetInsuranceSchemeComponent } from './get-insurance-scheme/get-insurance-scheme.component';
import { GetAgentCustomerComponent } from './get-agent-customer/get-agent-customer.component';
import { GetCustomerInsuranceAccountComponent } from './get-customer-insurance-account/get-customer-insurance-account.component';
import { GetPolicyPaymentComponent } from './get-policy-payment/get-policy-payment.component';
import { GetPolicyClaimComponent } from './get-policy-claim/get-policy-claim.component';
import { GetCommisionComponent } from './get-commision/get-commision.component';
import { GetInsurancePlanComponent } from './get-insurance-plan/get-insurance-plan.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateInsurancePlanComponent } from './update-insurance-plan/update-insurance-plan.component';
import { UpdateInsuranceTypeComponent } from './update-insurance-type/update-insurance-type.component';
import { GetLocationComponent } from './get-location/get-location.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { GetFeedbackComponent } from './get-feedback/get-feedback.component';
// import { AddAgentComponent } from './add-agent/add-agent.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultPageComponent
  },
  {
    path:'admin',
    component:AdminHomePageComponent
  },
  {
    path:'agent',
    component:AgentComponentComponent
  },
  {
    path:'addAgent',
    component:AddAgentComponent
  },
  {
    path:'addEmployee',
    component:AddEmployeeComponent
  },
  {
    path:'getEmployee',
    component:GetEmployeeComponent
  },
  {
    path:'addLocation',
    component:AddLocationComponent
  },
  {
    path:'getLocation',
    component:GetLocationComponent
  }
  ,
  {
    path:'agentCustomer',
    component:GetAgentCustomerComponent
  },
  {
    path:'getCustomerInsuranceAccount',
    component:GetCustomerInsuranceAccountComponent
  },
  {
    path:"addInsuranceType",
    component:AddInsuranceTypeComponent
  },
  {
    path:"getInsuranceType",
    component:GetInsuranceTypeComponent
  },
  {
    path:"addInsuranceScheme",
    component:AddInsuranceSchemeComponent
  },
  {
    path:"getInsuranceScheme",
    component:GetInsuranceSchemeComponent
  },
  {
    path:"addInsurancePlan",
    component:AddInsurancePlanComponent
  },
  {
    path:"getInsurancePlan",
    component:GetInsurancePlanComponent
  },
  {
    path:"login",
    component:CommonLoginComponent
  },
  {
   path:"getPolicyPayment",
   component:GetPolicyPaymentComponent 
  },
  {
    path:"getPolicyClaim",
    component:GetPolicyClaimComponent
  },
  {
    path:"getCommission",
    component:GetCommisionComponent
  },
  {
    path:"updateInsurancePlan",
    component:UpdateInsurancePlanComponent
  },
  {
    path:"updateInsuranceType",
    component:UpdateInsuranceTypeComponent
  },
  {
    path:'getFeedback',
    component:GetFeedbackComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
