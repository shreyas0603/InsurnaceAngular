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
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { AgentChangePasswordComponent } from './agent-change-password/agent-change-password.component';
import { GetAgentComponent } from './get-agent/get-agent.component';
import { UpdateAgentComponent } from './update-agent/update-agent.component';
import { UpdateQueryComponent } from './update-query/update-query.component';
import { UpdateCustomerInsuranceAccountComponent } from './update-customer-insurance-account/update-customer-insurance-account.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { UpdateInsuranceSchemeComponent } from './update-insurance-scheme/update-insurance-scheme.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCommisionWithdrawalComponent } from './add-commision-withdrawal/add-commision-withdrawal.component';
import { GetCommisionWithdrawalComponent } from './get-commision-withdrawal/get-commision-withdrawal.component';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { CustomerChangePasswordComponent } from './customer-change-password/customer-change-password.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { AddQueryComponent } from './add-query/add-query.component';
// import { AddAgentComponent } from './add-agent/add-agent.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultPageComponent
  },
  {
    path:'aboutUs',
    component:AboutUsComponent
  },
  {
    path:'admin',
    component:AdminHomePageComponent
  },
  {
    path:'adminProfile',
    component:AdminProfileComponent
  },
  {
    path:'adminChangePassword',
    component:AdminChangePasswordComponent
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
    path:'getAgent',
    component:GetAgentComponent
  },
  {
    path:'agentProfile',
    component:AgentProfileComponent
  },
  {
    path:'updateAgent',
    component:UpdateAgentComponent
  },
  {
    path:'agentChangePassword',
    component:AgentChangePasswordComponent
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
    path:'updateEmployee',
    component:UpdateEmployeeComponent
  },
  {
    path:'addLocation',
    component:AddLocationComponent
  },
  {
    path:'getLocation',
    component:GetLocationComponent
  },
  {
    path:'updateLocation',
    component:UpdateLocationComponent
  },
  {
    path:'customer',
    component:CustomerComponentComponent
  },
  {
    path:'customerChangePassword',
    component:CustomerChangePasswordComponent
  },
  {
    path:'customerProfile',
    component:CustomerProfileComponent
  }
  ,
  {
    path:'agentCustomer',
    component:GetAgentCustomerComponent
  },
  {
    path:'updateCustomer',
    component:UpdateCustomerComponent
  },
  {
    path:'getCustomerInsuranceAccount',
    component:GetCustomerInsuranceAccountComponent
  },
  {
    path:'updateCustomerInsuranceAccount',
    component:UpdateCustomerInsuranceAccountComponent
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
    path:'updateInsuranceScheme',
    component:UpdateInsuranceSchemeComponent
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
    path:"addCommmisionWithdrawal",
    component:AddCommisionWithdrawalComponent
  },
  {
    path:"getCommisionWithdrawal",
    component:GetCommisionWithdrawalComponent
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
  },
  {
    path:'updateQuery',
    component:UpdateQueryComponent
  },
  {
    path:'addQuery',
    component:AddQueryComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
